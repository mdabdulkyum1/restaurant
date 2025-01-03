import MenuBanner from "../Menus/MenuBanner/MenuBanner";
import shopImg from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/GetData/useMenu";
import ItemCard from "../../components/shared/ItemCard/ItemCard";
import {  useState } from "react";
import useCategories from "../../hooks/GetData/useCategories";
import usePagination from "../../hooks/pagination/usePagination";

const OurShop = () => {
  const [active, setActive] = useState('all');
  const {pages, currentPage, numberOfPages, setCurrentPage, handelPrevBtn, handelNextBtn } = usePagination();
  const { menus } = useMenu({active, currentPage});
  const {allCategories}  = useCategories();


  const handelClick = category =>{
    setActive(category)
  }

  return (
    <div className="">
      <MenuBanner
        title="Our Shop"
        details="Would you like to try a dish?"
        img={shopImg}
      ></MenuBanner>

      <div className="my-12">
        <div className="my-10">
              <div className="flex flex-col md:flex-row justify-center gap-3">
                  <button className={`btn ${active==='all'? "bg-yellow-500" : ""}`} onClick={()=> handelClick("all")}>All Foods</button>
                  {allCategories.map((c,idx)=> <button onClick={()=> handelClick(c)} className={`btn uppercase ${active===c ? "bg-yellow-500" : ""}`} key={idx}>{c}</button>)}
              </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {menus.map((item) => (
            <ItemCard item={item} key={item._id}></ItemCard>
          ))}
        </div>
      </div>

      <div className="my-12">
          <div className="text-center pagination-div">
              
                <button className="btn" onClick={handelPrevBtn} disabled={currentPage === 0}>Prev</button>
                {
                    pages.map((page)=> <button 
                        className={`btn ${currentPage === page ? "bg-yellow-500" : ''}`}
                        onClick={()=> page !== "..." && setCurrentPage(page)}
                        disabled={page === "..."}
                        key={page}>
                            {page === "..." ? "..." : page+1}
                        </button>)
                    }
                <button onClick={handelNextBtn} disabled={currentPage === numberOfPages -1}>Next</button>
                
            </div>
      </div>
    </div>
  );
};

export default OurShop;
