import { FaSignOutAlt, FaHome, FaUser, FaCog } from "react-icons/fa"; // React Icons for sidebar
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-4 hidden md:flex flex-col justify-between pt-[4.2rem]">
        {/* Sidebar Content */}
        <div>
          <div className="text-2xl font-semibold mb-6">Dashboard</div>
          <ul className="space-y-4">
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
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded"
              >
                <FaUser />
                <span>Profile</span>
              </a>
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
          </ul>
        </div>

        {/* Logout Button at the Bottom */}
        <div className="mt-auto">
          <button className="flex items-center justify-center space-x-2 bg-yellow-600 text-white py-2 px-4 rounded-full w-full hover:bg-red-700">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="text-3xl font-bold text-gray-900">Dashboard Content</div>
        {/* Add more content here */}
      </div>

      {/* Mobile Sidebar */}
      <div className="fixed top-4 left-4 md:hidden">
        <button className="bg-gray-800 text-white p-2 rounded-full">
          {/* Menu Icon */}
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
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
