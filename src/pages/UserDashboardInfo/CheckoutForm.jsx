import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../hooks/AxiosSecure/useAxiosSecure';
import useCart from './../../hooks/GetCartData/useCart';
import useAuth from "../../hooks/GetAuthInfo/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [err, setErr] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [invoiceId, setInvoiceId] = useState('');
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const {carts, refetch} = useCart();
    const totalPrice = carts.reduce( (acc, item)=> acc + item.price , 0);

    useEffect(()=>{
      
    if(totalPrice > 0){
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
      .then(res=> {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
    }
        

    } , [axiosSecure, totalPrice])

    const handelSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const { error, paymentMethod} =  await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if(error){
           console.log("Error Payment ", error);
           setErr(error.message)
          }else{
            console.log("Payment Method", paymentMethod);
            setErr('')
        }

      // server set up then setup below
      const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous" 
            }
          }
        }
      )

      if(confirmError){
        console.log("confirmError");
      }else{
        console.log("payment intent", paymentIntent);
        if(paymentIntent.status === "succeeded"){
          setInvoiceId(paymentIntent.id);

          const payment = {
            email: user?.email,
            price: totalPrice,
            date: new Date(),  // utc date convert use moment js
            transactionId: paymentIntent.id,
            cartIds: carts.map(item=> item._id),
            menuItemIds: carts.map(item=> item.menuId),
            status: "pending"
          }
          const res = await axiosSecure.post('/payments', payment);
          console.log(res.data);
          if(res.data.deleteResult.deletedCount > 0){
            refetch();
          }
          if(res.data.paymentResult.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/user-dashboard/payment-history');
          }
          
        }
      }






    }

    return (
      <>
        <div className="my-6">
            <h2 className=" font-bold text-2xl" >Payable amount: ${totalPrice.toFixed(2)}</h2>
        </div>
        <form onSubmit={handelSubmit}>
             <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#000000',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn bg-green-500 my-3" type="submit" disabled={!stripe || !elements || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{err}</p>
      {
         invoiceId && <p className="text-xl font-bold">Your Invoice Id:  {invoiceId}</p>
      }
        </form>
      </>
    );
};

export default CheckoutForm;