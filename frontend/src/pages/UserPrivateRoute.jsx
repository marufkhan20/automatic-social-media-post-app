import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserPrivateRoute = ({ children }) => {
  const user = useAuth();

  return user?.role === "user" || user?.role === "manager" ? (
    children
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default UserPrivateRoute;
