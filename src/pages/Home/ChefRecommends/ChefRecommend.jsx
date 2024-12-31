import { useEffect, useState } from "react";
import ItemCard from "../../../components/shared/ItemCard/ItemCard";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";


const ChefRecommend = () => {
       const [menus, setMenus] = useState([]);
    
        useEffect(()=>{
            fetch('/menu.json')
             .then(res=> res.json())
             .then(data=> setMenus(data.filter(m=> m.category === 'salad')))
        },[])
    
    return (
        <div className="my-12">
            <SectionTitle title="CHEF RECOMMENDS" subTitle="Should Try"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
               {
                menus.map(item=> <ItemCard item={item} key={item._id}></ItemCard> )
               } 
            </div>
        </div>
    );
};

export default ChefRecommend;