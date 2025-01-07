import PropTypes from "prop-types";
import useAuth from "./../hooks/GetAuthInfo/useAuth";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/GetRole/useRole";

function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  const { role, adminLoading } = useRole();

  if (loading && adminLoading) {
    return <h1>loading....</h1>;
  }

  if (user && role === "admin") {
    return children;
  }

  return <Navigate to="/dashboard" replace="true"></Navigate>;
}

AdminRoute.propTypes = {
  children: PropTypes.any,
};

export default AdminRoute;
