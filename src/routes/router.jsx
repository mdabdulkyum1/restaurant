import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Menus from "../pages/Menus/Menus";
import OurShop from "../pages/OurShop/OurShop";
import Dashboard from '../pages/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/", 
                element: <Home></Home>
            },
            {
                path: "our-menu",
                element: <Menus></Menus>
            },
            {
                path: "our-shop",
                element: <OurShop></OurShop>
            },
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [

        ]
    }
]);

export default router;
