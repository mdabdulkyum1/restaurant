import Banner from "./Banner/Banner";
import Callus from "./CallUs/Callus";
import Category from './Category/Category';
import ChefRecommend from "./ChefRecommends/ChefRecommend";
import ChefService from "./ChefService/ChefService";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Foods | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <Callus></Callus>
      <ChefRecommend></ChefRecommend>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
