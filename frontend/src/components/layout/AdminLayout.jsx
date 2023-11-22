import React, { useState } from "react";
import { AiOutlineClose, AiOutlineQuestionCircle, AiOutlineSchedule, AiOutlineSearch } from "react-icons/ai";
import { BiBell, BiLogoInstagram, BiUser } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { Menu, Dropdown } from "antd";
import { AiOutlineBook, AiOutlineMail } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import {
  NotificationOutlined,
  HeartOutlined,
  LogoutOutlined,
  CarryOutOutlined,
  BarChartOutlined,
  FileOutlined,
  CreditCardOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { HiMenu } from 'react-icons/hi'
import { CgMenuRightAlt } from 'react-icons/cg'
import { CiFacebook, CiImageOn } from "react-icons/ci";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  {
    label: "Dashboard",
    key: "sub1",
    icon: <HomeOutlined />,
    links: "/admin",

  },
  {
    label: "User Management",
    key: "sub2",
    icon: <UserOutlined />,
    links: "/user-management",

  },
  {
    label: "Manager Management",
    key: "sub2",
    icon: <UserOutlined />,
    links: "/manager-management",

  },
  {
    label: "Support & Help Desk",
    key: "sub3",
    icon: <QuestionCircleOutlined />,
    links: "/support-help-desk",

  },
  {
    label: "Payment & Subscription",
    key: "sub4",
    icon: <CreditCardOutlined />,
    links: "/payment-subscription",

  },
  {
    label: "Content Template",
    key: "sub5",
    icon: <FileOutlined />,
    links: "/content-template",

  },
  {
    label: "Report & Analytics",
    key: "sub6",
    icon: <BarChartOutlined />,
    links: "/report-analytics",

  },
  {
    label: "Settings",
    key: "sub7",
    icon: <SettingOutlined />,
    links: "/settings",

  },
  {
    label: "All Activities",
    key: "sub8",
    icon: <CarryOutOutlined />,
    links: "/all-activities",

  },
  {
    label: "Logout & Account Management",
    key: "sub9",
    icon: <LogoutOutlined />,
    links: "/logout-account-management",

  },
  {
    label: "System Health Monitoring",
    key: "sub10",
    icon: <HeartOutlined />,
    links: "/system-health-monitoring",

  },
  {
    label: "Notifications",
    key: "sub11",
    icon: <NotificationOutlined />,
    links: "/notifications",

  },
  {
    label: "Help & Documentation",
    key: "sub11",
    icon: <QuestionCircleOutlined />,
    links: "/help-documentation",

  },
];

