import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../../components/shared/Loading";
import { useLoginMutation } from "../../features/auth/authApi";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [login, { data, isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && data?.user?._id) {
      toast.success("User Login Successfully");
      console.log("user", data?.user);
      if (data?.user?.role === "admin") {
        navigate(`/admin`);
      } else {
        navigate(`/dashboard`);
      }
    }
  }, [data, isLoading, isError, error, navigate, email]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    login({
      email,
      password,
    });
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="  justify-center flex items-center bg-[#EFF6F9] w-full p-5 md:p-20">
          <div className="max-w-screen-xl mx-auto mb-10 md:mb-0 mt-32 md:mt-0">
            <div className="bg-white md:w-[1240px] w-[320px] p-5 md:p-10 shadow-xl ">
              <form onSubmit={submitHandler} className="">
                <div className="mb-5 md:mb-12">
                  <label
                    className="block text-gray-700 text-[16px] font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors?.email && (
                    <p className="text-red-500 font-medium mt-3">
                      {errors?.email}
                    </p>
                  )}
                </div>

                <div className="mb-5 md:mb-12">
                  <label
                    className="block text-gray-700 text-[16px] font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors?.password && (
                    <p className="text-red-500 font-medium mt-3">
                      {errors?.password}
                    </p>
                  )}
                </div>

                <div className="text-center md:text-left mt-10 md:mt-10">
                  <button
                    className="w-[216px] h-[50px] text-[18px] md:text-[20px] font-[500] flex-shrink-0 rounded-md bg-[#012B6D] text-white hover:bg-blue-800 focus:outline-none focus:-outline"
                    type="submit"
                  >
                    {isLoading ? <Loading /> : "Login"}
                  </button>
                </div>
                <p className="text-gray-700 text-center mt-8 md:mt-0">
                  <Link
                    to="/forget-password/email"
                    className="hover:underline text-[#012B6D]"
                  >
                    Forgot Password?
                  </Link>{" "}
                </p>

                <p className="text-gray-700 text-center mt-3 md:mt-0">
                  Don't have an account?{" "}
                  <Link
                    to="/sign-up"
                    className="hover:underline text-[#012B6D]"
                  >
                    Register here
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
