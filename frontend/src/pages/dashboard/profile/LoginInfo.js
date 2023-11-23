import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Loading from "../../../components/shared/Loading";
import { useUpdatePasswordMutation } from "../../../features/auth/authApi";

function LoginInfo() {
  const { user } = useSelector((state) => state?.auth || {});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // set user data
  useEffect(() => {
    if (user?.email) {
      setEmail(user?.email);
    }
  }, [user]);

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

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

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
  return (
    <div className=" w-full">
      <h1 className="text-[25px] font-[500] mb-4">Login Information</h1>

      {/* Email Address Field */}
      <div className="mb-4 w-full">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="focus:ring-1  border-[1px] border-black/[0.2] appearance-none  ring-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          disabled
        />
        {errors?.email && (
          <p className="text-red-500 font-medium mt-3">{errors?.email}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="focus:ring-1  border-[1px] border-black/[0.2] appearance-none  ring-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.password && (
          <p className="text-red-500 font-medium mt-3">{errors?.password}</p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="focus:ring-1  border-[1px] border-black/[0.2] appearance-none  ring-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors?.confirmPassword && (
          <p className="text-red-500 font-medium mt-3">
            {errors?.confirmPassword}
          </p>
        )}
      </div>
      <div className="mb-4 mt-7">
        <button
          className="bg-[#FF5FC0]  text-white py-2 px-4 rounded-md focus:outline-none focus:ring"
          onClick={submitHandler}
          disabled={isLoading}
        >
          {isLoading ? <Loading /> : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

export default LoginInfo;
