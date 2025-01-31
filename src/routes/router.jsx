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
import ManageAllUsers from "../pages/Admin/ManageAllUsers";
import AdminRoute from './AdminRoute';
import PrivateRoute from "./PrivateRoute";
import MyCart from "../pages/UserDashboardInfo/MyCart";
import Payment from "../pages/UserDashboardInfo/Payment";
import PaymentHistory from "../pages/UserDashboardInfo/PaymentHistory";

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
        element: <PrivateRoute><AdminRoute><Dashboard></Dashboard></AdminRoute></PrivateRoute>,
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
            },
            {
                path: "manage-users",
                element: <ManageAllUsers></ManageAllUsers>
            }
        ]
    },
    {
        path: "user-dashboard",
        element: <UserDashboard></UserDashboard>,
        children: [
            {
                path:"my-cart",
                element: <MyCart></MyCart>
            },
            {
                path: "payment-history",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            }
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
