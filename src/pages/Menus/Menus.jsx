import MenuBanner from "./MenuBanner/MenuBanner";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import useMenu from "../../hooks/GetData/useMenu";
import MenuCard from "../../components/shared/MenuCard/MenuCard";

import menuBannerImg from "../../assets/menu/banner3.jpg";
import dessertMenusImg from "../../assets/menu/dessertBg.jpeg";
import pizzaMenusImg from "../../assets/menu/pizzaBg.jpg";
import saladMenusImg from "../../assets/menu/salad-bg.jpg";
import soupMenusImg from "../../assets/menu/soup-bg.jpg";


const Menus = () => {
                                    const { menus } = useMenu({active:'all'});
console.log(menus);
  const popularMenus = menus.filter((menu) => menu.category === "popular");
  const dessertMenus = menus.filter((menu) => menu.category === "dessert");
  const pizzaMenus = menus.filter((menu) => menu.category === "pizza");
  const saladMenus = menus.filter((menu) => menu.category === "salad");
  const soupMenus = menus.filter((menu) => menu.category === "soup");

  return (
    <>
      <section>
        <MenuBanner
          title="OUR MENU"
          details="Would you like to try a dish?"
          img={menuBannerImg}
        ></MenuBanner>
      </section>

      <section className="my-12">
        <SectionTitle
          title="TODAY'S OFFER"
          subTitle="Don't miss"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-3 md:px-0">
          {popularMenus.map((menu) => (
            <MenuCard menu={menu} key={menu._id}></MenuCard>
          ))}
        </div>
        <div className="text-center my-6">
          <button className="btn btn-outline border-b-4 border-black">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
      </section>

      <section>
        <MenuBanner
          title="DESSERTS"
          details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={dessertMenusImg}
        ></MenuBanner>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-3 md:px-0">
          {dessertMenus.map((menu) => (
            <MenuCard menu={menu} key={menu._id}></MenuCard>
          ))}
        </div>
        <div className="text-center my-6">
          <button className="btn btn-outline border-b-4 border-black">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
      </section>

      <section>
        <MenuBanner
          title="PIZZA"
          details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={pizzaMenusImg}
        ></MenuBanner>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-3 md:px-0">
          {pizzaMenus.map((menu) => (
            <MenuCard menu={menu} key={menu._id}></MenuCard>
          ))}
        </div>
        <div className="text-center my-6">
          <button className="btn btn-outline border-b-4 border-black">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
      </section>

      <section>
        <MenuBanner
          title="salad"
          details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={saladMenusImg}
        ></MenuBanner>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-3 md:px-0">
          {saladMenus.map((menu) => (
            <MenuCard menu={menu} key={menu._id}></MenuCard>
          ))}
        </div>
        <div className="text-center my-6">
          <button className="btn btn-outline border-b-4 border-black">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
      </section>

      <section>
        <MenuBanner
          title="SOUPS"
          details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={soupMenusImg}
        ></MenuBanner>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-3 md:px-0">
          {soupMenus.map((menu) => (
            <MenuCard menu={menu} key={menu._id}></MenuCard>
          ))}
        </div>
        <div className="text-center my-6">
          <button className="btn btn-outline border-b-4 border-black">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
      </section>
    </>
  );
};

export default Menus;
