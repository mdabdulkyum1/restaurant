
const AdminProfile = () => {
  return (
    <div className="p-6 bg-light">
      <h1 className="text-3xl font-bold mb-6">Admin Profile</h1>

      {/* Profile Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
          {/* Profile Picture */}
          <div className="mb-6 md:mb-0 md:mr-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Admin"
              className="w-36 h-36 rounded-full border-4 border-primary"
            />
          </div>
          {/* Profile Details */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-xl text-gray-600">Administrator</p>
            <div className="mt-4">
              <p><strong>Email:</strong> johndoe@example.com</p>
              <p><strong>Phone:</strong> +1 (234) 567-890</p>
              <p><strong>Location:</strong> New York, USA</p>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8 text-center md:text-right">
          <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-accent">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
