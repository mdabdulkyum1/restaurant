import Swal from "sweetalert2";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import useCart from "../../hooks/GetCartData/useCart";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { carts, refetch } = useCart();
  const totalPrice = carts
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  const axiosSecure = useAxiosSecure();

  const handelDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/cart/${id}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Cart Item Removed!",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div className="">
      <div className="flex justify-center my-7">
        <SectionTitle
          title="WANNA ADD MORE?"
          subTitle="--My Cart--"
        ></SectionTitle>
      </div>
      <div className="flex justify-around">
        <h1 className="text-3xl">Total orders: {carts.length}</h1>
        <h1 className="text-3xl">Total price: ${totalPrice}</h1>
        <div className="">
          <Link to="/user-dashboard/payment">
            <button className="btn bg-yellow-600 text-white">Pay</button>
          </Link>
        </div>
      </div>
      <div className="px-11">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {carts.map((cart, idx) => (
                <tr key={cart._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={cart.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{cart.name}</td>
                  <td>${cart.price}</td>
                  <td>
                    <button
                      onClick={() => handelDelete(cart._id)}
                      className="btn bg-red-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
