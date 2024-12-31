import PropTypes from 'prop-types'



const MenuBanner = ({title,details,img}) => {

    return (
        <div className={`hero min-h-[60vh] bg-cover bg-
        no-repeat`} style={{
            backgroundImage: `url(${img})`,
          }}>
      <div className="hero-overlay bg-opacity-60 z-0"></div>
      <div className="hero-content bg-black w-full z-10 rounded-2xl bg-opacity-60 text-neutral-content text-center">
        <div className="rounded-lg py-16">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      
          <p className="  mx-auto mb-5 px-28">
            {details}
          </p>
 
        </div>
      </div>
    </div>
    );
};


MenuBanner.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

export default MenuBanner;