const AdminLayout = ({ children }) => {
  const handleMenuClick = (e) => {
    // Handle menu item clicks here
    console.log("Clicked on", e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <h1 className="text-[16px] font-[400] p-3">Need Help?</h1>
      <Menu.Item key="documentation" icon={<AiOutlineBook size={18} />}>
        <Link to="/help-documentation">Documentation</Link>
      </Menu.Item>
      <Menu.Item key="support" icon={<BsInfoCircle size={18} />}>

        <Link to="/support-help-desk">Support Site</Link>
      </Menu.Item>
      <Menu.Item key="contact" icon={<AiOutlineMail size={18} />}>
        <Link to="/dashboard/contact">Contact Us</Link>
      </Menu.Item>
    </Menu>
  );
  const handleMenuClick2 = (e) => {
    console.log("Clicked on", e.key);
  };
  const handleMenuClick3 = (e) => {
    console.log("Clicked on", e.key);
  };

  const menu2 = (
    <Menu onClick={handleMenuClick2}>
      <Menu.Item key="documentation">
        <Link to="/admin">Acme Inc. Administrator</Link>
      </Menu.Item>
      <Menu.Item key="support">
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/logout-account-management">Sign Out</Link>
      </Menu.Item>
    </Menu>
  );
  const menu3 = (
    <Menu onClick={handleMenuClick3} >
      <p className="text-[18px] font-semibold py-3 px-5">
        Notifications
      </p>
      {
        Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-full border-b border-gray-500/30 py-2 pl-3 max-w-[300px] flex items-center gap-3">
            <img src="/images/user1.png" alt="" className="w-[30px] h-[30px] rounded-full object-cover" />
            <div className="flex flex-col">
              <p>
                Lorem ipsum dolor sit amet ipsum adipisicing elit.
              </p>
              <p className="text-left text-xs text-gray-400">
                just now

              </p>

            </div>
          </div>
        ))
      }
      <Menu.Item key="contact">
        <Link to="/notifications" className="text-[16px] flex py-3 items-center justify-center font-semibold text-center">See all notifications</Link>
      </Menu.Item>
    </Menu>
  );
  const [mode, setMode] = useState("light"); // Default mode is 'light'

  const toggleMode = () => {
    // Toggle between 'light' and 'dark' modes
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  // Define CSS classes for light and dark modes
  const sidebarClass =
    mode === "light" ? " bg-[#111729] text-white" : "bg-white";
  const headerClass = mode === "light" ? "bg-[#111729] text-white" : "bg-white";
  const childClass = mode === "light" ? "bg-[#111729] text-white" : "bg-white";
  const searchClass = mode === "light" ? " text-white" : " text-black";
  const dropdownClass = mode === "light" ? " text-white" : " text-black";
  const menuClass = mode === "light" ? " bg-[#111729]" : " bg-white";
  const iconClass = mode === "light" ? " text-black" : " text-white";
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };
  const closeMenu = () => {
    setNav(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdminActive = location.pathname === "/admin";
  const isUserActive = location.pathname === "/user-management";
  const isManagerActive = location.pathname === "/manager-management";
  const isSupportActive = location.pathname === "/support-help-desk";
  const isPaymentActive = location.pathname === "/payment-subscription";
  const isContentActive = location.pathname === "/content-template";
  const isReportActive = location.pathname === "/report-analytics";
  const isSettingsActive = location.pathname === "/settings";
  const isActivityActive = location.pathname === "/all-activities";
  const isAccountActive = location.pathname === "/logout-account-management";
  const isNotificationsActive = location.pathname === "/notifications";
  const isHelpActive = location.pathname === "/help-documentation";
  const isHealthActive = location.pathname === "/system-health-monitoring";
  const isImageActive = location.pathname === "/image-upload";
  const isVideoActive = location.pathname === "/video-upload";
  const isInstagramActive = location.pathname === "/instagram";
  const isFacebookActive = location.pathname === "/facebook";
  return (
    <div className={` flex flex-col`}>
      <div className={`${headerClass} w-full py-2 px-5`}>
        <div className="flex items-center justify-between w-full">
          <div className="md:block hidden">
            <img src="/images/social-logo.svg" alt="" className="w-[70px]" />
          </div>
          {/* menu button  */}
          <div
            onClick={handleNavbar}
            className="block md:hidden z-20  items-center mt-1 cursor-pointer"
          >
            {nav ? (
              <AiOutlineClose size={25} className="iconClass " />
            ) : (
              <FiMenu size={25} />
            )}
          </div>
          {/* mobile menu */}
          <div
            className={
              nav
                ? "md:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-start pt-14  w-[70%] h-screen bg-[#111729] text-white  ease-linear duration-300"
                : "md:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-start pt-14  w-[70%] h-screen  bg-[#111729] text-white  ease-linear duration-300"
            }
          >
            <div className="flex flex-col gap-4 p-5">

              {items.map((item, index) => (
                <div key={index} className="flex text-[18px] items-center gap-3">
                  <div>
                    {item.icon}
                  </div>
                  <Link to={item.links}>
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

          </div>
          <div className="flex items-center gap-4">
            <div className="md:hidden block">
              <button>
                <AiOutlineSearch size={25} className={`${searchClass} ml-3 mt-2 `} />
              </button>

            </div>

            <div className="md:block hidden search-box">
              <button class="btn-search">
                <AiOutlineSearch size={25} className={`${searchClass} ml-7 `} />
              </button>
              <input type="text" class="input-search" placeholder="Search..." />
            </div>
            <div>
              <Dropdown
                overlay={menu3}
                trigger={["click"]}
                className={`${dropdownClass} cursor-pointer`}
              >
                <BiBell size={25} className={`${searchClass} `} />
              </Dropdown>{" "}
            </div>
            <div>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                className={`${dropdownClass} cursor-pointer`}
              >
                <AiOutlineQuestionCircle size={25} />
              </Dropdown>{" "}
            </div>
            <div
              className={`text-${mode === "dark" ? "white" : "gray-900"
                } transition duration-500 ease-in-out `}
            >
              <div className="flex justify-center items-center">
                <button onClick={toggleMode}>
                  <div className="flex items-center">
                    {mode === "dark" ? (
                      <>
                        <FiMoon size={25} className={`${searchClass}`} />
                      </>
                    ) : (
                      <>
                        <FiSun size={25} className={`${searchClass} `} />
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
            <Dropdown
              overlay={menu2}
              trigger={["click"]}
              className={`${dropdownClass}`}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <BiUser size={25} className="ml-3" />
                <div className="flex items-center">
                  <p>Admin</p>
                  <MdKeyboardArrowDown className="" size={18} />
                </div>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className={`w-1/4 md:block hidden  ${sidebarClass}`}>
          {/* <Menu
            className={`${sidebarClass} text-[18px] `}
            onClick={onClick}
            style={{
              width: 300,
              whiteSpace: "normal !important",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            
            selectedKeys={[current]}
            mode="inline"
            itemStyle={{ margin: "20px 0" }}
          >
            {getMenuItems(items)}
          </Menu> */}

          <div className={`flex flex-col gap-1 p-5  ${sidebarClass}`}>
            <Link to={"/admin"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isAdminActive ? " bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <HomeOutlined />
                <p>Dashboard</p>
              </div>
            </Link>
            <Link to={"/user-management"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isUserActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <UserOutlined />
                <p>User Management</p>
              </div>
            </Link>
            <Link to={"/manager-management"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isManagerActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <UserOutlined />
                <p>Manager Management</p>
              </div>
            </Link>
            <Link to={"/support-help-desk"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isSupportActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <QuestionCircleOutlined />

                <p>Support & Help Desk</p>
              </div>
            </Link>

            <Link to={"/payment-subscription"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isPaymentActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <CreditCardOutlined />
                <p>Payment & Subscription</p>
              </div>
            </Link>
            <Link to={"/content-template"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isContentActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <FileOutlined />
                <p>Content Template</p>
              </div>
            </Link>
            <Link to={"/report-analytics"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isReportActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <BarChartOutlined />
                <p>Report & Analytics</p>
              </div>
            </Link>
            <Link to={"/settings"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isSettingsActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <CreditCardOutlined />
                <p>Settings</p>
              </div>
            </Link>
            <Link to={"/all-activities"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isActivityActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <CarryOutOutlined />
                <p>All Activities</p>
              </div>
            </Link>
            <Link to={"/logout-account-management"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isAccountActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <LogoutOutlined />
                <p>Logout & Account Management</p>
              </div>
            </Link>
            <Link to={"/system-health-monitoring"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isHealthActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <HeartOutlined />
                <p>System Health Monitoring</p>
              </div>
            </Link>
            <Link to={"/notifications"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isNotificationsActive
                  ? "bg-[#012B6D] text-white rounded-lg"
                  : ""
                  }`}
              >
                <NotificationOutlined />
                <p>Notifications</p>
              </div>
            </Link>
            <div className="">
              <div
                className="cursor-pointer p-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center ">
                    <AiOutlineSchedule size={18} />
                    <p className="pl-1">
                      Schedule Post

                    </p>
                  </div>
                  <span>{isOpen ? <MdKeyboardArrowUp size={18} /> : <MdKeyboardArrowDown size={18} />}</span>
                </div>
              </div>
              {isOpen && <div className="">
                <Link to={"/facebook"}>
                  <div
                    className={`flex items-center gap-2 px-3 py-2 ${isFacebookActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                      }`}
                  >
                    <CiFacebook size={18} />
                    <p>Facebook</p>
                  </div>
                </Link>
                <Link to={"/instagram"}>
                  <div
                    className={`flex items-center gap-2 px-3 py-2 ${isInstagramActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                      }`}
                  >
                    <BiLogoInstagram size={18} />
                    <p>Instagram</p>
                  </div>
                </Link>

              </div>}
            </div>
            <Link to={"/help-documentation"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isHelpActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <QuestionCircleOutlined />
                <p>Help & Documentation</p>
              </div>
            </Link>
            <Link to={"/image-upload"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isImageActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <CiImageOn size={18} />
                <p>Image Upload</p>
              </div>
            </Link>
            <Link to={"/video-upload"}>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${isVideoActive ? "bg-[#012B6D] text-white rounded-lg" : ""
                  }`}
              >
                <CiImageOn size={18} />
                <p>Video Upload</p>
              </div>
            </Link>

          </div>
          <div>
            {/* {items.map((item, index) => (
              <div
                key={index}
                className={`flex text-[18px] items-center gap-3 `}
              >
                <div>{item.icon}</div>
                <Link to={item.links} >
                  {item.label}
                </Link>
              </div>
            ))}  */}

            {/* {items.map((item, index) => (
              <div key={index} className="flex text-[18px] items-center gap-3">
                <div>
                  {item.icon}
                </div>
                <Link to={item.links}>
                  {item.label}
                </Link>
              </div>
            ))} */}
          </div>
        </div>
        <div className={`${childClass} w-full`}>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
