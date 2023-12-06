import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { addUser } from "../utils/notification";

const AdminPrivateRoute = ({ children }) => {
  const user = useAuth();

  useEffect(() => {
    addUser(user?._id);
  }, [user]);

  return user?.role === "admin" ? children : <Navigate to="/sign-in" />;
};

export default AdminPrivateRoute;
