import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../../components/layout/AdminLayout";
import Loading from "../../../../components/shared/Loading";
import { useRegisterMutation } from "../../../../features/auth/authApi";

const AddManager = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      toast.success("Manager Created Successfully");
      navigate(`/manager-management`);
    }
  }, [user, isLoading, isError, error, navigate]);

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
      role: "manager",
    });
  };
  return (
    <AdminLayout>
      <div className="flex flex-col bg-[#EFF6F9] w-full  h-[90vh] px-6 py-10 md:px-20">
        <div className="p-10 mx-auto mt-8 text-black bg-white w-full">
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <div className="flex">
                <div className="w-1/2 pr-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors?.firstName && (
                    <p className="text-red-500 font-medium mt-3">
                      {errors?.firstName}
                    </p>
                  )}
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
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
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors?.email && (
                <p className="text-red-500 font-medium mt-3">{errors?.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors?.password && (
                <p className="text-red-500 font-medium mt-3">
                  {errors?.password}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors?.confirmPassword && (
                <p className="text-red-500 font-medium mt-3">
                  {errors?.confirmPassword}
                </p>
              )}
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="bg-[#012B6D] px-10 py-3 text-white font-[500] rounded-md"
              >
                {isLoading ? <Loading /> : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddManager;
