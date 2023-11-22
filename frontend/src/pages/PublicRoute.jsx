import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const user = useAuth();

  return !user?._id ? (
    children
  ) : user?.role === "admin" ? (
    <Navigate to="/admin" />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default PublicRoute;
