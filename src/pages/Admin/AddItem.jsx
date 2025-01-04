import { FaUtensils } from 'react-icons/fa';

const AddItem = () => {
    return (
        <div className="md:flex justify-center p-6">
            <div className="w-full  bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-6">
                    <p className="text-yellow-600">---What{"'"}s new?---</p>
                    <h1 className="text-2xl font-bold">ADD AN ITEM</h1>
                </div>
                <form>
                    {/* Recipe Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="recipe-name">Recipe name*</label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            id="recipe-name"
                            type="text"
                            placeholder="Recipe name"
                        />
                    </div>

                    {/* Category and Price */}
                    <div className="flex flex-wrap mb-4 -mx-2">
                        <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="category">Category*</label>
                            <select
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                id="category"
                            >
                                <option>Category</option>
                            </select>
                        </div>
                        <div className="w-full sm:w-1/2 px-2">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">Price*</label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                id="price"
                                type="text"
                                placeholder="Price"
                            />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="recipe-details">Recipe Details*</label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            id="recipe-details"
                            rows="4"
                            placeholder="Recipe Details"
                        ></textarea>
                    </div>

                    {/* File Upload */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="file-upload">Choose File</label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            id="file-upload"
                            type="file"
                        />
                    </div>

                    {/* Add Item Button */}
                    <div className="text-right">
                        <button
                            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            type="submit"
                        >
                            Add Item <FaUtensils className="inline-block ml-2" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
