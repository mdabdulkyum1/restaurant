import { FaUserTie, FaTrash, FaCrown, FaStore, FaUsers } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/GetAuthInfo/useAuth";

const ManageAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();


  const { data = [], isPending, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      return data;
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleRoleChange = (id, newRole) => {
    Swal.fire({
      title: `Are you sure Make ${newRole}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, make to ${newRole}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const newRoleInfo = { role: newRole };
        const { data } = await axiosSecure.patch(`/user/${id}`, newRoleInfo);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Success",
            text: `Now ${newRole} this user.`,
            icon: "success",
          });
        }
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/user/${id}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  }; // Todo verify is admin

  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return <FaCrown className="text-yellow-500" />;
      case "manager":
        return <FaStore className="text-blue-500" />;
      case "customer":
        return <FaUsers className="text-green-500" />;
      case "guest":
        return <FaUserTie className="text-gray-500" />;
      default:
        return <FaUserTie className="text-gray-500" />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Total users: {data.length}</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-yellow-600 text-white">
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Role</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr
                key={user._id}
                className="text-center hover:bg-gray-100 even:bg-gray-50"
              >
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{user.name}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">
                  <div className="flex items-center justify-center gap-3">
                    {getRoleIcon(user.role)}
                    <span>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </div>
                </td>
                <td className="border border-gray-300 p-2">
                  <select
                    className="bg-yellow-500 text-white px-3 py-1 rounded shadow-md hover:bg-yellow-600"
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="customer">Customer</option>
                    <option value="guest">Guest</option>
                  </select>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded shadow-md hover:bg-red-600 ml-2"
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

export default ManageAllUsers;
