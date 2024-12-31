import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const FeaturedSlider = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            320: { // For small screens (mobile)
                slidesPerView: 1,
                spaceBetween: 8,
            },
            640: { // For medium screens (tablets)
                slidesPerView: 2,
                spaceBetween: 12,
            },
            1024: { // For larger screens (laptops and desktops)
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1280: { // For extra-large screens
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }}

      >
        <SwiperSlide>
            <div className="">
                <img src={slide1} alt="salads" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="">
                <img src={slide2} alt="pizzas" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">pizzas</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="">
                <img src={slide3} alt="soups" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="">
                <img src={slide4} alt="desserts" />
                <h1 className="text-4xl uppercase text-center -mt-16 text-white">desserts</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="">
                <img src={slide5} alt="salads" />
                <h1 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="">
                <img src={slide1} alt="salads" />
                <h1 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h1>
            </div>
        </SwiperSlide>
        
        </Swiper>
    );
};

export default FeaturedSlider;