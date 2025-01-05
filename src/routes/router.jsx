import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Menus from "../pages/Menus/Menus";
import OurShop from "../pages/OurShop/OurShop";
import Dashboard from "../layout/Dashboard/dashboard";
import UserDashboard from "../layout/Dashboard/UserDashboard";
import AdminHome from "../pages/Admin/AdminHome";
import AdminProfile from "../pages/Admin/AdminProfile";
import AddItem from "../pages/Admin/AddItem";
import ManageItems from "../pages/Admin/ManageItems";
import ManageAllBookings from "../pages/Admin/ManageAllBooking";
import Login from "../pages/Authentications/Login";
import SignUp from "../pages/Authentications/SignUp";

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
            {
                path: '/dashboard',
                element: <AdminHome></AdminHome>
            },
            {
                path: "profile",
                element: <AdminProfile></AdminProfile>
            },
            {
                path: "add-item",
                element: <AddItem></AddItem>
            },
            {
                path: "manage-items",
                element: <ManageItems></ManageItems>
            },
            {
                path: "manage-all-bookings",
                element: <ManageAllBookings></ManageAllBookings>
            }
        ]
    },
    {
        path: "user-dashboard",
        element: <UserDashboard></UserDashboard>,
        children: [

        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "signup",
        element: <SignUp></SignUp>
    }
]);

export default router;
