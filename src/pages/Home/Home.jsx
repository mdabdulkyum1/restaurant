import Banner from "./Banner/Banner";
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
    </>
  );
};

export default Home;
