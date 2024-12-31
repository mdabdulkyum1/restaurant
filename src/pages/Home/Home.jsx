import Banner from "./Banner/Banner";
import Callus from "./CallUs/Callus";
import Featured from "./Category/Category";
import ChefService from "./ChefService/ChefService";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Featured></Featured>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <Callus></Callus>
    </>
  );
};

export default Home;
