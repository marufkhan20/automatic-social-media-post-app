import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminPrivateRoute = ({ children }) => {
  const user = useAuth();

  return user?.role === "admin" ? children : <Navigate to="/sign-in" />;
};

export default AdminPrivateRoute;
