import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../../components/shared/Loading";
import { useForgotPasswordMutation } from "../../features/auth/authApi";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const [forgotPassword, { data, isLoading, isError, error }] =
    useForgotPasswordMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && data?._id) {
      toast.success("Verify link sent successfully. Please check your email.");
      setEmail("");
      setErrors({});
    }
  }, [data, isLoading, isError, error]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    forgotPassword(email);
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="  justify-center flex items-center bg-[#EFF6F9] w-full p-5 md:p-20">
          <div className="max-w-screen-xl mx-auto mb-10 md:mb-0 mt-32 md:mt-0">
            <div className="bg-white md:w-[1240px] w-[320px] p-5 md:p-10 shadow-xl ">
              <h2 className="font-semibold text-2xl mb-5">Forgot Password</h2>
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

                <div className="text-center md:text-left mt-10 md:mt-10">
                  <button
                    className="w-[216px] h-[50px] text-[18px] md:text-[20px] font-[500] flex-shrink-0 rounded-md bg-[#012B6D] text-white hover:bg-blue-800 focus:outline-none focus:-outline"
                    type="submit"
                  >
                    {isLoading ? <Loading /> : "Continue"}
                  </button>
                </div>

                <p className="text-center mt-8 md:mt-0">
                  <Link to="/sign-in" className="hover:underline text-blue-500">
                    Back to Login
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

export default ForgetPassword;
