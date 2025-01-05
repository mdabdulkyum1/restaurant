import {
  FaHome,
  FaUtensils,
  FaListAlt,
  FaBook,
  FaUsers,
  FaShoppingCart,
  FaEnvelope,
  FaSignOutAlt,
  FaUser,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Foods | Dashboard</title>
      </Helmet>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`bg-gray-800 text-white w-64 p-4 flex-col fixed md:relative md:flex ${
            isSidebarOpen ? "flex" : "hidden"
          } md:block`}
          style={{ overflowY: "auto", maxHeight: "100vh" }} // Added styles for scrolling
        >
          {/* Sidebar Header */}
          <div className="text-2xl font-semibold mb-6">Dashboard</div>

          {/* Navigation Links */}
          <ul className="menu space-y-4">
            <li>
              <NavLink
                to="/dashboard"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaHome />
                <span>Admin Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="profile"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaUser />
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaCog />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <NavLink
                to="add-item"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaUtensils />
                <span>Add Items</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="manage-items"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaListAlt />
                <span>Manage Items</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="manage-all-bookings"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaBook />
                <span>Manage Bookings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaUsers />
                <span>All Users</span>
              </NavLink>
            </li>

            <div className="divider border-t border-white"></div>

            <li>
              <Link
                to="/"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaHome />
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaBars />
                <span>Menu</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaShoppingCart />
                <span>Shop</span>
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaEnvelope />
                <span>Contact</span>
              </Link>
            </li>
          </ul>

          {/* Logout Button */}
          <div className="mt-auto">
            <button className="flex items-center justify-center space-x-2 bg-yellow-600 text-white py-2 px-4 rounded-full w-full hover:bg-red-700">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Toggle Button */}
        <div className="fixed right-4 top-4 md:hidden z-50">
          <button
            className="bg-gray-800 text-white p-2 rounded-full"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Overlay for Mobile Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 -z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 md:p-6 ml-0 ">
          {/* Dynamic Content */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
