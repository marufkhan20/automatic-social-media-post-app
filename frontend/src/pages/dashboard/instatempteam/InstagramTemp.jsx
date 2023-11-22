import React, { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'
import { BsImageAlt } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import { DatePicker } from 'antd';

const InstagramTemp = () => {
    const [modal2Open, setModal2Open] = useState(false);
    const [open5, setOpen5] = useState(false);

    const showModal5 = () => {
        setOpen5(true);
    };

    const handleOk5 = (e) => {
        console.log(e);
        setOpen5(false);
    };

    const handleCancel5 = (e) => {
        console.log(e);
        setOpen5(false);
    };
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const data = [
        {
            id: 1,
            no: 1,
            title: "1st Party Template",
        },
        {
            id: 2,
            no: 6,
            title: "Sample Template",
        },
    ];
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const showModal2 = () => {
        setOpen2(true);
    };
    const showModal3 = () => {
        setOpen3(true);
    };

    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    const handleOk3 = (e) => {
        console.log(e);
        setOpen3(false);
    };

    const handleCancel3 = (e) => {
        console.log(e);
        setOpen3(false);
    };
    const handleCancel2 = (e) => {
        console.log(e);
        setOpen2(false);
    };
    const [formData, setFormData] = useState({
        description: "",
        title: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div>
            <DashboardLayout>
                <div
                    className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5 md:px-10 pt-6 pb-10"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className='w-[150px] h-[150px] rounded-md flex justify-center items-center bg-gray-300'>
                                <BsImageAlt size={35} className='text-gray-400' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className="text-[25px] font-[500]">Vertex Team</p>
                                <p>
                                    We are vertex team and we are aim to developing leaders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md mt-5 px-5 md:px-10 py-6"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="33"
                            viewBox="0 0 35 33"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_1601_2)">
                                <path
                                    d="M33.9172 12.8462C33.78 12.6851 33.5797 12.5921 33.3681 12.5921H31.8658V4.42928C31.8658 3.8701 31.4146 3.4153 30.8598 3.4153H13.4098L11.9958 1.04036C11.8154 0.736398 11.4848 0.54771 11.1331 0.54771H3.28161C2.72737 0.548284 2.27613 1.00308 2.27613 1.56169V12.5916H0.723241C0.512699 12.5916 0.3124 12.6839 0.175263 12.8445C0.0375571 13.0051 -0.0238984 13.2179 0.00796739 13.4295L2.80647 32.0464C2.86166 32.4049 3.16211 32.6647 3.52117 32.6647H30.5696C30.9292 32.6647 31.2296 32.4049 31.2848 32.0447L34.0828 13.4318C34.1152 13.2213 34.0549 13.0079 33.9172 12.8462ZM3.41419 1.69532H11.0586L12.4726 4.07025C12.653 4.37422 12.9836 4.5629 13.3353 4.5629H30.7277V12.5921H30.1587V10.2981H29.5897V8.57753H29.0206V6.85697H5.12129V8.57753H4.55226V10.2981H3.98323V12.5921H3.41419V1.69532ZM5.12129 11.4451H29.0206V12.5921H5.12129V11.4451ZM5.69032 9.72456H28.4516V10.2981H5.69032V9.72456ZM27.8826 8.57753H6.25936V8.00401H27.8826V8.57753ZM30.2133 31.5182H3.87796L1.20578 13.7392H2.27613H3.98323H30.1587H31.8658H32.8861L30.2133 31.5182ZM15.3388 28.6506H27.2885V20.6214H15.3388V28.6506ZM16.4769 21.7684H26.1504V27.5036H16.4769V21.7684ZM18.184 24.0625H20.4601C20.7748 24.0625 21.0292 23.8061 21.0292 23.489C21.0292 23.1718 20.7748 22.9155 20.4601 22.9155H18.184C17.8693 22.9155 17.615 23.1718 17.615 23.489C17.615 23.8061 17.8693 24.0625 18.184 24.0625ZM22.7363 24.0625H23.3053C23.62 24.0625 23.8743 23.8061 23.8743 23.489C23.8743 23.1718 23.62 22.9155 23.3053 22.9155H22.7363C22.4216 22.9155 22.1672 23.1718 22.1672 23.489C22.1672 23.8061 22.4216 24.0625 22.7363 24.0625ZM24.4434 25.2095H18.184C17.8693 25.2095 17.615 25.4659 17.615 25.783C17.615 26.1002 17.8693 26.3566 18.184 26.3566H24.4434C24.758 26.3566 25.0124 26.1002 25.0124 25.783C25.0124 25.4659 24.758 25.2095 24.4434 25.2095Z"
                                    fill="#4A4A4A"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1601_2">
                                    <rect width="35" height="33" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-[25px] font-[500]">Folders</p>
                    </div>
                    <div className="flex md:flex-row flex-col gap-4  items-center w-full my-5">
                        <button onClick={showModal3} className="border hover:text-white ease-in duration-300 transition-all hover:bg-[#ADADAD] rounded-md border-[#ADADAD] px-5 h-[33px]">
                            <AiOutlinePlus size={20} />
                        </button>
                        <button className="border hover:text-white ease-in duration-300 transition-all hover:bg-[#ADADAD] rounded-md border-[#ADADAD] px-5 h-[33px]">
                            All Templates
                        </button>
                        <button className="border hover:text-white ease-in duration-300 transition-all hover:bg-[#ADADAD] rounded-md border-[#ADADAD] px-5 h-[33px]">
                            Unsorted Templates
                        </button>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start  items-start gap-3 w-full bg-white rounded-md mt-5  px-5 md:px-10 py-6"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <g clip-path="url(#clip0_1_6)">
                                    <path d="M20.25 0.337494H6.75002C3.20849 0.337494 0.337521 3.20847 0.337521 6.74999V20.25C0.337521 23.7915 3.20849 26.6625 6.75002 26.6625H20.25C23.7915 26.6625 26.6625 23.7915 26.6625 20.25V6.74999C26.6625 3.20847 23.7915 0.337494 20.25 0.337494ZM6.75002 1.34999H20.25C23.2324 1.34999 25.65 3.76766 25.65 6.74999V20.25C25.65 23.2323 23.2324 25.65 20.25 25.65H6.75002C3.76768 25.65 1.35002 23.2323 1.35002 20.25V6.74999C1.35002 3.76766 3.76768 1.34999 6.75002 1.34999Z" fill="#4A4A4A" />
                                    <path d="M13.5 6.24374C9.4925 6.24374 6.24377 9.49248 6.24377 13.5C6.24377 17.5075 9.4925 20.7562 13.5 20.7562C17.5075 20.7562 20.7563 17.5075 20.7563 13.5C20.7563 9.49248 17.5075 6.24374 13.5 6.24374ZM13.5 7.25624C16.9483 7.25624 19.7438 10.0517 19.7438 13.5C19.7438 16.9483 16.9483 19.7437 13.5 19.7437C10.0517 19.7437 7.25627 16.9483 7.25627 13.5C7.25627 10.0517 10.0517 7.25624 13.5 7.25624Z" fill="#4A4A4A" />
                                    <path d="M21.9375 2.86874C20.7259 2.86874 19.7438 3.85092 19.7438 5.06249C19.7438 6.27407 20.7259 7.25624 21.9375 7.25624C23.1491 7.25624 24.1313 6.27407 24.1313 5.06249C24.1313 3.85092 23.1491 2.86874 21.9375 2.86874ZM21.9375 3.88124C22.5899 3.88124 23.1188 4.41011 23.1188 5.06249C23.1188 5.71488 22.5899 6.24374 21.9375 6.24374C21.2851 6.24374 20.7563 5.71488 20.7563 5.06249C20.7563 4.41011 21.2851 3.88124 21.9375 3.88124Z" fill="#4A4A4A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_6">
                                        <rect width="27" height="27" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-[25px] font-[500]">Instagram Templates</p>
                        </div>
                        <div className="">
                            <p className="text-[18px] font-[400]">0 Templates</p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-start md:items-center gap-5 mt-5">
                        <button
                            onClick={showModal}
                            className="w-[201px] h-[35px] hover:border-[#FF5FC0] border border-transparent transition-all ease-in duration-300 hover:text-[#FF5FC0] hover:bg-[white] bg-[#FF5FC0] rounded-md text-[white] font-[500] "
                        >
                            Create New Template
                        </button>
                        <button onClick={showModal2} className="border hover:text-white ease-in duration-300 transition-all hover:bg-[#ADADAD] rounded-md border-[#ADADAD] px-5 h-[33px]">
                            Import Template
                        </button>
                    </div>

                </div>
                <Modal
                    title={null}
                    closable={false}
                    visible={open3}
                    centered
                    onCancel={handleCancel3}
                    width={700}
                    wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                    footer={[
                        <Button
                            type="submit"
                            key="ok"
                            className="bg-[#012B6D] h-[48px] w-[122px] text-[18px] rounded-md text-white"
                            onClick={handleOk3}
                        >
                            Create
                        </Button>,
                        <Button
                            key="cancel"
                            className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                            onClick={handleCancel3}
                        >
                            Cancel
                        </Button>,
                    ]}
                >
                    <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                        <h1 className="text-[25px] text-white">Create Folder</h1>
                    </div>
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex my-8 flex-col justify-center items-center gap-5 "
                        >
                            <div className="flex items-center gap-5 ml-16">
                                <label htmlFor="title" className="text-[18px] font-[700]">
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border-[#ADADAD] md:w-[500px] border py-2 px-4 focus:outline-none w-[70%]"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </div>

                        </form>
                    </div>

                </Modal>
                <Modal
                    title={null}
                    closable={false}
                    visible={open}
                    centered
                    onCancel={handleCancel}
                    width={700}
                    wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                    footer={[
                        <Button
                            type="submit"
                            key="ok"
                            className="bg-[#012B6D] h-[48px] w-[122px] text-[18px] rounded-md text-white"
                            onClick={handleOk}
                        >
                            Create
                        </Button>,
                        <Button
                            key="cancel"
                            className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>,
                    ]}
                >
                    <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                        <h1 className="text-[25px] text-white">New Template</h1>
                    </div>
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex my-8 flex-col justify-center items-center gap-5 "
                        >
                            <div className="flex items-center gap-5 ml-16">
                                <label htmlFor="title" className="text-[18px] font-[700]">
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border-[#ADADAD] md:w-[500px] border py-2 px-4 focus:outline-none w-[70%]"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex items-center gap-5">
                                <label htmlFor="description" className="text-[18px] font-[700]">
                                    Description:
                                </label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    className="border-[#ADADAD] md:w-[500px] border py-2 px-4 focus:outline-none w-[70%]"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="text-[18px] my-5">
                        A template will let you store and organize posts to be used later. You
                        can alter it any time, share it with friends, and re-use it anytime.
                    </div>
                </Modal>
                <Modal
                    title={null}
                    closable={false}
                    visible={open2}
                    centered
                    onCancel={handleCancel2}
                    width={700}
                    wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                    footer={[
                        <Button
                            key="cancel"
                            className="text-[18px] mt-32 h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                            onClick={handleCancel2}
                        >
                            Cancel
                        </Button>,
                    ]}
                >
                    <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                        <h1 className="text-[25px] text-white">Import Template</h1>
                    </div>
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex my-8 flex-col justify-start items-start gap-5 "
                        >
                            <div className="flex flex-col  gap-5 ">
                                <label htmlFor="title" className="text-[18px] font-[700]">
                                    Enter a Template Share Code Below:
                                </label>
                                <div className="border  flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="flex-1 px-3 bg-transparent text-[#777] outline-none"
                                    />
                                    <button className="bg-[#012B6D] py-3 px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M19.8226 18.98L14.9623 14.1197C16.2661 12.6208 17.0554 10.6652 17.0554 8.52772C17.0554 3.82262 13.2284 0 8.52772 0C3.82262 0 0 3.82705 0 8.52772C0 13.2284 3.82705 17.0554 8.52772 17.0554C10.6652 17.0554 12.6208 16.2661 14.1197 14.9623L18.98 19.8226C19.0953 19.9379 19.2506 20 19.4013 20C19.5521 20 19.7073 19.9424 19.8226 19.8226C20.0532 19.592 20.0532 19.2106 19.8226 18.98ZM1.1929 8.52772C1.1929 4.48337 4.48337 1.19734 8.52328 1.19734C12.5676 1.19734 15.8537 4.48781 15.8537 8.52772C15.8537 12.5676 12.5676 15.8625 8.52328 15.8625C4.48337 15.8625 1.1929 12.5721 1.1929 8.52772Z" fill="white" />
                                        </svg>
                                    </button>

                                </div>

                            </div>{" "}
                        </form>
                    </div>
                </Modal>
            </DashboardLayout >
        </div>
    )
}

export default InstagramTemp