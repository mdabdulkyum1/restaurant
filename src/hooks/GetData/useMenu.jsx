import { useEffect, useState } from "react";

const useMenu = ({active}) => {
  const [menus, setMenus] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/foods?category=${active}`)
         .then(res=> res.json())
         .then(data=> setMenus(data))
    },[active])

  return {menus}
};

export default useMenu;