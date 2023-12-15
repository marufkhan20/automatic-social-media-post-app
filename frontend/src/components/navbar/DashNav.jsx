import { Button, Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userLoggedOut } from "../../features/auth/authSlice";
import { useGetJoinedTeamsQuery } from "../../features/team/teamApi";
import AnimatedMenuIcon from "../shared/AnimatedMenuIcon";
import Wrapper from "../shared/Wrapper";

const DashNav = () => {
  const location = useLocation();
  const isDashboardActive = location.pathname === "/dashboard";
  const isGroupsActive = location.pathname === "/dashboard/group";
  const isPagesActive = location.pathname === "/dashboard/pages";
  const isInstaActive = location.pathname === "/dashboard/instagram";
  const isPostActive = location.pathname === "/dashboard/post-notification";
  const isManageUsers = location.pathname === "/dashboard/manage-users";
  const isManageManagers = location.pathname === "/dashboard/manage-managers";
  const isTempFacebookActive =
    location.pathname === "/dashboard/facebooktemplate/facebook-template";
  const isTempFacebookTeamActive =
    location.pathname === "/dashboard/team/facebook-template";
  const isTempInstaActive =
    location.pathname === "/dashboard/instagramtemplate/instagram-template";
  const isTempInstaTeamActive =
    location.pathname === "/dashboard/team/instagram-template";
  const isTempGalleryActive =
    location.pathname === "/dashboard/imagegallery/image-gallery";
  const isTempGalleryTeamActive = location.pathname === "/dashboard/team/image";
  const isTempVideoGalleryActive =
    location.pathname === "/dashboard/imagegallery/video-gallery";
  const isTempVideoTeamGalleryActive =
    location.pathname === "/dashboard/team/videos";
  const isJoinTeamActive =
    location.pathname === "/dashboard/jointeam/join-team";
  const isProfileActive = location.pathname === "/dashboard/profile/profile";
  const isBillingActive = location.pathname === "/dashboard/billing";
  const isStartedActive = location.pathname === "/dashboard/getting-started";
  const isfaqActive = location.pathname === "/dashboard/faq";
  const isPrivacyActive =
    location.pathname === "/dashboard/privacy-policy/privacy";
  const isTermsActive = location.pathname === "/dashboard/terms-service/terms";
  const isTeamPageActive = location.pathname === "/dashboard/team/team-page";
  const isContactActive = location.pathname === "/dashboard/contact";

  const [scrolled, setScrolled] = useState(false);

  // get user data from state
  const { user } = useSelector((state) => state?.auth || {});

  // logout handler
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLoggedOut());
    toast.success("Logged out successfully");
  };

  // profile menu items
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          Refferals
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          Billing
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <p rel="noopener noreferrer" onClick={logoutHandler}>
          Logout
        </p>
      ),
    },
  ];

  // get joined teams
  const [openTeam, setOpenTeam] = useState(false);

  const { data: joinedTeams } = useGetJoinedTeamsQuery();

  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.scrollY;
      if (offsetY > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  };
  const closeMenu = () => {
    setNav(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={` 
          bg-[#FCFCFC] fixed md:sticky z-[999] w-full top-0 transition-all duration-300 ease-in ${
            scrolled ? " backdrop-blur-md" : "bg-opacity-100"
          }`}
    >
      <div className=" ">
        <Wrapper>
          <div className="flex py-2 justify-between items-center bg-transparent">
            {/* left  */}
            <div className=" flex items-center gap-28 z-20">
              {/* logo  */}
              <a href={"/"}>
                <img
                  src="/images/social-logo.svg"
                  alt="social"
                  className="w-[70px]"
                />
              </a>
            </div>
            {/* right */}
            <div className="hidden md:flex items-center gap-5">
              <Dropdown
                menu={{ items }}
                placement="bottom"
                className="text-[18px]"
                arrow={{ pointAtCenter: false }}
              >
                <Button className="flex gap-3 text-[18px]  items-center border-none shadow-none">
                  <img
                    src={
                      user?.profilePic
                        ? `${process.env.REACT_APP_API_URL}${user?.profilePic}`
                        : "/images/user.jpg"
                    }
                    alt=""
                    className="w-[40px] h-[40px] rounded-full object-top object-cover"
                  />
                  {user?.firstName} {user?.lastName}
                  <IoIosArrowDown size={18} />
                </Button>
              </Dropdown>
            </div>

            {/* mobile menu  */}
            <div
              onClick={handleNavbar}
              className="sm:block md:hidden flex items-center z-50 pr-3"
            >
              <AnimatedMenuIcon isOpen={nav} onClick={handleNavbar} />
            </div>
            <div
              className={
                nav
                  ? "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-y-scroll bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen  bg-white text-black  text-right ease-linear duration-200 transform translate-x-0"
                  : "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-y-scroll bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen d bg-white text-black text-right ease-linear duration-200  transform translate-x-full"
              }
            >
              <div className="flex flex-col justify-between ">
                <nav>
                  <div className="w-full border border-[#ADADAD] rounded-md bg-white text-[20px] font-[400]  px-6 py-3 flex gap-2 ">
                    <svg
                      className="mt-[3px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1101_50)">
                        <rect width="20" height="20" fill="white" />
                        <path
                          d="M16.757 20H12.3836C12.2164 20 12.0806 19.8642 12.0806 19.697V13.5273H7.91879V19.697C7.91879 19.8642 7.78303 20 7.61576 20H3.24121C3.07394 20 2.93818 19.8642 2.93818 19.697V9.63212H0.442423C0.31818 9.63212 0.206665 9.55636 0.160604 9.44121C0.11515 9.32606 0.144241 9.19455 0.233938 9.10909L9.7903 0.083031C9.90727 -0.0278781 10.0897 -0.027272 10.2073 0.083031L19.7661 9.10909C19.8558 9.19455 19.8848 9.32606 19.8394 9.44121C19.7933 9.55636 19.6818 9.63212 19.5576 9.63212H17.06V19.697C17.06 19.8642 16.9242 20 16.757 20ZM12.6867 19.3939H16.4539V9.32909C16.4539 9.16182 16.5897 9.02606 16.757 9.02606H18.7951L9.99879 0.720001L1.20485 9.02606H3.24121C3.40848 9.02606 3.54424 9.16182 3.54424 9.32909V19.3939H7.31273V13.2242C7.31273 13.057 7.44848 12.9212 7.61576 12.9212H12.3836C12.5509 12.9212 12.6867 13.057 12.6867 13.2242V19.3939Z"
                          fill="#297C81"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1101_50">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <li className="list-none">
                      <Link to="/dashboard">
                        <p
                          className={
                            isDashboardActive
                              ? "text-[#012B6D] font-[700]"
                              : "inactive-link"
                          }
                        >
                          Dashboard
                        </p>
                      </Link>
                    </li>
                  </div>
                  <div className="w-full  my-6 rounded-md bg-white text-[20px] font-[400]  ">
                    <div className="bg-[#012B6D] text-white w-full py-2 rounded-t-md text-center">
                      <p>Activities</p>
                    </div>

                    <div className="w-full border border-[#ADADAD] rounded-b-md p-6">
                      <div className="flex flex-col gap-5 justify-start items-start">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_1101_40)">
                              <path
                                d="M16.9805 0H4.01953C1.80313 0 0 1.80313 0 4.01953V16.9805C0 19.1969 1.80313 21 4.01953 21H10.5C10.7265 21 10.9102 20.8164 10.9102 20.5898V17.4111C10.9102 17.1846 10.7265 17.001 10.5 17.001C10.2735 17.001 10.0898 17.1846 10.0898 17.4111V20.1797H4.01953C2.25549 20.1797 0.820312 18.7445 0.820312 16.9805V4.01953C0.820312 2.25549 2.25549 0.820312 4.01953 0.820312H16.9805C18.7445 0.820312 20.1797 2.25549 20.1797 4.01953V16.9805C20.1797 18.7445 18.7445 20.1797 16.9805 20.1797H14.3555V12.9405H16.7336C16.9443 12.9405 17.1206 12.7809 17.1417 12.5714L17.4366 9.6406C17.4483 9.52522 17.4105 9.41038 17.3328 9.32441C17.255 9.23844 17.1444 9.18939 17.0285 9.18939H14.3555V7.65044C14.3555 7.3719 14.4442 7.26834 14.6828 7.26834H17.0101C17.2367 7.26834 17.4203 7.08471 17.4203 6.85818V4.00103C17.4203 3.7745 17.2367 3.59088 17.0101 3.59088H13.9538C12.222 3.59088 11.3035 4.35155 10.8381 4.98967C10.187 5.88209 10.0898 6.93603 10.0898 7.48482V9.20776H8.08004C7.85351 9.20776 7.66988 9.39139 7.66988 9.61792V12.5303C7.66988 12.7568 7.85351 12.9404 8.08004 12.9404H10.0898V18.3094C10.0898 18.5359 10.2734 18.7195 10.5 18.7195C10.7265 18.7195 10.9101 18.5359 10.9101 18.3094V12.5303C10.9101 12.3037 10.7265 12.1201 10.5 12.1201H8.49019V10.028H10.5C10.7265 10.028 10.9101 9.84441 10.9101 9.61788V7.48478C10.9101 6.56061 11.2067 4.41115 13.9538 4.41115H16.6V6.44798H14.6828C14.1534 6.44798 13.5352 6.7629 13.5352 7.6504V9.5995C13.5352 9.82603 13.7188 10.0097 13.9453 10.0097H16.575L16.3626 12.1201H13.9453C13.7188 12.1201 13.5352 12.3037 13.5352 12.5303V20.5898C13.5352 20.8164 13.7188 21 13.9453 21H16.9805C19.1969 21 21 19.1969 21 16.9805V4.01953C21 1.80313 19.1969 0 16.9805 0Z"
                                fill="#4A4A4A"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1101_40">
                                <rect width="21" height="21" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          Facebook
                        </div>
                      </div>
                      <div className="ml-3">
                        <div className="flex mt-1 flex-col justify-start items-start">
                          <Link to="/dashboard/group">
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="15"
                                viewBox="0 0 25 15"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_1101_31)">
                                  <path
                                    d="M21.1178 6.56518H17.9058C17.242 6.56475 16.5894 6.73653 16.0118 7.06375C15.5202 7.34262 15.0949 7.72485 14.7654 8.18409C14.5459 8.14577 14.3235 8.12665 14.1007 8.12679H10.8858C10.6629 8.12657 10.4405 8.14577 10.221 8.18409C9.89155 7.72478 9.46627 7.34255 8.97458 7.06375C8.397 6.73653 7.74442 6.56475 7.0806 6.56518H3.86856C1.73418 6.56991 0.005094 8.29899 0.000366211 10.4334V12.6139C0.00194214 12.8423 0.187472 13.0265 0.415839 13.0265H7.0061V14.1726C7.0061 14.4021 7.19213 14.5881 7.42157 14.5881H17.5534C17.7828 14.5881 17.9688 14.4021 17.9688 14.1726V13.0265H24.5591C24.7885 13.0265 24.9746 12.8405 24.9746 12.611V10.4334C24.9698 8.30344 23.2477 6.57621 21.1178 6.56518ZM7.04908 11.6225V11.7113C7.04908 11.7514 7.04908 11.7887 7.04908 11.8288V11.995V12.1956H0.831312V10.4334C0.83604 8.75788 2.19306 7.40086 3.86856 7.39613H7.0806C7.60072 7.39556 8.11211 7.5298 8.56484 7.78581C8.86835 7.95745 9.14062 8.17937 9.36999 8.44197C8.07708 9.00315 7.18912 10.2201 7.04908 11.6225ZM17.1293 11.995V13.76H7.8485V11.9635C7.8485 11.931 7.8485 11.8995 7.8485 11.8689C7.8485 11.8193 7.8485 11.7696 7.8485 11.7199V11.6454C7.8485 11.6168 7.8485 11.5881 7.8485 11.5595V11.4678V11.4391V11.4076V11.3446L7.8657 11.2758L7.89435 11.1726L7.91441 11.1039C8.32601 9.85637 9.48905 9.01174 10.8027 9.00644L10.8858 8.9606H14.1007C15.6262 8.96619 16.9128 10.0985 17.1121 11.611C17.1121 11.6741 17.1121 11.7371 17.1293 11.8001C17.1293 11.8651 17.1293 11.93 17.1293 11.995ZM24.1551 12.1984H17.966V11.9491C17.966 11.9176 17.966 11.8861 17.966 11.8546C17.966 11.8221 17.966 11.7896 17.966 11.7572C17.966 11.7113 17.966 11.6626 17.966 11.6168V11.5738V11.5251V11.4362V11.4219V11.3875V11.356V11.336V11.2987V11.2586V11.2385V11.2127V11.187V11.1612V11.0981V11.0695V11.0322V10.995L17.9459 10.9233V10.8947V10.8689V10.8489V10.8202V10.7829L17.9058 10.6712C17.5325 9.67872 16.771 8.88109 15.7969 8.46203C15.9693 8.20687 16.1789 7.97894 16.4187 7.78581C16.8714 7.5298 17.3828 7.39556 17.9029 7.39613H21.1178C22.7933 7.40086 24.1504 8.75788 24.1551 10.4334V12.1984ZM7.54191 0.871773C8.08955 1.42084 8.39671 2.16482 8.39607 2.94025C8.39464 4.55601 7.08375 5.86461 5.46799 5.86318C3.85223 5.86174 2.54363 4.55078 2.54507 2.9351C2.5465 1.31934 3.85746 0.0107417 5.47315 0.0121744C6.24972 0.0116013 6.99442 0.321057 7.54191 0.871773ZM6.95452 4.41619C7.34786 4.02364 7.56849 3.49054 7.5677 2.93481C7.56756 2.37937 7.34678 1.8467 6.95395 1.45401C6.13575 0.636171 4.80961 0.636458 3.99177 1.45458C3.17393 2.27278 3.17422 3.59892 3.99234 4.41676C4.81054 5.2346 6.13668 5.23431 6.95452 4.41619ZM19.5156 0.00930904C21.1313 0.0107417 22.44 1.32163 22.4385 2.93739C22.4371 4.55315 21.1262 5.86174 19.5105 5.86031C18.7339 5.86089 17.9892 5.55143 17.4417 5.00071C16.8941 4.45172 16.5868 3.70766 16.5875 2.93223C16.589 1.31647 17.8999 0.00787637 19.5156 0.00930904ZM20.9946 4.41497C21.8125 3.59684 21.8122 2.27063 20.9941 1.45279C20.1759 0.634954 18.8497 0.63524 18.0319 1.45336C17.6385 1.84591 17.4179 2.37901 17.4187 2.93474C17.4188 3.49018 17.6396 4.02285 18.0325 4.41554C18.8507 5.23338 20.1768 5.23309 20.9946 4.41497ZM14.5577 2.42335C15.701 3.56275 15.7042 5.41325 14.5648 6.55659C13.4254 7.69992 11.5749 7.70315 10.4316 6.56375C9.28826 5.42435 9.28504 3.57385 10.4244 2.43051C10.9719 1.8798 11.7166 1.57034 12.4932 1.57091C13.2671 1.57056 14.0095 1.87707 14.5577 2.42335ZM12.4926 6.59326C13.6494 6.59355 14.5874 5.65609 14.5878 4.49928C14.5885 3.94355 14.3679 3.41046 13.9746 3.0179C13.5819 2.62507 13.0492 2.40429 12.4938 2.40415C11.337 2.40386 10.3989 3.3414 10.3986 4.49813C10.3984 5.65487 11.3358 6.59291 12.4926 6.59326Z"
                                    fill="#4A4A4A"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1101_31">
                                    <rect width="25" height="15" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p
                                className={
                                  isGroupsActive
                                    ? "text-[#012B6D] font-[700]"
                                    : "inactive-link"
                                }
                              >
                                Groups
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="flex mt-1 flex-col justify-start items-start">
                          <Link to="/dashboard/pages">
                            <div className="flex items-center ml-2 gap-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="20"
                                viewBox="0 0 16 20"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_1101_147)">
                                  <path
                                    d="M0.00384521 2.33331V19.6666C0.00384521 19.8508 0.153093 20 0.337215 20H13.0039C13.1879 20 13.3371 19.8508 13.3371 19.6666V5.66674C13.3371 5.65933 13.3336 5.65301 13.3329 5.64573C13.3312 5.61649 13.3255 5.58765 13.3159 5.56006C13.3121 5.54935 13.3095 5.53905 13.3049 5.52861C13.2887 5.49237 13.2661 5.45928 13.2381 5.43099L9.90485 2.0977C9.87657 2.06956 9.84334 2.04704 9.80682 2.03098C9.79679 2.02672 9.78663 2.02315 9.7762 2.01999C9.74833 2.01038 9.71936 2.00461 9.68984 2.00269C9.68421 2.00365 9.67762 2.00008 9.67061 2.00008H0.337215C0.153093 2.00008 0.00384521 2.14919 0.00384521 2.33331ZM12.1992 5.33337H10.0038V3.13804L12.1992 5.33337ZM0.670448 2.66669H9.33724V5.66674C9.33724 5.85073 9.48649 5.99997 9.67048 5.99997H12.6705V19.3334H0.670448V2.66669ZM14.0039 17.3333V17.9999H15.0038C15.188 17.9999 15.3372 17.8508 15.3372 17.6667V0.33337C15.3372 0.149248 15.188 0 15.0038 0H2.33716C2.15304 0 2.00379 0.149248 2.00379 0.33337V1.33334H2.67053V0.666603H14.6705V17.3333H14.0039ZM2.67053 6.66671H10.6704V7.33331H2.67053V6.66671ZM2.67053 4.66663H5.33722V5.33337H2.67053V4.66663ZM2.67053 8.66666H8.0039V9.3334H2.67053V8.66666ZM8.6705 8.66666H10.6704V9.3334H8.6705V8.66666ZM2.67053 10.6666H10.6704V11.3333H2.67053V10.6666ZM2.67053 14.6666H10.6704V15.3334H2.67053V14.6666ZM5.67045 12.6667H10.6704V13.3333H5.67045V12.6667ZM2.67053 12.6667H5.00385V13.3333H2.67053V12.6667ZM2.67053 16.6667H4.00387V17.3333H2.67053V16.6667ZM4.67048 16.6667H10.6704V17.3333H4.67048V16.6667Z"
                                    fill="#4A4A4A"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1101_147">
                                    <rect width="16" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p
                                className={
                                  isPagesActive
                                    ? "text-[#012B6D] font-[700]"
                                    : "inactive-link"
                                }
                              >
                                Pages
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/instagram">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_71)">
                                <path
                                  d="M15.75 0.262497H5.25001C2.49549 0.262497 0.262512 2.49548 0.262512 5.25V15.75C0.262512 18.5045 2.49549 20.7375 5.25001 20.7375H15.75C18.5045 20.7375 20.7375 18.5045 20.7375 15.75V5.25C20.7375 2.49548 18.5045 0.262497 15.75 0.262497ZM5.25001 1.05H15.75C18.0696 1.05 19.95 2.9304 19.95 5.25V15.75C19.95 18.0696 18.0696 19.95 15.75 19.95H5.25001C2.93042 19.95 1.05001 18.0696 1.05001 15.75V5.25C1.05001 2.9304 2.93042 1.05 5.25001 1.05Z"
                                  fill="#4A4A4A"
                                />
                                <path
                                  d="M10.5 4.85625C7.38306 4.85625 4.85626 7.38304 4.85626 10.5C4.85626 13.617 7.38306 16.1437 10.5 16.1437C13.617 16.1437 16.1438 13.617 16.1438 10.5C16.1438 7.38304 13.617 4.85625 10.5 4.85625ZM10.5 5.64375C13.182 5.64375 15.3563 7.81796 15.3563 10.5C15.3563 13.182 13.182 15.3562 10.5 15.3562C7.81798 15.3562 5.64376 13.182 5.64376 10.5C5.64376 7.81796 7.81798 5.64375 10.5 5.64375Z"
                                  fill="#4A4A4A"
                                />
                                <path
                                  d="M17.0625 2.23125C16.1202 2.23125 15.3563 2.99516 15.3563 3.9375C15.3563 4.87983 16.1202 5.64375 17.0625 5.64375C18.0048 5.64375 18.7688 4.87983 18.7688 3.9375C18.7688 2.99516 18.0048 2.23125 17.0625 2.23125ZM17.0625 3.01875C17.5699 3.01875 17.9813 3.43009 17.9813 3.9375C17.9813 4.44491 17.5699 4.85625 17.0625 4.85625C16.5551 4.85625 16.1438 4.44491 16.1438 3.9375C16.1438 3.43009 16.5551 3.01875 17.0625 3.01875Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_71">
                                  <rect width="21" height="21" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={
                                isInstaActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }
                            >
                              Instagram
                            </p>
                          </div>
                        </Link>
                      </div>

                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/post-notification">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="20"
                              viewBox="0 0 19 20"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_137)">
                                <path
                                  d="M14.9047 8.33333L18.4413 3.18867C18.5113 3.08667 18.519 2.95433 18.4617 2.84467C18.404 2.73533 18.2903 2.66667 18.1667 2.66667H8.16666V1.33333C8.16666 1.149 8.01766 1 7.83332 1H0.833323V0.333333C0.833323 0.149 0.684323 0 0.49999 0C0.315656 0 0.166656 0.149 0.166656 0.333333V1.33333V11V19.6667C0.166656 19.851 0.315656 20 0.49999 20C0.684323 20 0.833323 19.851 0.833323 19.6667V11.3333H4.50866C4.29699 11.6127 4.16666 11.9567 4.16666 12.3333C4.16666 13.2523 4.91432 14 5.83332 14H18.1667C18.2903 14 18.404 13.9313 18.4617 13.822C18.5193 13.7123 18.5113 13.5797 18.4413 13.478L14.9047 8.33333ZM0.833323 1.66667H7.49999V3V10.6667H5.83332H0.833323V1.66667ZM5.83332 13.3333C5.28199 13.3333 4.83332 12.8847 4.83332 12.3333C4.83332 11.782 5.28199 11.3333 5.83332 11.3333H7.83332C8.01766 11.3333 8.16666 11.1843 8.16666 11V3.33333H17.533L14.2253 8.14467C14.1473 8.25833 14.1473 8.40867 14.2253 8.52233L17.533 13.3333H5.83332Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_137">
                                  <rect width="19" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={
                                isPostActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }
                            >
                              Post Notifications
                            </p>
                          </div>
                        </Link>
                      </div>

                      {user?.role === "manager" ? (
                        <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                          <Link to="/dashboard/manage-users">
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="20"
                                viewBox="0 0 17 20"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_1101_198)">
                                  <path
                                    d="M8.43479 10.7743C8.45549 10.7743 8.4762 10.7743 8.50104 10.7743C8.50932 10.7743 8.51761 10.7743 8.52589 10.7743C8.53831 10.7743 8.55487 10.7743 8.5673 10.7743C9.78055 10.7536 10.7619 10.3271 11.4866 9.51139C13.0808 7.71429 12.8157 4.63354 12.7868 4.33954C12.6832 2.1325 11.6398 1.0766 10.7785 0.583851C10.1367 0.215321 9.38717 0.0165631 8.55073 0H8.52175C8.51761 0 8.50932 0 8.50518 0H8.48034C8.02071 0 7.11802 0.0745342 6.2526 0.567288C5.38303 1.06004 4.32299 2.11594 4.21947 4.33954C4.19048 4.63354 3.92547 7.71429 5.51968 9.51139C6.24017 10.3271 7.22154 10.7536 8.43479 10.7743ZM5.32506 4.44306C5.32506 4.43064 5.3292 4.41822 5.3292 4.40994C5.46585 1.44099 7.57351 1.12215 8.4762 1.12215H8.49276C8.50104 1.12215 8.51346 1.12215 8.52589 1.12215C9.6439 1.147 11.5445 1.60248 11.6729 4.40994C11.6729 4.42236 11.6729 4.43478 11.677 4.44306C11.6812 4.47205 11.971 7.28778 10.6543 8.77019C10.1325 9.35818 9.43686 9.64803 8.52175 9.65631C8.51346 9.65631 8.50932 9.65631 8.50104 9.65631C8.49276 9.65631 8.48862 9.65631 8.48034 9.65631C7.56937 9.64803 6.86957 9.35818 6.35197 8.77019C5.03935 7.29607 5.32092 4.46791 5.32506 4.44306ZM17.0104 15.8841C17.0145 16.0994 17.0186 17.205 16.8116 17.7557C16.7702 17.8634 16.6915 17.9545 16.5963 18.0166C16.4721 18.0952 13.4948 19.9959 8.51346 19.9959C3.5321 19.9959 0.554873 18.0994 0.430649 18.0166C0.33127 17.9545 0.256736 17.8634 0.215328 17.7557C-0.00413334 17.2008 7.43242e-06 16.0952 0.00414822 15.8799C0.00414822 15.8758 0.00414822 15.8716 0.00414822 15.8675C0.00828901 15.8344 0.00828901 15.8012 0.00828901 15.764C0.0331337 14.9482 0.0869639 13.0311 1.88407 12.4141C1.89649 12.4099 1.90891 12.4058 1.92547 12.4017C3.80125 11.9255 5.34576 10.8489 5.36233 10.8364C5.61491 10.6584 5.96274 10.7205 6.14079 10.9731C6.31885 11.2257 6.25674 11.5735 6.00415 11.7516C5.93375 11.7971 4.28572 12.9482 2.22361 13.4783C1.25881 13.8219 1.15115 14.853 1.12216 15.7971C1.12216 15.8344 1.11802 15.8675 1.11802 15.9006C1.10974 16.2733 1.13872 16.8489 1.20498 17.1801C1.87992 17.5611 4.52589 18.882 8.50932 18.882C12.5093 18.882 15.1387 17.5652 15.8095 17.1843C15.8758 16.853 15.9006 16.2774 15.8965 15.9048C15.8923 15.8716 15.8923 15.8385 15.8923 15.8012C15.8634 14.8571 15.7557 13.8261 14.7909 13.4824C12.7288 12.9524 11.0808 11.8054 11.0104 11.7557C10.7578 11.5776 10.6957 11.2298 10.8737 10.9772C11.0518 10.7246 11.3996 10.6625 11.6522 10.8406C11.6687 10.853 13.2215 11.9296 15.089 12.4058C15.1015 12.4099 15.118 12.4141 15.1304 12.4182C16.9275 13.0311 16.9814 14.9482 17.0062 15.7681C17.0062 15.8054 17.0104 15.8385 17.0104 15.8716C17.0104 15.8758 17.0104 15.8799 17.0104 15.8841Z"
                                    fill="#4A4A4A"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1101_198">
                                    <rect width="17" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p
                                className={
                                  isManageUsers
                                    ? "text-[#012B6D] font-[700]"
                                    : "inactive-link"
                                }
                              >
                                Manage Users
                              </p>
                            </div>
                          </Link>
                        </div>
                      ) : (
                        <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                          <Link to="/dashboard/manage-managers">
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="20"
                                viewBox="0 0 17 20"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_1101_198)">
                                  <path
                                    d="M8.43479 10.7743C8.45549 10.7743 8.4762 10.7743 8.50104 10.7743C8.50932 10.7743 8.51761 10.7743 8.52589 10.7743C8.53831 10.7743 8.55487 10.7743 8.5673 10.7743C9.78055 10.7536 10.7619 10.3271 11.4866 9.51139C13.0808 7.71429 12.8157 4.63354 12.7868 4.33954C12.6832 2.1325 11.6398 1.0766 10.7785 0.583851C10.1367 0.215321 9.38717 0.0165631 8.55073 0H8.52175C8.51761 0 8.50932 0 8.50518 0H8.48034C8.02071 0 7.11802 0.0745342 6.2526 0.567288C5.38303 1.06004 4.32299 2.11594 4.21947 4.33954C4.19048 4.63354 3.92547 7.71429 5.51968 9.51139C6.24017 10.3271 7.22154 10.7536 8.43479 10.7743ZM5.32506 4.44306C5.32506 4.43064 5.3292 4.41822 5.3292 4.40994C5.46585 1.44099 7.57351 1.12215 8.4762 1.12215H8.49276C8.50104 1.12215 8.51346 1.12215 8.52589 1.12215C9.6439 1.147 11.5445 1.60248 11.6729 4.40994C11.6729 4.42236 11.6729 4.43478 11.677 4.44306C11.6812 4.47205 11.971 7.28778 10.6543 8.77019C10.1325 9.35818 9.43686 9.64803 8.52175 9.65631C8.51346 9.65631 8.50932 9.65631 8.50104 9.65631C8.49276 9.65631 8.48862 9.65631 8.48034 9.65631C7.56937 9.64803 6.86957 9.35818 6.35197 8.77019C5.03935 7.29607 5.32092 4.46791 5.32506 4.44306ZM17.0104 15.8841C17.0145 16.0994 17.0186 17.205 16.8116 17.7557C16.7702 17.8634 16.6915 17.9545 16.5963 18.0166C16.4721 18.0952 13.4948 19.9959 8.51346 19.9959C3.5321 19.9959 0.554873 18.0994 0.430649 18.0166C0.33127 17.9545 0.256736 17.8634 0.215328 17.7557C-0.00413334 17.2008 7.43242e-06 16.0952 0.00414822 15.8799C0.00414822 15.8758 0.00414822 15.8716 0.00414822 15.8675C0.00828901 15.8344 0.00828901 15.8012 0.00828901 15.764C0.0331337 14.9482 0.0869639 13.0311 1.88407 12.4141C1.89649 12.4099 1.90891 12.4058 1.92547 12.4017C3.80125 11.9255 5.34576 10.8489 5.36233 10.8364C5.61491 10.6584 5.96274 10.7205 6.14079 10.9731C6.31885 11.2257 6.25674 11.5735 6.00415 11.7516C5.93375 11.7971 4.28572 12.9482 2.22361 13.4783C1.25881 13.8219 1.15115 14.853 1.12216 15.7971C1.12216 15.8344 1.11802 15.8675 1.11802 15.9006C1.10974 16.2733 1.13872 16.8489 1.20498 17.1801C1.87992 17.5611 4.52589 18.882 8.50932 18.882C12.5093 18.882 15.1387 17.5652 15.8095 17.1843C15.8758 16.853 15.9006 16.2774 15.8965 15.9048C15.8923 15.8716 15.8923 15.8385 15.8923 15.8012C15.8634 14.8571 15.7557 13.8261 14.7909 13.4824C12.7288 12.9524 11.0808 11.8054 11.0104 11.7557C10.7578 11.5776 10.6957 11.2298 10.8737 10.9772C11.0518 10.7246 11.3996 10.6625 11.6522 10.8406C11.6687 10.853 13.2215 11.9296 15.089 12.4058C15.1015 12.4099 15.118 12.4141 15.1304 12.4182C16.9275 13.0311 16.9814 14.9482 17.0062 15.7681C17.0062 15.8054 17.0104 15.8385 17.0104 15.8716C17.0104 15.8758 17.0104 15.8799 17.0104 15.8841Z"
                                    fill="#4A4A4A"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1101_198">
                                    <rect width="17" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p
                                className={
                                  isManageManagers
                                    ? "text-[#012B6D] font-[700]"
                                    : "inactive-link"
                                }
                              >
                                Manage Managers
                              </p>
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full  mt-6 rounded-md bg-white text-[20px] font-[400]  ">
                    <div className="bg-[#012B6D] text-white w-full py-2 rounded-t-md text-center">
                      <p>Planning</p>
                    </div>

                    <div className="w-full border border-[#ADADAD] rounded-b-md p-6">
                      <div className="flex flex-col gap-5 justify-start items-start">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_1101_158)">
                              <path
                                d="M1 6V16C1 16.5523 1.44772 17 2 17H13V6H1ZM14 6V17H16C16.5523 17 17 16.5523 17 16V6H14ZM2 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0ZM17 5V2C17 1.44772 16.5523 1 16 1H2C1.44772 1 1 1.44772 1 2V5H17Z"
                                fill="#4A4A4A"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1101_158">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          Templates
                        </div>
                      </div>
                      <div className="ml-3">
                        <div className="flex mt-1 flex-col justify-start items-start">
                          <Link to="/dashboard/facebooktemplate/facebook-template">
                            <div className="flex items-center gap-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_1101_167)">
                                  <path
                                    d="M16.9805 0H4.01953C1.80313 0 0 1.80313 0 4.01953V16.9805C0 19.1969 1.80313 21 4.01953 21H10.5C10.7265 21 10.9102 20.8164 10.9102 20.5898V17.4111C10.9102 17.1846 10.7265 17.001 10.5 17.001C10.2735 17.001 10.0898 17.1846 10.0898 17.4111V20.1797H4.01953C2.25549 20.1797 0.820312 18.7445 0.820312 16.9805V4.01953C0.820312 2.25549 2.25549 0.820312 4.01953 0.820312H16.9805C18.7445 0.820312 20.1797 2.25549 20.1797 4.01953V16.9805C20.1797 18.7445 18.7445 20.1797 16.9805 20.1797H14.3555V12.9405H16.7336C16.9443 12.9405 17.1206 12.7809 17.1417 12.5714L17.4366 9.6406C17.4483 9.52522 17.4105 9.41038 17.3328 9.32441C17.255 9.23844 17.1444 9.18939 17.0285 9.18939H14.3555V7.65044C14.3555 7.3719 14.4442 7.26834 14.6828 7.26834H17.0101C17.2367 7.26834 17.4203 7.08471 17.4203 6.85818V4.00103C17.4203 3.7745 17.2367 3.59088 17.0101 3.59088H13.9538C12.222 3.59088 11.3035 4.35155 10.8381 4.98967C10.187 5.88209 10.0898 6.93603 10.0898 7.48482V9.20776H8.08004C7.85351 9.20776 7.66988 9.39139 7.66988 9.61792V12.5303C7.66988 12.7568 7.85351 12.9404 8.08004 12.9404H10.0898V18.3094C10.0898 18.5359 10.2734 18.7195 10.5 18.7195C10.7265 18.7195 10.9101 18.5359 10.9101 18.3094V12.5303C10.9101 12.3037 10.7265 12.1201 10.5 12.1201H8.49019V10.028H10.5C10.7265 10.028 10.9101 9.84441 10.9101 9.61788V7.48478C10.9101 6.56061 11.2067 4.41115 13.9538 4.41115H16.6V6.44798H14.6828C14.1534 6.44798 13.5352 6.7629 13.5352 7.6504V9.5995C13.5352 9.82603 13.7188 10.0097 13.9453 10.0097H16.575L16.3626 12.1201H13.9453C13.7188 12.1201 13.5352 12.3037 13.5352 12.5303V20.5898C13.5352 20.8164 13.7188 21 13.9453 21H16.9805C19.1969 21 21 19.1969 21 16.9805V4.01953C21 1.80313 19.1969 0 16.9805 0Z"
                                    fill="#4A4A4A"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1101_167">
                                    <rect width="21" height="21" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p
                                className={
                                  isTempFacebookActive
                                    ? "text-[#012B6D] font-[700]"
                                    : "inactive-link"
                                }
                              >
                                Facebook
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="flex mt-1 flex-col justify-start items-start">
                          <Link to="/dashboard/instagramtemplate/instagram-template">
                            <div className="flex items-center gap-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_1101_129)">
                                  <path
                                    d="M16.5 0.274994H5.50002C2.61434 0.274994 0.275024 2.61431 0.275024 5.49999V16.5C0.275024 19.3857 2.61434 21.725 5.50002 21.725H16.5C19.3857 21.725 21.725 19.3857 21.725 16.5V5.49999C21.725 2.61431 19.3857 0.274994 16.5 0.274994ZM5.50002 1.09999H16.5C18.9301 1.09999 20.9 3.06994 20.9 5.49999V16.5C20.9 18.93 18.9301 20.9 16.5 20.9H5.50002C3.06997 20.9 1.10002 18.93 1.10002 16.5V5.49999C1.10002 3.06994 3.06997 1.09999 5.50002 1.09999Z"
                                    fill="#4A4A4A"
                                  />
                                  <path
                                    d="M11 5.08749C7.73464 5.08749 5.08752 7.73461 5.08752 11C5.08752 14.2654 7.73464 16.9125 11 16.9125C14.2654 16.9125 16.9125 14.2654 16.9125 11C16.9125 7.73461 14.2654 5.08749 11 5.08749ZM11 5.91249C13.8098 5.91249 16.0875 8.19025 16.0875 11C16.0875 13.8097 13.8098 16.0875 11 16.0875C8.19028 16.0875 5.91252 13.8097 5.91252 11C5.91252 8.19025 8.19028 5.91249 11 5.91249Z"
                                    fill="#4A4A4A"
                                  />
                                  <path
                                    d="M17.875 2.33749C16.8878 2.33749 16.0875 3.13778 16.0875 4.12499C16.0875 5.1122 16.8878 5.91249 17.875 5.91249C18.8622 5.91249 19.6625 5.1122 19.6625 4.12499C19.6625 3.13778 18.8622 2.33749 17.875 2.33749ZM17.875 3.16249C18.4066 3.16249 18.8375 3.59342 18.8375 4.12499C18.8375 4.65657 18.4066 5.08749 17.875 5.08749C17.3435 5.08749 16.9125 4.65657 16.9125 4.12499C16.9125 3.59342 17.3435 3.16249 17.875 3.16249Z"
                                    fill="#4A4A4A"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1101_129">
                                    <rect width="22" height="22" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p
                                className={
                                  isTempInstaActive
                                    ? "text-[#012B6D] font-[700]"
                                    : "inactive-link"
                                }
                              >
                                Instagram
                              </p>
                            </div>
                          </Link>
                        </div>
                        {/* <div className="flex mt-1 flex-col justify-start items-start">
                      <Link to="/dashboard/emailtemplate/email-template">
                        <div className="flex items-center  gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
                            <g clip-path="url(#clip0_1101_177)">
                              <path d="M19.602 15.9581H1.71875C0.771375 15.9581 0 15.164 0 14.1872V2.11226C0 1.13547 0.771375 0.341431 1.71875 0.341431H19.602C20.5494 0.341431 21.3207 1.13547 21.3207 2.11226V14.1872C21.3207 15.164 20.5494 15.9581 19.602 15.9581ZM1.71875 1.04976C1.15019 1.04976 0.6875 1.52647 0.6875 2.11226V14.1872C0.6875 14.773 1.15019 15.2497 1.71875 15.2497H19.602C20.1706 15.2497 20.6332 14.773 20.6332 14.1872V2.11226C20.6332 1.52647 20.1706 1.04976 19.602 1.04976H1.71875ZM17.2624 12.4029C17.1779 12.4029 17.0933 12.3711 17.0273 12.3066L13.0714 8.48301C12.9333 8.34985 12.9264 8.12531 13.0563 7.98293C13.1863 7.83914 13.4028 7.83276 13.5424 7.96735L17.4983 11.7909C17.6364 11.9241 17.6433 12.1486 17.5134 12.291C17.4453 12.3654 17.3546 12.4029 17.2624 12.4029ZM4.05763 12.4029C3.96619 12.4029 3.87475 12.3654 3.80669 12.291C3.67675 12.1486 3.68362 11.9241 3.82181 11.7909L7.77906 7.96735C7.91794 7.83418 8.13588 7.83985 8.26513 7.98293C8.39506 8.12531 8.38819 8.34985 8.25 8.48301L4.29275 12.3066C4.22675 12.3711 4.14219 12.4029 4.05763 12.4029ZM10.6604 9.92943C10.2032 9.92943 9.746 9.77289 9.39812 9.46051L0.570625 1.52647C0.427625 1.39826 0.4125 1.17443 0.536938 1.02639C0.66275 0.879056 0.879313 0.865597 1.02231 0.992389L9.84981 8.92572C10.2891 9.32026 11.0316 9.32026 11.4703 8.92572L20.2867 1.00514C20.4291 0.876931 20.6456 0.891097 20.7721 1.03914C20.8966 1.18718 20.8821 1.41031 20.7391 1.53922L11.9226 9.45981C11.5741 9.77289 11.1176 9.92943 10.6604 9.92943Z" fill="#4A4A4A" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1101_177">
                                <rect width="22" height="17" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className={isTempEmailActive ? 'text-[#012B6D] font-[700]' : 'inactive-link'}>
                            Emails
                          </p>
                        </div>
                      </Link>
                    </div> */}
                      </div>
                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/imagegallery/image-gallery">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_119)">
                                <path
                                  d="M0 16.9759C0 18.081 0.899592 18.9767 2.00082 18.9767H16.9759C18.081 18.9767 18.9767 18.0771 18.9767 16.9759V2.00082C18.9767 0.895714 18.0771 0 16.9759 0H2.00082C0.895714 0 0 0.899592 0 2.00082V16.9759ZM16.9759 18.0267H2.00082C1.42306 18.0267 0.95 17.5537 0.95 16.9759V14.4749L4.54837 10.8765L7.62327 13.9514C7.80939 14.1376 8.10796 14.1376 8.29408 13.9514L13.8467 8.39878L18.0267 12.5788V16.9759C18.0267 17.5537 17.5537 18.0267 16.9759 18.0267ZM2.00082 0.95H16.9759C17.5537 0.95 18.0267 1.42306 18.0267 2.00082V11.2333L14.1802 7.39061C13.9941 7.20449 13.6955 7.20449 13.5094 7.39061L7.95673 12.9433L4.88184 9.86837C4.69571 9.68224 4.39714 9.68224 4.21102 9.86837L0.95 13.1294V2.00082C0.95 1.42306 1.42306 0.95 2.00082 0.95ZM5.88225 7.60388C7.21612 7.60388 8.29796 6.51816 8.29796 5.18816C8.29796 3.85816 7.21224 2.77245 5.88225 2.77245C4.55225 2.77245 3.46653 3.85816 3.46653 5.18816C3.46653 6.51816 4.54837 7.60388 5.88225 7.60388ZM5.88225 3.72245C6.69265 3.72245 7.34796 4.38163 7.34796 5.18816C7.34796 5.99469 6.68878 6.65388 5.88225 6.65388C5.07571 6.65388 4.41653 5.99469 4.41653 5.18816C4.41653 4.38163 5.07184 3.72245 5.88225 3.72245Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_119">
                                  <rect width="19" height="19" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={
                                isTempGalleryActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }
                            >
                              Image Gallery
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/imagegallery/video-gallery">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="15"
                              viewBox="0 0 18 15"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_188)">
                                <path
                                  d="M17.6897 0H14.5862H3.41379H0.310345C0.139034 0 0 0.138724 0 0.310345V3.72414V7.13793V10.5517V13.9655C0 14.1371 0.139034 14.2759 0.310345 14.2759H3.41379H14.5862H17.6897C17.861 14.2759 18 14.1371 18 13.9655V10.5517V7.13793V3.72414V0.310345C18 0.138724 17.861 0 17.6897 0ZM3.10345 6.82759H0.62069V4.03448H3.10345V6.82759ZM0.62069 7.44828H3.10345V10.2414H0.62069V7.44828ZM3.72414 10.5517V7.13793V3.72414V0.62069H14.2759V3.72414V7.13793V10.5517V13.6552H3.72414V10.5517ZM17.3793 6.82759H14.8966V4.03448H17.3793V6.82759ZM14.8966 7.44828H17.3793V10.2414H14.8966V7.44828ZM17.3793 0.62069V3.41379H14.8966V0.62069H17.3793ZM0.62069 0.62069H3.10345V3.41379H0.62069V0.62069ZM0.62069 13.6552V10.8621H3.10345V13.6552H0.62069ZM17.3793 13.6552H14.8966V10.8621H17.3793V13.6552ZM11.3391 6.876C11.4284 6.9331 11.4828 7.03179 11.4828 7.13793C11.4828 7.24407 11.4284 7.34276 11.3391 7.39986L7.92528 9.57228C7.87469 9.60424 7.81666 9.62069 7.75862 9.62069C7.7071 9.62069 7.6559 9.60797 7.60934 9.58252C7.51003 9.5279 7.44828 9.42362 7.44828 9.31034V4.96552C7.44828 4.85224 7.51003 4.74797 7.60903 4.69334C7.70866 4.63903 7.82969 4.64307 7.92528 4.70359L11.3391 6.876ZM8.06897 8.74521L10.5942 7.13793L8.06897 5.53066V8.74521Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_188">
                                  <rect width="18" height="15" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={
                                isTempVideoGalleryActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }
                            >
                              Video Gallery
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-full  mt-6 rounded-md bg-white text-[20px] font-[400]  ">
                    <div className="bg-[#012B6D] text-white w-full py-2 rounded-t-md text-center">
                      <p>Teams</p>
                    </div>

                    <div className="w-full border border-[#ADADAD] rounded-b-md ">
                      <div className="flex flex-col">
                        {joinedTeams?.map((team) => (
                          <div key={team?._id}>
                            <div
                              className="flex items-center justify-between bg-[#ADADAD]/20 px-12 py-2 w-full cursor-pointer"
                              onClick={() =>
                                setOpenTeam(
                                  openTeam === team?._id ? "" : team?._id
                                )
                              }
                            >
                              <h2 className="text-lg d">{team?.name}</h2>
                              <div className="transform rotate-0">
                                {openTeam === team?._id ? (
                                  <span>
                                    <MdKeyboardArrowUp size={20} />
                                  </span>
                                ) : (
                                  <span>
                                    <MdKeyboardArrowDown size={20} />
                                  </span>
                                )}
                              </div>
                            </div>
                            {openTeam === team?._id && (
                              <div className=" bg-white">
                                <div className="ml-12">
                                  <div className="flex mt-1 flex-col justify-start items-start">
                                    <Link
                                      to={`/dashboard/team/${team?._id}`}
                                      onClick={handleLinkClick}
                                    >
                                      <div className="flex items-center gap-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="25"
                                          height="15"
                                          viewBox="0 0 25 15"
                                          fill="none"
                                        >
                                          <g clip-path="url(#clip0_1101_31)">
                                            <path
                                              d="M21.1178 6.56518H17.9058C17.242 6.56475 16.5894 6.73653 16.0118 7.06375C15.5202 7.34262 15.0949 7.72485 14.7654 8.18409C14.5459 8.14577 14.3235 8.12665 14.1007 8.12679H10.8858C10.6629 8.12657 10.4405 8.14577 10.221 8.18409C9.89155 7.72478 9.46627 7.34255 8.97458 7.06375C8.397 6.73653 7.74442 6.56475 7.0806 6.56518H3.86856C1.73418 6.56991 0.005094 8.29899 0.000366211 10.4334V12.6139C0.00194214 12.8423 0.187472 13.0265 0.415839 13.0265H7.0061V14.1726C7.0061 14.4021 7.19213 14.5881 7.42157 14.5881H17.5534C17.7828 14.5881 17.9688 14.4021 17.9688 14.1726V13.0265H24.5591C24.7885 13.0265 24.9746 12.8405 24.9746 12.611V10.4334C24.9698 8.30344 23.2477 6.57621 21.1178 6.56518ZM7.04908 11.6225V11.7113C7.04908 11.7514 7.04908 11.7887 7.04908 11.8288V11.995V12.1956H0.831312V10.4334C0.83604 8.75788 2.19306 7.40086 3.86856 7.39613H7.0806C7.60072 7.39556 8.11211 7.5298 8.56484 7.78581C8.86835 7.95745 9.14062 8.17937 9.36999 8.44197C8.07708 9.00315 7.18912 10.2201 7.04908 11.6225ZM17.1293 11.995V13.76H7.8485V11.9635C7.8485 11.931 7.8485 11.8995 7.8485 11.8689C7.8485 11.8193 7.8485 11.7696 7.8485 11.7199V11.6454C7.8485 11.6168 7.8485 11.5881 7.8485 11.5595V11.4678V11.4391V11.4076V11.3446L7.8657 11.2758L7.89435 11.1726L7.91441 11.1039C8.32601 9.85637 9.48905 9.01174 10.8027 9.00644L10.8858 8.9606H14.1007C15.6262 8.96619 16.9128 10.0985 17.1121 11.611C17.1121 11.6741 17.1121 11.7371 17.1293 11.8001C17.1293 11.8651 17.1293 11.93 17.1293 11.995ZM24.1551 12.1984H17.966V11.9491C17.966 11.9176 17.966 11.8861 17.966 11.8546C17.966 11.8221 17.966 11.7896 17.966 11.7572C17.966 11.7113 17.966 11.6626 17.966 11.6168V11.5738V11.5251V11.4362V11.4219V11.3875V11.356V11.336V11.2987V11.2586V11.2385V11.2127V11.187V11.1612V11.0981V11.0695V11.0322V10.995L17.9459 10.9233V10.8947V10.8689V10.8489V10.8202V10.7829L17.9058 10.6712C17.5325 9.67872 16.771 8.88109 15.7969 8.46203C15.9693 8.20687 16.1789 7.97894 16.4187 7.78581C16.8714 7.5298 17.3828 7.39556 17.9029 7.39613H21.1178C22.7933 7.40086 24.1504 8.75788 24.1551 10.4334V12.1984ZM7.54191 0.871773C8.08955 1.42084 8.39671 2.16482 8.39607 2.94025C8.39464 4.55601 7.08375 5.86461 5.46799 5.86318C3.85223 5.86174 2.54363 4.55078 2.54507 2.9351C2.5465 1.31934 3.85746 0.0107417 5.47315 0.0121744C6.24972 0.0116013 6.99442 0.321057 7.54191 0.871773ZM6.95452 4.41619C7.34786 4.02364 7.56849 3.49054 7.5677 2.93481C7.56756 2.37937 7.34678 1.8467 6.95395 1.45401C6.13575 0.636171 4.80961 0.636458 3.99177 1.45458C3.17393 2.27278 3.17422 3.59892 3.99234 4.41676C4.81054 5.2346 6.13668 5.23431 6.95452 4.41619ZM19.5156 0.00930904C21.1313 0.0107417 22.44 1.32163 22.4385 2.93739C22.4371 4.55315 21.1262 5.86174 19.5105 5.86031C18.7339 5.86089 17.9892 5.55143 17.4417 5.00071C16.8941 4.45172 16.5868 3.70766 16.5875 2.93223C16.589 1.31647 17.8999 0.00787637 19.5156 0.00930904ZM20.9946 4.41497C21.8125 3.59684 21.8122 2.27063 20.9941 1.45279C20.1759 0.634954 18.8497 0.63524 18.0319 1.45336C17.6385 1.84591 17.4179 2.37901 17.4187 2.93474C17.4188 3.49018 17.6396 4.02285 18.0325 4.41554C18.8507 5.23338 20.1768 5.23309 20.9946 4.41497ZM14.5577 2.42335C15.701 3.56275 15.7042 5.41325 14.5648 6.55659C13.4254 7.69992 11.5749 7.70315 10.4316 6.56375C9.28826 5.42435 9.28504 3.57385 10.4244 2.43051C10.9719 1.8798 11.7166 1.57034 12.4932 1.57091C13.2671 1.57056 14.0095 1.87707 14.5577 2.42335ZM12.4926 6.59326C13.6494 6.59355 14.5874 5.65609 14.5878 4.49928C14.5885 3.94355 14.3679 3.41046 13.9746 3.0179C13.5819 2.62507 13.0492 2.40429 12.4938 2.40415C11.337 2.40386 10.3989 3.3414 10.3986 4.49813C10.3984 5.65487 11.3358 6.59291 12.4926 6.59326Z"
                                              fill="#4A4A4A"
                                            />
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_1101_31">
                                              <rect
                                                width="25"
                                                height="15"
                                                fill="white"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        <p
                                          className={
                                            isTeamPageActive
                                              ? "text-[#012B6D] font-[700]"
                                              : "inactive-link"
                                          }
                                        >
                                          Team Page
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="flex mt-1 flex-col justify-start items-start">
                                    <Link
                                      to={`/dashboard/team/${team?._id}/facebook-template`}
                                    >
                                      <div className="flex items-center gap-3">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="21"
                                          height="21"
                                          viewBox="0 0 21 21"
                                          fill="none"
                                        >
                                          <g clip-path="url(#clip0_1101_167)">
                                            <path
                                              d="M16.9805 0H4.01953C1.80313 0 0 1.80313 0 4.01953V16.9805C0 19.1969 1.80313 21 4.01953 21H10.5C10.7265 21 10.9102 20.8164 10.9102 20.5898V17.4111C10.9102 17.1846 10.7265 17.001 10.5 17.001C10.2735 17.001 10.0898 17.1846 10.0898 17.4111V20.1797H4.01953C2.25549 20.1797 0.820312 18.7445 0.820312 16.9805V4.01953C0.820312 2.25549 2.25549 0.820312 4.01953 0.820312H16.9805C18.7445 0.820312 20.1797 2.25549 20.1797 4.01953V16.9805C20.1797 18.7445 18.7445 20.1797 16.9805 20.1797H14.3555V12.9405H16.7336C16.9443 12.9405 17.1206 12.7809 17.1417 12.5714L17.4366 9.6406C17.4483 9.52522 17.4105 9.41038 17.3328 9.32441C17.255 9.23844 17.1444 9.18939 17.0285 9.18939H14.3555V7.65044C14.3555 7.3719 14.4442 7.26834 14.6828 7.26834H17.0101C17.2367 7.26834 17.4203 7.08471 17.4203 6.85818V4.00103C17.4203 3.7745 17.2367 3.59088 17.0101 3.59088H13.9538C12.222 3.59088 11.3035 4.35155 10.8381 4.98967C10.187 5.88209 10.0898 6.93603 10.0898 7.48482V9.20776H8.08004C7.85351 9.20776 7.66988 9.39139 7.66988 9.61792V12.5303C7.66988 12.7568 7.85351 12.9404 8.08004 12.9404H10.0898V18.3094C10.0898 18.5359 10.2734 18.7195 10.5 18.7195C10.7265 18.7195 10.9101 18.5359 10.9101 18.3094V12.5303C10.9101 12.3037 10.7265 12.1201 10.5 12.1201H8.49019V10.028H10.5C10.7265 10.028 10.9101 9.84441 10.9101 9.61788V7.48478C10.9101 6.56061 11.2067 4.41115 13.9538 4.41115H16.6V6.44798H14.6828C14.1534 6.44798 13.5352 6.7629 13.5352 7.6504V9.5995C13.5352 9.82603 13.7188 10.0097 13.9453 10.0097H16.575L16.3626 12.1201H13.9453C13.7188 12.1201 13.5352 12.3037 13.5352 12.5303V20.5898C13.5352 20.8164 13.7188 21 13.9453 21H16.9805C19.1969 21 21 19.1969 21 16.9805V4.01953C21 1.80313 19.1969 0 16.9805 0Z"
                                              fill="#4A4A4A"
                                            />
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_1101_167">
                                              <rect
                                                width="21"
                                                height="21"
                                                fill="white"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        <p
                                          className={
                                            isTempFacebookTeamActive
                                              ? "text-[#012B6D] font-[700]"
                                              : "inactive-link"
                                          }
                                        >
                                          Facebook Template
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="flex mt-1 flex-col justify-start items-start">
                                    <Link
                                      to={`/dashboard/team/${team?._id}/instagram-template`}
                                    >
                                      <div className="flex items-center gap-3">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                        >
                                          <g clip-path="url(#clip0_1101_129)">
                                            <path
                                              d="M16.5 0.274994H5.50002C2.61434 0.274994 0.275024 2.61431 0.275024 5.49999V16.5C0.275024 19.3857 2.61434 21.725 5.50002 21.725H16.5C19.3857 21.725 21.725 19.3857 21.725 16.5V5.49999C21.725 2.61431 19.3857 0.274994 16.5 0.274994ZM5.50002 1.09999H16.5C18.9301 1.09999 20.9 3.06994 20.9 5.49999V16.5C20.9 18.93 18.9301 20.9 16.5 20.9H5.50002C3.06997 20.9 1.10002 18.93 1.10002 16.5V5.49999C1.10002 3.06994 3.06997 1.09999 5.50002 1.09999Z"
                                              fill="#4A4A4A"
                                            />
                                            <path
                                              d="M11 5.08749C7.73464 5.08749 5.08752 7.73461 5.08752 11C5.08752 14.2654 7.73464 16.9125 11 16.9125C14.2654 16.9125 16.9125 14.2654 16.9125 11C16.9125 7.73461 14.2654 5.08749 11 5.08749ZM11 5.91249C13.8098 5.91249 16.0875 8.19025 16.0875 11C16.0875 13.8097 13.8098 16.0875 11 16.0875C8.19028 16.0875 5.91252 13.8097 5.91252 11C5.91252 8.19025 8.19028 5.91249 11 5.91249Z"
                                              fill="#4A4A4A"
                                            />
                                            <path
                                              d="M17.875 2.33749C16.8878 2.33749 16.0875 3.13778 16.0875 4.12499C16.0875 5.1122 16.8878 5.91249 17.875 5.91249C18.8622 5.91249 19.6625 5.1122 19.6625 4.12499C19.6625 3.13778 18.8622 2.33749 17.875 2.33749ZM17.875 3.16249C18.4066 3.16249 18.8375 3.59342 18.8375 4.12499C18.8375 4.65657 18.4066 5.08749 17.875 5.08749C17.3435 5.08749 16.9125 4.65657 16.9125 4.12499C16.9125 3.59342 17.3435 3.16249 17.875 3.16249Z"
                                              fill="#4A4A4A"
                                            />
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_1101_129">
                                              <rect
                                                width="22"
                                                height="22"
                                                fill="white"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        <p
                                          className={
                                            isTempInstaTeamActive
                                              ? "text-[#012B6D] font-[700]"
                                              : "inactive-link"
                                          }
                                        >
                                          Instagram Template
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="flex mt-2 flex-col gap-7 justify-start items-start">
                                    <Link
                                      to={`/dashboard/team/${team?._id}/image`}
                                    >
                                      <div className="flex items-center gap-3 ml-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19"
                                          height="19"
                                          viewBox="0 0 19 19"
                                          fill="none"
                                        >
                                          <g clip-path="url(#clip0_1101_119)">
                                            <path
                                              d="M0 16.9759C0 18.081 0.899592 18.9767 2.00082 18.9767H16.9759C18.081 18.9767 18.9767 18.0771 18.9767 16.9759V2.00082C18.9767 0.895714 18.0771 0 16.9759 0H2.00082C0.895714 0 0 0.899592 0 2.00082V16.9759ZM16.9759 18.0267H2.00082C1.42306 18.0267 0.95 17.5537 0.95 16.9759V14.4749L4.54837 10.8765L7.62327 13.9514C7.80939 14.1376 8.10796 14.1376 8.29408 13.9514L13.8467 8.39878L18.0267 12.5788V16.9759C18.0267 17.5537 17.5537 18.0267 16.9759 18.0267ZM2.00082 0.95H16.9759C17.5537 0.95 18.0267 1.42306 18.0267 2.00082V11.2333L14.1802 7.39061C13.9941 7.20449 13.6955 7.20449 13.5094 7.39061L7.95673 12.9433L4.88184 9.86837C4.69571 9.68224 4.39714 9.68224 4.21102 9.86837L0.95 13.1294V2.00082C0.95 1.42306 1.42306 0.95 2.00082 0.95ZM5.88225 7.60388C7.21612 7.60388 8.29796 6.51816 8.29796 5.18816C8.29796 3.85816 7.21224 2.77245 5.88225 2.77245C4.55225 2.77245 3.46653 3.85816 3.46653 5.18816C3.46653 6.51816 4.54837 7.60388 5.88225 7.60388ZM5.88225 3.72245C6.69265 3.72245 7.34796 4.38163 7.34796 5.18816C7.34796 5.99469 6.68878 6.65388 5.88225 6.65388C5.07571 6.65388 4.41653 5.99469 4.41653 5.18816C4.41653 4.38163 5.07184 3.72245 5.88225 3.72245Z"
                                              fill="#4A4A4A"
                                            />
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_1101_119">
                                              <rect
                                                width="19"
                                                height="19"
                                                fill="white"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        <p
                                          className={
                                            isTempGalleryTeamActive
                                              ? "text-[#012B6D] font-[700]"
                                              : "inactive-link"
                                          }
                                        >
                                          Shared Images
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                                    <Link
                                      to={`/dashboard/team/${team?._id}/videos`}
                                    >
                                      <div className="flex items-center gap-3 ml-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="15"
                                          viewBox="0 0 18 15"
                                          fill="none"
                                        >
                                          <g clip-path="url(#clip0_1101_188)">
                                            <path
                                              d="M17.6897 0H14.5862H3.41379H0.310345C0.139034 0 0 0.138724 0 0.310345V3.72414V7.13793V10.5517V13.9655C0 14.1371 0.139034 14.2759 0.310345 14.2759H3.41379H14.5862H17.6897C17.861 14.2759 18 14.1371 18 13.9655V10.5517V7.13793V3.72414V0.310345C18 0.138724 17.861 0 17.6897 0ZM3.10345 6.82759H0.62069V4.03448H3.10345V6.82759ZM0.62069 7.44828H3.10345V10.2414H0.62069V7.44828ZM3.72414 10.5517V7.13793V3.72414V0.62069H14.2759V3.72414V7.13793V10.5517V13.6552H3.72414V10.5517ZM17.3793 6.82759H14.8966V4.03448H17.3793V6.82759ZM14.8966 7.44828H17.3793V10.2414H14.8966V7.44828ZM17.3793 0.62069V3.41379H14.8966V0.62069H17.3793ZM0.62069 0.62069H3.10345V3.41379H0.62069V0.62069ZM0.62069 13.6552V10.8621H3.10345V13.6552H0.62069ZM17.3793 13.6552H14.8966V10.8621H17.3793V13.6552ZM11.3391 6.876C11.4284 6.9331 11.4828 7.03179 11.4828 7.13793C11.4828 7.24407 11.4284 7.34276 11.3391 7.39986L7.92528 9.57228C7.87469 9.60424 7.81666 9.62069 7.75862 9.62069C7.7071 9.62069 7.6559 9.60797 7.60934 9.58252C7.51003 9.5279 7.44828 9.42362 7.44828 9.31034V4.96552C7.44828 4.85224 7.51003 4.74797 7.60903 4.69334C7.70866 4.63903 7.82969 4.64307 7.92528 4.70359L11.3391 6.876ZM8.06897 8.74521L10.5942 7.13793L8.06897 5.53066V8.74521Z"
                                              fill="#4A4A4A"
                                            />
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_1101_188">
                                              <rect
                                                width="18"
                                                height="15"
                                                fill="white"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        <p
                                          className={`  ${
                                            isTempVideoTeamGalleryActive
                                              ? "text-[#012B6D] font-[700]"
                                              : "inactive-link"
                                          }`}
                                        >
                                          Shared Videos
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}

                        {joinedTeams?.length === 0 && (
                          <p className="bg-[#ADADAD]/20 px-12 py-2 w-full text-center text-base">
                            No Team Found!!
                          </p>
                        )}

                        <Link to={"/dashboard/jointeam/join-team"}>
                          <button className="flex items-center gap-3 px-8 py-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_89)">
                                <path
                                  d="M16.4289 7.83722H10.1628V1.57108C10.1628 1.28563 9.77518 0.666687 8.99999 0.666687C8.2248 0.666687 7.83719 1.28567 7.83719 1.57108V7.83725H1.57105C1.28564 7.83722 0.666656 8.22483 0.666656 8.99999C0.666656 9.77514 1.28564 10.1628 1.57105 10.1628H7.83722V16.429C7.83722 16.7143 8.2248 17.3334 9.00002 17.3334C9.77525 17.3334 10.1628 16.7143 10.1628 16.429V10.1628H16.429C16.7144 10.1628 17.3334 9.77521 17.3334 8.99999C17.3334 8.22476 16.7143 7.83722 16.4289 7.83722Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_89">
                                  <rect width="18" height="18" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={`text-[20px]   ${
                                isJoinTeamActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }`}
                            >
                              Join/ Create Team
                            </p>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-full  mt-6 rounded-md bg-white text-[20px] font-[400]  ">
                    <div className="bg-[#012B6D] text-white w-full py-2 rounded-t-md text-center">
                      <p>Account</p>
                    </div>

                    <div className="w-full border border-[#ADADAD] rounded-b-md py-4 px-6">
                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/profile/profile">
                          <div className="flex items-center gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="20"
                              viewBox="0 0 17 20"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_198)">
                                <path
                                  d="M8.43479 10.7743C8.45549 10.7743 8.4762 10.7743 8.50104 10.7743C8.50932 10.7743 8.51761 10.7743 8.52589 10.7743C8.53831 10.7743 8.55487 10.7743 8.5673 10.7743C9.78055 10.7536 10.7619 10.3271 11.4866 9.51139C13.0808 7.71429 12.8157 4.63354 12.7868 4.33954C12.6832 2.1325 11.6398 1.0766 10.7785 0.583851C10.1367 0.215321 9.38717 0.0165631 8.55073 0H8.52175C8.51761 0 8.50932 0 8.50518 0H8.48034C8.02071 0 7.11802 0.0745342 6.2526 0.567288C5.38303 1.06004 4.32299 2.11594 4.21947 4.33954C4.19048 4.63354 3.92547 7.71429 5.51968 9.51139C6.24017 10.3271 7.22154 10.7536 8.43479 10.7743ZM5.32506 4.44306C5.32506 4.43064 5.3292 4.41822 5.3292 4.40994C5.46585 1.44099 7.57351 1.12215 8.4762 1.12215H8.49276C8.50104 1.12215 8.51346 1.12215 8.52589 1.12215C9.6439 1.147 11.5445 1.60248 11.6729 4.40994C11.6729 4.42236 11.6729 4.43478 11.677 4.44306C11.6812 4.47205 11.971 7.28778 10.6543 8.77019C10.1325 9.35818 9.43686 9.64803 8.52175 9.65631C8.51346 9.65631 8.50932 9.65631 8.50104 9.65631C8.49276 9.65631 8.48862 9.65631 8.48034 9.65631C7.56937 9.64803 6.86957 9.35818 6.35197 8.77019C5.03935 7.29607 5.32092 4.46791 5.32506 4.44306ZM17.0104 15.8841C17.0145 16.0994 17.0186 17.205 16.8116 17.7557C16.7702 17.8634 16.6915 17.9545 16.5963 18.0166C16.4721 18.0952 13.4948 19.9959 8.51346 19.9959C3.5321 19.9959 0.554873 18.0994 0.430649 18.0166C0.33127 17.9545 0.256736 17.8634 0.215328 17.7557C-0.00413334 17.2008 7.43242e-06 16.0952 0.00414822 15.8799C0.00414822 15.8758 0.00414822 15.8716 0.00414822 15.8675C0.00828901 15.8344 0.00828901 15.8012 0.00828901 15.764C0.0331337 14.9482 0.0869639 13.0311 1.88407 12.4141C1.89649 12.4099 1.90891 12.4058 1.92547 12.4017C3.80125 11.9255 5.34576 10.8489 5.36233 10.8364C5.61491 10.6584 5.96274 10.7205 6.14079 10.9731C6.31885 11.2257 6.25674 11.5735 6.00415 11.7516C5.93375 11.7971 4.28572 12.9482 2.22361 13.4783C1.25881 13.8219 1.15115 14.853 1.12216 15.7971C1.12216 15.8344 1.11802 15.8675 1.11802 15.9006C1.10974 16.2733 1.13872 16.8489 1.20498 17.1801C1.87992 17.5611 4.52589 18.882 8.50932 18.882C12.5093 18.882 15.1387 17.5652 15.8095 17.1843C15.8758 16.853 15.9006 16.2774 15.8965 15.9048C15.8923 15.8716 15.8923 15.8385 15.8923 15.8012C15.8634 14.8571 15.7557 13.8261 14.7909 13.4824C12.7288 12.9524 11.0808 11.8054 11.0104 11.7557C10.7578 11.5776 10.6957 11.2298 10.8737 10.9772C11.0518 10.7246 11.3996 10.6625 11.6522 10.8406C11.6687 10.853 13.2215 11.9296 15.089 12.4058C15.1015 12.4099 15.118 12.4141 15.1304 12.4182C16.9275 13.0311 16.9814 14.9482 17.0062 15.7681C17.0062 15.8054 17.0104 15.8385 17.0104 15.8716C17.0104 15.8758 17.0104 15.8799 17.0104 15.8841Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_198">
                                  <rect width="17" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={`text-[20px] ${
                                isProfileActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }`}
                            >
                              Profile
                            </p>
                          </div>
                        </Link>
                      </div>

                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/billing">
                          <div className="flex items-center gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height=""
                              viewBox="0 0 21 18"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_100)">
                                <path
                                  d="M20.6447 3.7033C20.4002 3.38892 20.0858 3.21425 19.7015 3.17933L18.8632 3.07772V2.09641V1.39781C18.8632 0.629321 18.2344 0.000549318 17.4659 0.000549318H1.39726C0.628772 0.000508383 0 0.62928 0 1.39781V2.09646V4.89101V12.576C0 13.2069 0.423971 13.7434 1.001 13.9153C0.983398 14.622 1.51806 15.2354 2.23566 15.3007L18.3741 17.1171C18.4091 17.1171 18.4789 17.1171 18.5139 17.1171C19.2125 17.1171 19.8413 16.5931 19.9111 15.9294L20.9591 4.71634C20.994 4.36699 20.8892 3.98273 20.6447 3.7033ZM0.698649 2.44576H18.1645V3.354V4.54167H0.698649V2.44576ZM1.39726 0.699157H17.4659C17.8501 0.699157 18.1645 1.01354 18.1645 1.39781V1.74711H0.698649V1.39781C0.698649 1.01354 1.01304 0.699157 1.39726 0.699157ZM0.698649 12.5759V5.24027H18.1645V12.5759C18.1645 12.9602 17.8502 13.2746 17.4659 13.2746H1.43222H1.3973C1.01304 13.2746 0.698649 12.9602 0.698649 12.5759ZM20.2604 4.57658L19.2125 15.7897C19.1775 16.1739 18.8282 16.4534 18.444 16.4185L2.34042 14.602C1.99111 14.5671 1.74656 14.2876 1.71164 13.9732H17.4659C18.2343 13.9732 18.8631 13.3445 18.8631 12.576V4.89097V3.73822L19.6666 3.8081C19.8412 3.8081 20.0159 3.91289 20.1207 4.05261C20.2255 4.19232 20.2954 4.40191 20.2604 4.57658ZM11.1782 11.8773C10.9686 11.8773 10.8288 11.7376 10.8289 11.528V8.38418C10.8289 8.17458 10.9686 8.03487 11.1782 8.03487H16.7673C16.9768 8.03487 17.1166 8.17458 17.1166 8.38418V11.528C17.1166 11.7376 16.9768 11.8773 16.7673 11.8773H11.1782ZM11.5275 8.73348V11.1787H16.4179V8.73348H11.5275ZM1.7466 7.33618C1.53701 7.33618 1.3973 7.19647 1.3973 6.98688C1.3973 6.77729 1.53701 6.63757 1.7466 6.63757H4.54116C4.75075 6.63757 4.89046 6.77729 4.89046 6.98688C4.89046 7.19647 4.75075 7.33618 4.54116 7.33618H1.7466ZM5.93842 7.33618C5.72882 7.33618 5.58911 7.19647 5.58911 6.98688C5.58911 6.77729 5.72882 6.63757 5.93842 6.63757H8.73297C8.94256 6.63757 9.08227 6.77729 9.08227 6.98688C9.08227 7.19647 8.94256 7.33618 8.73297 7.33618H5.93842ZM1.7466 8.73348C1.53701 8.73348 1.3973 8.59377 1.3973 8.38418C1.3973 8.17458 1.53701 8.03487 1.7466 8.03487H6.28772C6.49731 8.03487 6.63702 8.17458 6.63702 8.38418C6.63702 8.59377 6.49731 8.73348 6.28772 8.73348H1.7466ZM8.73293 8.03483C8.94252 8.03483 9.08223 8.17454 9.08223 8.38413C9.08223 8.59373 8.94252 8.73344 8.73293 8.73344H7.68498C7.47539 8.73344 7.33567 8.59373 7.33567 8.38413C7.33567 8.17454 7.47539 8.03483 7.68498 8.03483H8.73293Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_100">
                                  <rect width="21" height="18" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={`text-[20px] ${
                                isBillingActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }`}
                            >
                              Billing
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full  mt-6 rounded-md bg-white text-[20px] font-[400]  ">
                    <div className="bg-[#012B6D] text-white w-full py-2 rounded-t-md text-center">
                      <p>About Us</p>
                    </div>

                    <div className="w-full border border-[#ADADAD] rounded-b-md py-4 px-6">
                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/getting-started">
                          <div className="flex items-center gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="21"
                              viewBox="0 0 22 21"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_79)">
                                <path
                                  d="M20.3172 6.68575L14.9538 6.30041C14.8418 6.29145 14.7433 6.22424 14.7029 6.11671L12.6598 1.14318C12.3775 0.457644 11.7412 0.0319824 10.9974 0.0319824C10.2536 0.0319824 9.62187 0.457644 9.33511 1.14766L7.28745 6.12567C7.24265 6.22872 7.14855 6.30041 7.03654 6.30938L1.68216 6.69471C0.956291 6.73504 0.337961 7.20999 0.100486 7.90897C-0.141469 8.61691 0.0601604 9.3607 0.633684 9.84909L4.77829 13.2723C4.86342 13.344 4.90375 13.4605 4.87686 13.568L3.61332 18.7387C3.46546 19.2764 3.56851 19.832 3.8956 20.2666C4.23165 20.7057 4.75588 20.9701 5.307 20.9701C5.64753 20.9701 5.9791 20.867 6.25242 20.6833L10.7824 17.865C10.8765 17.8067 10.9974 17.8067 11.0915 17.865L15.6663 20.6743C15.953 20.867 16.2846 20.9701 16.6206 20.9701C17.1359 20.9701 17.6467 20.7236 17.9783 20.3069C18.3233 19.8768 18.4488 19.3167 18.3233 18.7566L17.0553 13.5725C17.0284 13.4605 17.0687 13.344 17.1538 13.2723L21.3612 9.84013C21.9257 9.35622 22.1274 8.61243 21.8899 7.90449C21.6569 7.20551 21.0341 6.72608 20.3172 6.68575ZM20.6622 8.99329L16.4638 12.421C16.0516 12.757 15.8634 13.3126 15.9934 13.8324L17.2614 19.0075C17.3286 19.3122 17.2076 19.5228 17.127 19.6214C17.0015 19.7782 16.8133 19.8768 16.6251 19.8768C16.5086 19.8768 16.3921 19.8409 16.2667 19.7558L11.674 16.933C11.4545 16.7986 11.2035 16.7269 10.9437 16.7269C10.6838 16.7269 10.4284 16.7986 10.2088 16.9375L5.66097 19.7648C5.36973 19.9574 4.97992 19.8723 4.77381 19.6035C4.68867 19.4915 4.59906 19.2988 4.67971 19.0165L5.94774 13.8279C6.07319 13.3126 5.88949 12.7615 5.48175 12.4255L1.34611 9.00673C1.01902 8.72445 1.10863 8.36151 1.14448 8.25846C1.18032 8.1554 1.32818 7.81039 1.75833 7.78799L7.12167 7.40265C7.65038 7.36233 8.10741 7.03524 8.30904 6.54237L10.3567 1.56437C10.5225 1.16111 10.8944 1.12974 11.0019 1.12974C11.1094 1.12974 11.4813 1.16111 11.6471 1.56437L13.6948 6.54237C13.8964 7.03524 14.3534 7.36233 14.8822 7.40265L20.2545 7.79247C20.6756 7.81487 20.8235 8.15988 20.8593 8.26294C20.8862 8.35703 20.9758 8.71997 20.6622 8.99329Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_79">
                                  <rect width="22" height="21" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={`text-[20px] ${
                                isStartedActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }`}
                            >
                              Getting Started
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/faq">
                          <div className="flex items-center gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_110)">
                                <path
                                  d="M13.5139 7.21883C12.7431 6.96191 11.8438 7.21883 11.2014 7.73268C10.5591 8.24653 10.1737 9.01737 10.1737 9.91668C10.1737 10.3021 10.4306 10.5591 10.8161 10.5591C11.2014 10.5591 11.4584 10.3021 11.4584 9.91668C11.4584 9.5313 11.5869 9.01737 11.9723 8.76045C12.3577 8.50353 12.7431 8.37507 13.257 8.50353C13.8994 8.63199 14.2848 9.14591 14.4132 9.65976C14.5417 10.3021 14.4132 10.816 13.8994 11.2014C12.8716 11.9723 12.3577 13.1285 12.3577 14.2848C12.3577 14.6701 12.6146 14.9271 13.0001 14.9271C13.3854 14.9271 13.6424 14.6702 13.5139 14.2848C13.5139 13.5139 14.0278 12.7431 14.6701 12.2292C15.5694 11.4584 15.9548 10.4306 15.6979 9.40283C15.4409 8.2466 14.5417 7.47576 13.5139 7.21883Z"
                                  fill="#4A4A4A"
                                />
                                <path
                                  d="M12.4861 17.625C12.3577 17.7535 12.3577 18.0104 12.3577 18.1388C12.3577 18.2673 12.3577 18.3958 12.4861 18.5242C12.6146 18.6527 12.8715 18.7812 13 18.7812C13.1284 18.7812 13.3854 18.6527 13.3854 18.5242C13.5138 18.5242 13.6423 18.2673 13.6423 18.1388C13.6423 17.8819 13.5138 17.7535 13.3854 17.625C13.1284 17.368 12.7431 17.368 12.4861 17.625Z"
                                  fill="#4A4A4A"
                                />
                                <path
                                  d="M13 2.07996C6.96183 2.07996 2.07999 6.9618 2.07999 13C2.07999 19.0381 6.96183 23.92 13 23.92C19.0381 23.92 23.92 19.0381 23.92 13C23.92 6.9618 19.0381 2.07996 13 2.07996ZM13 22.6353C7.73268 22.6353 3.36468 18.2673 3.36468 13C3.36468 7.73265 7.73268 3.36465 13 3.36465C18.2673 3.36465 22.6353 7.73265 22.6353 13C22.6353 18.2673 18.2673 22.6353 13 22.6353Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_110">
                                  <rect width="26" height="26" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={`text-[20px] ${
                                isfaqActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }`}
                            >
                              FAQs
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/contact">
                          <div className="flex items-center gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="17"
                              viewBox="0 0 22 17"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_217)">
                                <path
                                  d="M19.602 15.9581H1.71875C0.771375 15.9581 0 15.164 0 14.1872V2.11226C0 1.13547 0.771375 0.341431 1.71875 0.341431H19.602C20.5494 0.341431 21.3207 1.13547 21.3207 2.11226V14.1872C21.3207 15.164 20.5494 15.9581 19.602 15.9581ZM1.71875 1.04976C1.15019 1.04976 0.6875 1.52647 0.6875 2.11226V14.1872C0.6875 14.773 1.15019 15.2497 1.71875 15.2497H19.602C20.1706 15.2497 20.6332 14.773 20.6332 14.1872V2.11226C20.6332 1.52647 20.1706 1.04976 19.602 1.04976H1.71875ZM17.2624 12.4029C17.1779 12.4029 17.0933 12.3711 17.0273 12.3066L13.0714 8.48301C12.9333 8.34985 12.9264 8.12531 13.0563 7.98293C13.1863 7.83914 13.4028 7.83276 13.5424 7.96735L17.4983 11.7909C17.6364 11.9241 17.6433 12.1486 17.5134 12.291C17.4453 12.3654 17.3546 12.4029 17.2624 12.4029ZM4.05763 12.4029C3.96619 12.4029 3.87475 12.3654 3.80669 12.291C3.67675 12.1486 3.68362 11.9241 3.82181 11.7909L7.77906 7.96735C7.91794 7.83418 8.13588 7.83985 8.26513 7.98293C8.39506 8.12531 8.38819 8.34985 8.25 8.48301L4.29275 12.3066C4.22675 12.3711 4.14219 12.4029 4.05763 12.4029ZM10.6604 9.92943C10.2032 9.92943 9.746 9.77289 9.39812 9.46051L0.570625 1.52647C0.427625 1.39826 0.4125 1.17443 0.536938 1.02639C0.66275 0.879056 0.879313 0.865597 1.02231 0.992389L9.84981 8.92572C10.2891 9.32026 11.0316 9.32026 11.4703 8.92572L20.2867 1.00514C20.4291 0.876931 20.6456 0.891097 20.7721 1.03914C20.8966 1.18718 20.8821 1.41031 20.7391 1.53922L11.9226 9.45981C11.5741 9.77289 11.1176 9.92943 10.6604 9.92943Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_217">
                                  <rect width="22" height="17" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={`text-[20px] ${
                                isContactActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }`}
                            >
                              Contact Us
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full  mt-6 rounded-md bg-white text-[20px] font-[400]  ">
                    <div className="bg-[#012B6D] text-white w-full py-2 rounded-t-md text-center">
                      <p>Legal Info</p>
                    </div>

                    <div className="w-full border border-[#ADADAD] rounded-b-md py-4 px-6">
                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/privacy-policy/privacy">
                          <div className="flex items-center gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="20"
                              viewBox="0 0 17 20"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_227)">
                                <path
                                  d="M2.22376 7.44926V5.37037C2.22376 2.40926 4.88414 0 8.15383 0C11.4235 0 14.0839 2.40926 14.0839 5.37037V7.44926C15.3444 7.6663 16.3077 8.76407 16.3077 10.0852V17.323C16.3077 18.7989 15.1057 20 13.6284 20H2.67927C1.20194 20 -1.33514e-05 18.7989 -1.33514e-05 17.3226V10.0848C-1.33514e-05 8.76407 0.963252 7.6663 2.22376 7.44926ZM13.3426 5.37037C13.3426 2.81741 11.0151 0.740741 8.15383 0.740741C5.29257 0.740741 2.96502 2.81741 2.96502 5.37037V7.40741H13.3426V5.37037ZM0.741244 17.3226C0.741244 18.3904 1.61074 19.2593 2.67927 19.2593H13.6284C14.6969 19.2593 15.5664 18.3904 15.5664 17.3226V10.0848C15.5664 9.01704 14.6969 8.14815 13.6284 8.14815H2.67927C1.61074 8.14815 0.741244 9.01704 0.741244 10.0848V17.3226Z"
                                  fill="#4A4A4A"
                                />
                                <path
                                  d="M7.99999 10.4615C8.84845 10.4615 9.53845 11.1318 9.53845 11.9561V14.1978C9.53845 15.022 8.84845 15.6923 7.99999 15.6923C7.15153 15.6923 6.46153 15.022 6.46153 14.1978V11.9561C6.46153 11.1318 7.15153 10.4615 7.99999 10.4615ZM7.23076 14.1978C7.23076 14.6099 7.57576 14.9451 7.99999 14.9451C8.42422 14.9451 8.76922 14.6099 8.76922 14.1978V11.9561C8.76922 11.5439 8.42422 11.2088 7.99999 11.2088C7.57576 11.2088 7.23076 11.5439 7.23076 11.9561V14.1978Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_227">
                                  <rect width="17" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={`text-[20px] ${
                                isPrivacyActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }`}
                            >
                              Privacy Policy
                            </p>
                          </div>
                        </Link>
                      </div>

                      <div className="flex mt-2 flex-col gap-5 justify-start items-start">
                        <Link to="/dashboard/terms-service/terms">
                          <div className="flex items-center gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="20"
                              viewBox="0 0 17 20"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1101_238)">
                                <path
                                  d="M2.22376 7.44926V5.37037C2.22376 2.40926 4.88414 0 8.15383 0C11.4235 0 14.0839 2.40926 14.0839 5.37037V7.44926C15.3444 7.6663 16.3077 8.76407 16.3077 10.0852V17.323C16.3077 18.7989 15.1057 20 13.6284 20H2.67927C1.20194 20 -1.33514e-05 18.7989 -1.33514e-05 17.3226V10.0848C-1.33514e-05 8.76407 0.963252 7.6663 2.22376 7.44926ZM13.3426 5.37037C13.3426 2.81741 11.0151 0.740741 8.15383 0.740741C5.29257 0.740741 2.96502 2.81741 2.96502 5.37037V7.40741H13.3426V5.37037ZM0.741244 17.3226C0.741244 18.3904 1.61074 19.2593 2.67927 19.2593H13.6284C14.6969 19.2593 15.5664 18.3904 15.5664 17.3226V10.0848C15.5664 9.01704 14.6969 8.14815 13.6284 8.14815H2.67927C1.61074 8.14815 0.741244 9.01704 0.741244 10.0848V17.3226Z"
                                  fill="#4A4A4A"
                                />
                                <path
                                  d="M7.99999 10.4615C8.84845 10.4615 9.53845 11.1318 9.53845 11.9561V14.1978C9.53845 15.022 8.84845 15.6923 7.99999 15.6923C7.15153 15.6923 6.46153 15.022 6.46153 14.1978V11.9561C6.46153 11.1318 7.15153 10.4615 7.99999 10.4615ZM7.23076 14.1978C7.23076 14.6099 7.57576 14.9451 7.99999 14.9451C8.42422 14.9451 8.76922 14.6099 8.76922 14.1978V11.9561C8.76922 11.5439 8.42422 11.2088 7.99999 11.2088C7.57576 11.2088 7.23076 11.5439 7.23076 11.9561V14.1978Z"
                                  fill="#4A4A4A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1101_238">
                                  <rect width="17" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              className={`text-[20px] ${
                                isTermsActive
                                  ? "text-[#012B6D] font-[700]"
                                  : "inactive-link"
                              }`}
                            >
                              Terms of Service
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default DashNav;
