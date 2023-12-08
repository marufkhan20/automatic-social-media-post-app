import date from "date-and-time";
import React from "react";
import AdminLayout from "../../../../components/layout/AdminLayout";
import { useGetActivitiesQuery } from "../../../../features/setting/settingApi";

const Activity = () => {
  // get all activities
  const { data: activities } = useGetActivitiesQuery();
  return (
    <div>
      <AdminLayout>
        <div className="flex flex-col bg-[#EFF6F9] w-full  h-[90vh] px-6 py-10 md:px-20">
          <div className="w-full flex md:flex-row flex-col gap-5 md:gap-0 md:items-center md:justify-between">
            <h1 className="text-[24px] text-black font-[500]">
              All Activities
            </h1>
          </div>
          <div className="bg-white w-full px-3 rounded-md mt-6 overflow-x-scroll overflow-y-scroll h-full">
            <table className="min-w-full text-center">
              <thead className="border-b w-full">
                <tr>
                  <th className="px-6 py-3 bg-white border-r font-[600]  md:text-[20px]   text-black uppercase tracking-wider">
                    TIMESTAMP
                  </th>
                  <th className="px-6 py-3 bg-white border-r font-[600] md:text-[20px]   text-black uppercase tracking-wider">
                    USER/MANAGER
                  </th>
                  <th className="px-6 py-3 bg-white  font-[600] md:text-[20px]   text-black uppercase tracking-wider">
                    ACTIVITY
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities?.map((activity) => (
                  <tr key={activity}>
                    <td className="px-6 py-4 md:text-[20px] whitespace-no-wrap border-r text-black">
                      {date.format(
                        new Date(activity?.time || activity?.updatedAt),
                        "ddd, MMM DD YYYY - HH:mm"
                      )}
                    </td>
                    <td className="px-6 py-4 md:text-[20px] whitespace-no-wrap border-r text-black">
                      {activity?.user?.firstName} {activity?.user?.lastName}
                    </td>
                    <td className="md:px-6 py-4 md:text-[20px] whitespace-no-wrap  text-black">
                      <span className="bg-[#19E351] md:font-[500] rounded-md py-3 md:px-5 text-white">
                        {activity?.activity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default Activity;
