/* eslint-disable react-hooks/exhaustive-deps */
import { NotificationOutlined } from "@ant-design/icons";
import dateDifference from "date-difference";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../../components/layout/AdminLayout";
import { getSocket } from "../../../../utils/notification";
const socketId = getSocket();

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socketId.on("getMessage", (data) => {
      setNotifications([...notifications, data?.data]);
    });
  }, [notifications]);
  return (
    <div>
      <AdminLayout>
        <div className="bg-[#EFF6F9]  md:pb-52 py-10 px-5 md:pt-10 w-full md:px-20">
          <div
            className={`flex items-center text-[24px] mb-7 text-black font-[600] gap-2 px-3 py-2 
          `}
          >
            <NotificationOutlined />
            <p>Notifications sdfsd</p>
          </div>
          <div className="flex flex-col gap-5">
            {notifications?.map((item) => (
              <div
                key={item?.user?._id}
                className="w-full bg-white shadow-xl rounded-md p-5  "
              >
                <div className="flex w-full items-center justify-between text-black">
                  <div className="flex items-center gap-4 text-black">
                    <img
                      src={
                        item?.user?.profilePic
                          ? `${process.env.REACT_APP_API_URL}${item?.user?.profilePic}`
                          : "/images/user.jpg"
                      }
                      alt=""
                      className="w-[40px] h-[40px] rounded-full object-cover "
                    />
                    <p className="font-[600]">
                      {item?.user?.firstName} {item?.user?.lastName}
                    </p>
                    <p className="">{item?.message}</p>
                  </div>
                  <div>
                    <p className="">
                      {dateDifference(new Date(item?.date), new Date())} Ago
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default Notification;
