import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
import slide1 from "../../../assets/home/01.jpg";
import slide2 from "../../../assets/home/02.jpg";
import slide3 from "../../../assets/home/03.png";


const Banner = () => {
  return (
    <Carousel
      className="mt-16 md:mt-0"
      autoPlay={true}
      interval={3000}  
      infiniteLoop={true} 
      showThumbs={true} 
      showArrows={true}  
      showStatus={false} 
      dynamicHeight={true} 
      stopOnHover={true}
      emulateTouch={true}  
      useKeyboardArrows={true} 
    >
      <div>
        <img src={slide1} alt="Delicious food" />
      </div>
      <div>
        <img src={slide2} alt="Tasty dishes" />
      </div>
      <div>
        <img src={slide3} alt="Yummy meals" />
      </div>
    </Carousel>
  );
};

export default Banner;
