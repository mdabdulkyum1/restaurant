import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/GetAuthInfo/useAuth";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments = [], isLoading} = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !!user?.email,
        queryFn: async ()=> {
            const {data} = await axiosSecure(`/payments/${user?.email}`)
            return data;
        }
    })

    if(isLoading){
        return <h1>loading...</h1>
    }

    return (
        <div className="my-12 px-12">
            Payment History : {payments.length}
            <div className="">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
{
    payments.map((payment, idx)=> <tr key={payment._id}>
    <th>{idx + 1}</th>
    <td>{payment.price}</td>
    <td>{payment.transactionId}</td>
    <td>{payment.status}</td>
  </tr> )
}
     

    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;