import React, { useState } from "react";
import DashboardLayout from "../../../src/components/layout/DashboardLayout";
import { IoCalendarOutline, IoPeopleOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import FacebookGroups from "./tabscontent/FacebookGroups";
import FacebookPages from "./tabscontent/FacebookPages";
import FacebookEvents from "./tabscontent/FacebookEvents";
import EmailCampaigns from "./tabscontent/EmailCampaigns";
import Instagram from "./tabscontent/Instagram";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Facebook Groups",
      icon: <IoPeopleOutline size={40} />,
    },
    {
      id: 1,
      label: "Facebook Pages",
      icon: <HiOutlineClipboardDocumentList size={40} />,
    },
    {
      id: 2,
      label: "Facebook Events",
      icon: <IoCalendarOutline size={40} />,
    },
    // {
    //   id: 3,
    //   label: "Email Campaigns",
    //   icon: <BsEnvelope size={40} />,
    // },
    {
      id: 3,
      label: "Instagram",
      icon: <FaInstagram size={40} />,
    },
  ];

  const tabContents = [
    <div key={0}>
      <FacebookGroups />
    </div>,
    <div key={1}>
      <FacebookPages />
    </div>,
    <div key={2}>
      <FacebookEvents />
    </div>,
    // <div key={3}>
    //   <EmailCampaigns />
    // </div>,
    <div key={3}>
      <Instagram />
    </div>,
  ];
  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full px-8 pt-5 pb-20 rounded-[8px] bg-white shadow-xl">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <g clip-path="url(#clip0_1101_251)">
              <path
                d="M31.8382 38H23.5289C23.2111 38 22.9532 37.7421 22.9532 37.4242V25.7018H15.0457V37.4242C15.0457 37.7421 14.7878 38 14.4699 38H6.1583C5.84049 38 5.58255 37.7421 5.58255 37.4242V18.301H0.840606C0.604546 18.301 0.392667 18.1571 0.305152 17.9383C0.218788 17.7195 0.274061 17.4696 0.444485 17.3073L18.6016 0.157755C18.8238 -0.0529722 19.1704 -0.0518207 19.3938 0.157755L37.5555 17.3073C37.7259 17.4696 37.7812 17.7195 37.6948 17.9383C37.6073 18.1571 37.3955 18.301 37.1594 18.301H32.414V37.4242C32.414 37.7421 32.1561 38 31.8382 38ZM24.1047 36.8485H31.2625V17.7253C31.2625 17.4075 31.5204 17.1495 31.8382 17.1495H35.7108L18.9977 1.368L2.28921 17.1495H6.1583C6.47612 17.1495 6.73406 17.4075 6.73406 17.7253V36.8485H13.8942V25.1261C13.8942 24.8082 14.1521 24.5503 14.4699 24.5503H23.5289C23.8467 24.5503 24.1047 24.8082 24.1047 25.1261V36.8485Z"
                fill="#4A4A4A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1101_251">
                <rect width="38" height="38" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-[24px] font-[500]">Dashboard</h1>
        </div>
        <div className="flex flex-wrap items-center  justify-center text-center gap-5 mt-10">
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={`${
                selectedTab === tab.id
                  ? "bg-[#FF5FC0] text-white"
                  : "bg-white text-[#4A4A4A]  border border-[#E3E3E3]"
              } text-[20px] font-[500] md:font-[700] cursor-pointer  flex flex-col justify-center items-center md:gap-3 py-5 px-6 w-[120px] h-[120px] md:w-[150px] md:h-[150px]`}
              onClick={() => setSelectedTab(tab.id)}
            >
              <p
                className={`${
                  selectedTab === tab.id ? "text-white" : "text-[#4A4A4A]"
                }`}
              >
                {tab.icon}
              </p>
              <p className={`${tab.id === 4 ? "pt-7" : ""}`}>{tab.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full px-5 md:px-8 pt-5 pb-12 rounded-[8px] bg-white shadow-xl mt-10 ">
        <div className="mt-5 w-full">{tabContents[selectedTab]}</div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
