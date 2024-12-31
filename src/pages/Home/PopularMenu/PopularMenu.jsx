import { useEffect, useState } from 'react';
import SectionTitle from './../../../components/shared/SectionTitle/SectionTitle';
import MenuCard from '../../../components/shared/MenuCard/MenuCard';

const PopularMenu = () => {
    const [menus, setMenus] = useState([]);

    useEffect(()=>{
        fetch('/menu.json')
         .then(res=> res.json())
         .then(data=> setMenus(data.filter(m=> m.category === 'popular')))
    },[])


    return (
        <div className='my-11'>
            <SectionTitle title="FROM OUR MENU" subTitle='Check it out'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-3 md:px-0">
                 {
                    menus.map(menu=> <MenuCard menu={menu} key={menu._id}></MenuCard>)
                 }
            </div>
            <div className="text-center my-6">
                 <button className="btn btn-outline border-b-4 border-black">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;