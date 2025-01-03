import PropTypes from "prop-types";



function ItemCard({ item }) {
  const { name , recipe, image} = item || {};
  return (
    <div className=""> 
     <div className="">
        <img src={image} alt={name} />
     </div>
     <div className="my-3 space-y-3 text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{recipe}</p>
     </div>
      <div className="text-center my-6">
        <button className="btn btn-outline border-b-4 border-black">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemCard;
