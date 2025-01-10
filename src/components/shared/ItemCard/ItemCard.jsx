import PropTypes from "prop-types";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/GetCartData/useCart";

function ItemCard({ item }) {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const {refetch} = useCart();
  const { _id, name, recipe, image, price } = item || {};

  const handelAddToCart = async () => {
    const cartItem = {
      menuId: _id,
      email: user?.email,
      name,
      recipe,
      price,
      image,
    };

    if (user && user?.email) {
      const { data } = await axiosSecure.post("/carts", cartItem);
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img src={image} alt={name} className="w-full h-64 object-cover" />
      </figure>

      <div className="indicator">
        <span className="indicator-item badge badge-secondary">{price}</span>
        <button className="btn">Price</button>
      </div>
      <div className="card-body">
        <h2 className="card-title text-center text-2xl font-bold">{name}</h2>
        <p className="text-center text-gray-600">{recipe}</p>
        <div className="card-actions justify-center mt-4">
          <button
            onClick={handelAddToCart}
            className="btn btn-outline border-b-4 border-black hover:bg-black hover:text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemCard;
