import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/foods?category=all`)
         .then(res=> res.json())
         .then(data=> setCategories(data))
    },[])

    const AllCategories = categories.map(menu => menu.category)
    const allCategories = AllCategories.filter((item, index)=> AllCategories.indexOf(item) === index);
 
  return {allCategories}
};

export default useCategories;