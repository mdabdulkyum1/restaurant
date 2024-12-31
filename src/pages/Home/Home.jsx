import Banner from "./Banner/Banner";
import Callus from "./CallUs/Callus";
import Category from './Category/Category';
import ChefRecommend from "./ChefRecommends/ChefRecommend";
import ChefService from "./ChefService/ChefService";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <Callus></Callus>
      <ChefRecommend></ChefRecommend>
      <Featured></Featured>
    </>
  );
};

export default Home;
