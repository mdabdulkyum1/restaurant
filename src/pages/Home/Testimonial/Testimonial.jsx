import { useEffect, useState } from "react";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-12">
      <SectionTitle
        title="Testimonial"
        subTitle="What Our Clients Say"
      ></SectionTitle>

      <div className="mt-11">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center h-[300px]">
                <div className="">
                    rating: {review.rating}
                </div>
                <div className="space-y-3">
                  <h1 className="text-[70px]">{'"'}</h1>
                  <p className="w-1/2 mx-auto">{review?.details}</p>
                  <h3 className="text-yellow-500 text-3xl">{review.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
