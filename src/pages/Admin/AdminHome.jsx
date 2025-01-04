import { FaWallet, FaStore, FaPhone } from 'react-icons/fa';

const AdminHome = () => {
  return (
    <div>
      <div className="text-3xl font-bold text-gray-900 mb-4">
        Hi, Welcome Back
      </div>

      <div className="">
        <div className="p-6">
          {/* Grid for the top three cards, responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaWallet />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">205</div>
                <div>Menu</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaStore />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">103</div>
                <div>Shop</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-pink-300 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaPhone />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">03</div>
                <div>Contact</div>
              </div>
            </div>
          </div>

          {/* Grid for the additional info, responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-yellow-100 p-6 rounded-lg flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-yellow-500 mb-4"></div>
              <div className="text-xl font-bold">Awlad Hossain</div>
            </div>
            <div className="bg-yellow-200 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Your Activities</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-shopping-cart text-blue-500 mr-2"></i>
                  <span>Orders: <span className="text-blue-500">6</span></span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-star text-blue-500 mr-2"></i>
                  <span>Reviews: <span className="text-blue-500">2</span></span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-book text-orange-500 mr-2"></i>
                  <span>Bookings: <span className="text-orange-500">1</span></span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-wallet text-red-500 mr-2"></i>
                  <span>Payment: <span className="text-red-500">3</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
