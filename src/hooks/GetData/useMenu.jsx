import { useEffect, useState } from "react";

const useMenu = ({active,currentPage}) => {
  const [menus, setMenus] = useState([]);
 
    useEffect(()=>{
        fetch(`http://localhost:5000/foods?category=${active}&page=${currentPage}&size=${6}`)
         .then(res=> res.json())
         .then(data=> setMenus(data))
    },[active, currentPage])

  return {menus}
};

export default useMenu;