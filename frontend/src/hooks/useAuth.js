import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector((state) => state.auth);

  return auth?.accessToken && auth?.user ? auth?.user : {};
};

export default useAuth;
