import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../../components/shared/Loading";
import { useResetPasswordMutation } from "../../features/auth/authApi";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { token } = useParams();

  const navigate = useNavigate();

  const [resetPassword, { data, isLoading, isError, error }] =
    useResetPasswordMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && data?._id) {
      toast.success(
        "Password reset successfully, Please login on your account."
      );
      navigate(`/sign-in`);
    }
  }, [data, isLoading, isError, error, navigate]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required!!";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword =
        "Password and Confirm Password Doesn't Match!!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    resetPassword({ password, token });
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="  justify-center flex items-center bg-[#EFF6F9] w-full p-5 md:p-20">
          <div className="max-w-screen-xl mx-auto mb-10 md:mb-0 mt-32 md:mt-0">
            <div className="bg-white md:w-[1240px] w-[320px] p-5 md:p-10 shadow-xl ">
              <h2 className="font-semibold text-2xl mb-5">Reset Password</h2>
              <form onSubmit={submitHandler} className="">
                <div className="mb-5 md:mb-12">
                  <label
                    className="block text-gray-700 text-[16px] font-bold mb-2"
                    htmlFor="password"
                  >
                    New Password
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

                <div className="mb-5 md:mb-12">
                  <label
                    className="block text-gray-700 text-[16px] font-bold mb-2"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors?.confirmPassword && (
                    <p className="text-red-500 font-medium mt-3">
                      {errors?.confirmPassword}
                    </p>
                  )}
                </div>

                <div className="text-center md:text-left mt-10 md:mt-10">
                  <button
                    className="w-[216px] h-[50px] text-[18px] md:text-[20px] font-[500] flex-shrink-0 rounded-md bg-[#012B6D] text-white hover:bg-blue-800 focus:outline-none focus:-outline"
                    type="submit"
                  >
                    {isLoading ? <Loading /> : "Reset Password"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
