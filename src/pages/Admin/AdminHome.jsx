import { FaBox, FaClipboardList, FaUserFriends, FaWallet } from "react-icons/fa";

const AdminHome = () => {
  return (
    <div>
      <div className="text-3xl font-bold text-gray-900 mb-4">
        Hi, Welcome Back
      </div>

      <div className="">
        <div className="p-6">
          {/* Grid for the top four admin cards, responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* Revenue Card */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaWallet />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">$12,450</div>
                <div>Revenue</div>
              </div>
            </div>

            {/* Customers Card */}
            <div className="bg-gradient-to-r from-blue-500 to-sky-400 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaUserFriends />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">2,540</div>
                <div>Customers</div>
              </div>
            </div>

            {/* Products Card */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-400 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaBox />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">324</div>
                <div>Products</div>
              </div>
            </div>

            {/* Orders Card */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaClipboardList />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">1,245</div>
                <div>Orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
