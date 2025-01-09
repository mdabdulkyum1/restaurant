import PropTypes from "prop-types";



function ItemCard({ item }) {
  const { _id, name , recipe, image} = item || {};


const handelAddToCart = id =>{
  console.log(id);
}

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <figure>
      <img src={image} alt={name} className="w-full h-64 object-cover" />
    </figure>

    <div className="card-body">
      <h2 className="card-title text-center text-2xl font-bold">{name}</h2>
      <p className="text-center text-gray-600">{recipe}</p>
      <div className="card-actions justify-center mt-4">
        <button onClick={()=> handelAddToCart(_id)} className="btn btn-outline border-b-4 border-black hover:bg-black hover:text-white">
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
