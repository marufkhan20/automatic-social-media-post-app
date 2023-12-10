import React from "react";

const CustomerTable = ({ data }) => {
  return (
    <table className=" divide-y divide-[#B2B2B2]/50 ">
      <thead className="">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Spent
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Plan
          </th>
        </tr>
      </thead>
      <tbody className=" divide-y divide-[#B2B2B2]/50 ">
        {data?.map((item) => (
          <tr key={item._id}>
            <td className="px-4 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  {/* User image */}
                  <img
                    className="h-10 w-10 rounded-full object-cover object-top"
                    src={`${
                      item?.profilePic
                        ? `${process.env.REACT_APP_API_URL}${item?.profilePic}`
                        : "/images/user1.png"
                    }`}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-white">
                    {item?.firstName} {item?.lastName}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{item?.email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-[#50ae67]">
                {item?.totalSpent}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {/* <img
                className="h-6 w-6 object-cover"
                src={`${customer.flag}`}
                alt=""
              /> */}
              {item?.plan}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
