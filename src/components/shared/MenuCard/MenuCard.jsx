
import PropTypes from 'prop-types'
// import img from '../../../assets/others/profile.png' ** ## remove must

function MenuCard({menu}) {
    const {name, recipe, image, price} = menu;
  return (
    <div className='flex gap-6'>
        <div className="">
            <img src={image} alt={name} className="w-24 rounded-s-none rounded-t-[40px] rounded-r-[500px] rounded-b-[500px]" /> 
            {/* <div className="w-24 h-24 bg-yellow-400 rounded-s-none rounded-t-[40px] rounded-r-[500px] rounded-b-[500px]"></div> remove must */}
        </div>
        <div className="">
            <h1 className='text-3xl'>{name}-----------------------</h1>
            <p className=''>{recipe}</p>
        </div>
        <div className="">
            <p className='text-[#D99904]'>{price}</p>
        </div>
    </div>
  )
}

MenuCard.propTypes = {
    menu: PropTypes.object.isRequired,
}

export default MenuCard
