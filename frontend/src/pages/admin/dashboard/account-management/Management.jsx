import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import AdminLayout from "../../../../components/layout/AdminLayout";
import { userLoggedOut } from "../../../../features/auth/authSlice";
import { useUpdatePasswordMutation } from "../../../../features/auth/authApi";

const Management = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [updatePassword, { data, isLoading, isError, error }] =
    useUpdatePasswordMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && data?._id) {
      toast.success("Password Change Successfully");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
    }
  }, [data, isLoading, isError, error]);

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

    updatePassword(password);
  };

  // logout handler
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLoggedOut());
    toast.success("Logged out successfully");
  };
  return (
    <div>
      <div>
        <AdminLayout>
          <div className="bg-[#EFF6F9] py-10 px-5 md:py-20 w-full md:px-20">
            <h1 className="text-black text-[25px] font-[500]">
              Account Management
            </h1>
            <button
              className="bg-[#E00606] rounded-md mt-5 text-white font-[600] text-[20px] py-2 px-16 mb-10"
              onClick={logoutHandler}
            >
              Logout
            </button>
            <div
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              className="bg-white w-full gap-5 rounded-lg p-5 mt-5"
            >
              <p className="text-[20px] text-black font-[600]">
                Change Account Password
              </p>
              {/* <button className="bg-[#012B6D] rounded-md mt-5 text-white font-[600] text-[20px] py-2 px-10">
                Close Settings
              </button> */}
              <div className="min-w-full mt-5">
                <form onSubmit={submitHandler}>
                  <div className="mb-4 text-black">
                    <label
                      htmlFor="newPassword"
                      className="block text-[20px] font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full mt-1 p-2 border border-gray-300 focus:outline-none rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors?.password && (
                      <p className="text-red-500 font-medium mt-3">
                        {errors?.password}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="permission"
                      className="block text-[20px] font-medium text-gray-600"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="permission"
                      name="confirm password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="block w-full mt-1 p-2 border text-black focus:outline-none border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  {errors?.confirmPassword && (
                    <p className="text-red-500 font-medium mt-3">
                      {errors?.confirmPassword}
                    </p>
                  )}

                  <div className="mt-7">
                    <button
                      type="submit"
                      className=" py-2 px-10 font-[500] bg-[#03D118] text-white text-[20px] rounded-md  focus:outline-none focus:ring "
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AdminLayout>
      </div>
    </div>
  );
};

export default Management;
