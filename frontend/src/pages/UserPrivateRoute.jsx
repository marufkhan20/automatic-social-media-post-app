import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { addUser } from "../utils/notification";

const UserPrivateRoute = ({ children }) => {
  const user = useAuth();

  useEffect(() => {
    addUser(user?._id);
  }, [user]);

  return user?.role === "user" || user?.role === "manager" ? (
    children
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default UserPrivateRoute;
