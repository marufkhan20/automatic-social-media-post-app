import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../../components/shared/Loading";
import { useRegisterMutation } from "../../features/auth/authApi";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [register, { data: user, isLoading, isError, error }] =
    useRegisterMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && user?._id) {
      toast.success("User Created Successfully");
      navigate(`/sign-in`);
    }
  }, [user, isLoading, isError, error, navigate, email]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = "First Name is required!!";
    }

    if (!lastName) {
      validationErrors.lastName = "Last Name is required!!";
    }

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (!role) {
      validationErrors.role = "Role is required!!";
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

    register({
      firstName,
      lastName,
      email,
      password,
      role,
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
                <div className="md:mb-12 mb-5 flex md:flex-row flex-col gap-5 md:gap-0">
                  <div className="w-full md:w-1/2 md:mr-2">
                    <label
                      className="block text-gray-700 text-[16px] font-bold mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors?.firstName && (
                      <p className="text-red-500 font-medium mt-3">
                        {errors?.firstName}
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 md:ml-2">
                    <label
                      className="block text-gray-700 text-[16px] font-bold mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors?.lastName && (
                      <p className="text-red-500 font-medium mt-3">
                        {errors?.lastName}
                      </p>
                    )}
                  </div>
                </div>

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

                <div className="md:mb-12 md:flex-row flex-col flex gap-5 md:gap-0">
                  <div className="md:w-1/2 md:mr-2 w-full">
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
                  <div className="w-full md:w-1/2 md:ml-2">
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
                </div>

                <div className="mb-5">
                  <label className="block text-gray-700 text-[16px] font-bold md:mt-0 mt-5 mb-4">
                    User Type
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="user"
                      name="userType"
                      value="user"
                      checked={role === "user"}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-[20px] h-[20px] rounded"
                    />
                    <label htmlFor="user" className="ml-2">
                      Signup as a User
                    </label>
                  </div>
                  <div className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      id="manager"
                      name="userType"
                      value="manager"
                      checked={role === "manager"}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-[20px] h-[20px] rounded"
                    />
                    <label htmlFor="manager" className="ml-2">
                      Signup as a Manager
                    </label>
                  </div>
                  {errors?.role && (
                    <p className="text-red-500 font-medium mt-3">
                      {errors?.role}
                    </p>
                  )}
                </div>

                <div className="text-center md:text-left mt-10 md:mt-28">
                  <button
                    className="w-[216px] h-[50px] text-[18px] md:text-[20px] font-[500] flex-shrink-0 rounded-md bg-[#012B6D] text-white hover:bg-blue-800 focus:outline-none focus:-outline"
                    type="submit"
                  >
                    {isLoading ? <Loading /> : "Create"}
                  </button>
                </div>
                <p className="text-gray-700 text-center mt-3 md:mt-0">
                  Already have an account?{" "}
                  <Link
                    to="/sign-in"
                    className="hover:underline text-[#012B6D]"
                  >
                    Login here
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

export default SignUp;
