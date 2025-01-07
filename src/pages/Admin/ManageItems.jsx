import { FaEdit, FaTrash } from "react-icons/fa";

const ManageItems = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-yellow-600 text-sm">~~~ Hurry Up! ~~~</p>
        <h1 className="text-3xl font-bold text-gray-800">MANAGE ALL ITEMS</h1>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full bg-white border-collapse">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-yellow-600 text-white text-sm md:text-base">ITEM IMAGE</th>
              <th className="py-3 px-4 bg-yellow-600 text-white text-sm md:text-base">ITEM NAME</th>
              <th className="py-3 px-4 bg-yellow-600 text-white text-sm md:text-base">PRICE</th>
              <th className="py-3 px-4 bg-yellow-600 text-white text-sm md:text-base">EDIT</th>
              <th className="py-3 px-4 bg-yellow-600 text-white text-sm md:text-base">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Roast Duck Breast", price: "$14.5" },
              { name: "Tuna Niçoise", price: "$14.5" },
              { name: "Escalope de Veau", price: "$14.5" },
              { name: "Chicken and Walnut Salad", price: "$14.5" },
              { name: "Fish Parmentier", price: "$14.5" },
              { name: "Roasted Pork Belly", price: "$14.5" },
            ].map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-100 transition">
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center">
                    <span className="mr-2 text-gray-700 font-medium">{index + 1}</span>
                    <img
                      src="https://placehold.co/50x50"
                      alt="Item image"
                      className="w-12 h-12 rounded-full border"
                    />
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-800 font-medium">{item.name}</td>
                <td className="py-3 px-4 text-gray-700">{item.price}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 transition"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
