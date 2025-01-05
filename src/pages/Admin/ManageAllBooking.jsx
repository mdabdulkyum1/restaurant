import { useState } from "react";
import { FaCheck, FaTimes, FaTrashAlt } from "react-icons/fa";

const ManageAllBookings = () => {
  // Sample bookings data
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      date: "2024-09-10",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      date: "2024-09-12",
      status: "Approved",
    },
    {
      id: 3,
      name: "Mark Wilson",
      email: "mark.wilson@example.com",
      date: "2024-09-15",
      status: "Rejected",
    },
  ]);

  // Handle Approve
  const handleApprove = (id) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: "Approved" } : booking
      )
    );
  };

  // Handle Reject
  const handleReject = (id) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: "Rejected" } : booking
      )
    );
  };

  // Handle Delete
  const handleDelete = (id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };

  return (
    <div className="p-6 bg-light min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Manage All Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="px-4 py-2">{booking.name}</td>
                <td className="px-4 py-2">{booking.email}</td>
                <td className="px-4 py-2">{booking.date}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    booking.status === "Approved"
                      ? "text-green-600"
                      : booking.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {booking.status}
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => handleApprove(booking.id)}
                      className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                      title="Approve"
                    >
                      <FaCheck />
                    </button>
                    <button
                      onClick={() => handleReject(booking.id)}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                      title="Reject"
                    >
                      <FaTimes />
                    </button>
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600"
                      title="Delete"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllBookings;
