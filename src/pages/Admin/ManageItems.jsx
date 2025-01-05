import { FaEdit, FaTrash } from "react-icons/fa";

const ManageItems = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <p className="text-yellow-600">~~~ Hurry Up! ~~~</p>
        <h1 className="text-2xl font-bold">MANAGE ALL ITEMS</h1>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-yellow-600 text-white">ITEM IMAGE</th>
              <th className="py-2 px-4 bg-yellow-600 text-white">ITEM NAME</th>
              <th className="py-2 px-4 bg-yellow-600 text-white">PRICE</th>
              <th className="py-2 px-4 bg-yellow-600 text-white">EDIT</th>
              <th className="py-2 px-4 bg-yellow-600 text-white">DELETE</th>
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
              <tr key={index} className="border-t">
                <td className="py-2 px-4 text-center">
                  <div className="flex items-center justify-center">
                    <span className="mr-2">{index + 1}</span>
                    <img
                      src="https://placehold.co/50x50"
                      alt="Item image"
                      className="w-12 h-12"
                    />
                  </div>
                </td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.price}</td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-yellow-600 text-white px-2 py-1 rounded">
                    <FaEdit />
                  </button>
                </td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-red-600 text-white px-2 py-1 rounded">
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
