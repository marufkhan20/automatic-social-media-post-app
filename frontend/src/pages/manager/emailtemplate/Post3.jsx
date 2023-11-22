import React from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { AiOutlinePlus } from "react-icons/ai";
import { Dropdown } from "antd";
import ManagerLayout from "../../../components/layout/ManagerLayout";

const Post3 = () => {
    const items = [
        {
            key: '1',
            label: 'Edit',
        },
        {
            key: '2',
            label: 'Duplicate',
        },
        {
            key: '3',
            label: 'Review Post',
        },
        {
            key: '4',
            label: 'Delete',
        },
        {
            key: '5',
            label: 'Add comment to post',
        },

    ];
    return (
        <ManagerLayout>
            <div className="flex flex-col gap-y-10 items-start justify-start w-full">
                <div
                    className="flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md  px-5 md:px-10 py-6"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="25"
                viewBox="0 0 22 17"
                fill="none"
              >
                <g clip-path="url(#clip0_1101_177)">
                  <path
                    d="M19.602 15.9581H1.71875C0.771375 15.9581 0 15.164 0 14.1872V2.11226C0 1.13547 0.771375 0.341431 1.71875 0.341431H19.602C20.5494 0.341431 21.3207 1.13547 21.3207 2.11226V14.1872C21.3207 15.164 20.5494 15.9581 19.602 15.9581ZM1.71875 1.04976C1.15019 1.04976 0.6875 1.52647 0.6875 2.11226V14.1872C0.6875 14.773 1.15019 15.2497 1.71875 15.2497H19.602C20.1706 15.2497 20.6332 14.773 20.6332 14.1872V2.11226C20.6332 1.52647 20.1706 1.04976 19.602 1.04976H1.71875ZM17.2624 12.4029C17.1779 12.4029 17.0933 12.3711 17.0273 12.3066L13.0714 8.48301C12.9333 8.34985 12.9264 8.12531 13.0563 7.98293C13.1863 7.83914 13.4028 7.83276 13.5424 7.96735L17.4983 11.7909C17.6364 11.9241 17.6433 12.1486 17.5134 12.291C17.4453 12.3654 17.3546 12.4029 17.2624 12.4029ZM4.05763 12.4029C3.96619 12.4029 3.87475 12.3654 3.80669 12.291C3.67675 12.1486 3.68362 11.9241 3.82181 11.7909L7.77906 7.96735C7.91794 7.83418 8.13588 7.83985 8.26513 7.98293C8.39506 8.12531 8.38819 8.34985 8.25 8.48301L4.29275 12.3066C4.22675 12.3711 4.14219 12.4029 4.05763 12.4029ZM10.6604 9.92943C10.2032 9.92943 9.746 9.77289 9.39812 9.46051L0.570625 1.52647C0.427625 1.39826 0.4125 1.17443 0.536938 1.02639C0.66275 0.879056 0.879313 0.865597 1.02231 0.992389L9.84981 8.92572C10.2891 9.32026 11.0316 9.32026 11.4703 8.92572L20.2867 1.00514C20.4291 0.876931 20.6456 0.891097 20.7721 1.03914C20.8966 1.18718 20.8821 1.41031 20.7391 1.53922L11.9226 9.45981C11.5741 9.77289 11.1176 9.92943 10.6604 9.92943Z"
                    fill="#4A4A4A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1101_177">
                    <rect width="22" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
                            <p className="text-[25px] font-[500]">1st Party Template</p>
                        </div>
                        <div className="">
                            <button className=" hover:bg-[#F63131] text-[#F63131] hover:text-white ease-in duration-300 transition-all  rounded-md px-5 h-[33px]">
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full mt-5 md:justify-between items-center ">
                        <div>
                            <button className="px-5 h-[35px] hover:border-[#FF5FC0] border border-transparent transition-all ease-in duration-300 hover:text-[#FF5FC0] hover:bg-[white] bg-[#FF5FC0] rounded-md text-[white] font-[500] ">
                                New Post
                            </button>
                        </div>
                        <div className="border flex flex-col mt-5 md:mt-0 md:flex-row rounded-md px-2 border-[#4A4A4A]">
                            <button className="md:border-r px-4 py-2 border-[#4A4A4A] text-[#4A4A4A]">
                                Share
                            </button>

                            <button className="border-t md:border-t-0 md:border-r px-4 py-2 border-[#4A4A4A] text-[#4A4A4A]">
                                Import Post
                            </button>

                            <button className="px-4 border-t md:border-t-0  md:border-r py-2 border-[#4A4A4A] text-[#4A4A4A]">
                                Move to Folder
                            </button>

                            <button className="px-4 py-2 border-t  md:border-none border-[#4A4A4A] text-[#4A4A4A]">
                                Duplicate
                            </button>
                        </div>
                    </div>

                    <div
                        className="mt-4 p-4 rounded-[9px] flex justify-between items-center w-full"
                        style={{ background: "rgba(173, 173, 173, 0.06)" }}
                    >
                        <div className="flex items-start gap-5">
                            <div className="bg-[#D9D9D9] w-[58px] h-[58px] flex justify-center items-center">
                                <p className="text-white text-[13px]">[image]</p>
                            </div>
                            <p className="text-[13px] font-[700]">Post 1</p>
                        </div>

                        <div>
                            <div>

                                <Dropdown
                                    menu={{
                                        items,
                                        selectable: false,
                                        defaultSelectedKeys: null,
                                    }}

                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="23"
                                        height="16"
                                        viewBox="0 0 23 16"
                                        fill="none"
                                    >
                                        <line y1="1" x2="23" y2="1" stroke="black" stroke-width="2" />
                                        <line y1="8" x2="23" y2="8" stroke="black" stroke-width="2" />
                                        <line y1="15" x2="23" y2="15" stroke="black" stroke-width="2" />
                                    </svg>
                                </Dropdown>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </ManagerLayout>
    );
};

export default Post3;
