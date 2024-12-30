import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"


function Layout() {
  return (
    <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout