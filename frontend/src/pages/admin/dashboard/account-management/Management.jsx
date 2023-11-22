import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import AdminLayout from "../../../../components/layout/AdminLayout";
import { userLoggedOut } from "../../../../features/auth/authSlice";

const Management = () => {
  const [newPassword, setNewPassword] = useState("");
  const [permission, setPermission] = useState("user");

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePermissionChange = (e) => {
    setPermission(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`New Password: ${newPassword}`);
    console.log(`Permission: ${permission}`);
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
                Admin Account Settings
              </p>
              <button className="bg-[#012B6D] rounded-md mt-5 text-white font-[600] text-[20px] py-2 px-10">
                Close Settings
              </button>
              <div className="min-w-full mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 text-black">
                    <label
                      htmlFor="newPassword"
                      className="block text-[20px] font-medium text-gray-600"
                    >
                      Change Password:
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                      className="block w-full mt-1 p-2 border border-gray-300 focus:outline-none rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="permission"
                      className="block text-[20px] font-medium text-gray-600"
                    >
                      Change Permissions:
                    </label>
                    <select
                      id="permission"
                      name="permission"
                      value={permission}
                      onChange={handlePermissionChange}
                      className="block w-full mt-1 p-2 border text-black focus:outline-none border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                      <option value="user">User</option>
                      <option value="manager">Manager</option>
                    </select>
                  </div>

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
