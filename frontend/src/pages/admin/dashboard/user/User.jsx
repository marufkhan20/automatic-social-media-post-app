import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../../../components/layout/AdminLayout";
import Loading from "../../../../components/shared/Loading";
import { useGetUsersManagersQuery } from "../../../../features/user/userApi";
const User = () => {
  const [users, setUsers] = useState([]);
  const { data, isLoading } = useGetUsersManagersQuery("user");

  useEffect(() => {
    if (data?.length > 0) {
      setUsers(data);
    }
  }, [data]);
  return (
    <AdminLayout>
      <div className="flex flex-col bg-[#EFF6F9] w-full  h-[90vh] px-6 py-10 md:px-20">
        <div className="w-full flex md:flex-row flex-col gap-5 md:gap-0 md:items-center md:justify-between">
          <h1 className="text-[24px] text-black font-[500]">All Users</h1>
          <Link to="/add-user">
            <button className="bg-[#012B6D] px-10 py-3 text-white font-[500] rounded-md">
              + Add User
            </button>
          </Link>
        </div>
        <div className="w-full md:overflow-hidden overflow-x-scroll overflow-y-hidden bg-white  mt-10">
          <table
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className=" w-full text-black rounded-md p-5  "
          >
            <thead className="w-full">
              <tr className="border-b w-full">
                <th className="border-r p-5">AVATAR</th>
                <th className="border-r p-5">USER NAME</th>
                <th className="border-r p-5">MANAGER REQUEST</th>
                <th className="border-r p-5">VIEW AND EDIT PROFILE</th>
                <th className="px-5">REMOVE/BAN</th>
              </tr>
            </thead>
            <tbody className="">
              {users?.map((user, index) => (
                <tr key={index} className=" p-5 text-center">
                  <td className="border-r  ">
                    <img
                      src={user.profilePic || "./images/user.jpg"}
                      className=" mx-auto rounded-full w-9 h-9 object-cover"
                      alt={`Avatar for ${user.username}`}
                    />
                  </td>
                  <td className="border-r p-5">
                    {user?.firstName} {user?.lastName}
                  </td>
                  <td className="border-r p-5 text-[#47D982]">
                    {/* {user.managerRequest} */}
                    Make Request
                  </td>
                  <td className="border-r p-5 text-[#47D982]">
                    <button>View Profile</button>
                  </td>
                  <td>
                    <button className="text-[#F22525]">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isLoading && <Loading type="secondary" />}
        </div>
      </div>
    </AdminLayout>
  );
};

export default User;
