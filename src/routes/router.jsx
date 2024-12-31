import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Menus from "../pages/Menus/Menus";

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
            }
        ]
    }
]);

export default router;
