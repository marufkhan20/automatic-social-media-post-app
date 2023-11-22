import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { Button, Dropdown, Modal } from "antd";
import { FiMenu } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import ManagerLayout from "../../components/layout/ManagerLayout";
const PostNotificationManager = () => {
    const [isCardHidden, setCardHidden] = useState(false);
    const toggleCardVisibility = () => {
        setCardHidden(!isCardHidden);
    };
    const items = [
        {
            key: "1",
            label: "Hide Party",
            onClick: () => setCardHidden(true),

        },
        {
            key: "2",
            label: "Untrack Party",
        },
    ];
    const accordionItems = [
        {
            title: "Hidden Parties",
            content: "You have no hidden Parties.",
        },
    ];
    const [title, setTitle] = useState("");
    const [eventLink, setEventLink] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleEventLinkChange = (e) => {
        setEventLink(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Date:", date);
        console.log("Title:", title);
        console.log("Event Link:", eventLink);
    };
    const [open3, setOpen3] = useState(false);

    const showModal3 = () => {
        setOpen3(true);
    };

    const handleOk3 = (e) => {
        console.log(e);
        setOpen3(false);
    };

    const handleCancel3 = (e) => {
        console.log(e);
        setOpen3(false);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    return (
        <ManagerLayout>
            <div className="flex flex-col gap-y-10 justify-center md:justify-start items-center md:items-start w-full">
                <div
                    className="flex flex-col justify-center md:justify-start items-center md:items-start  w-full bg-white rounded-md px-5  md:px-10 py-6"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="29"
                            viewBox="0 0 41 29"
                            fill="none"
                        >
                            <path
                                d="M39.6427 14.7153C39.3734 14.164 33.612 4.5677 33.466 4.32806C32.3906 2.56445 30.5263 1.51159 28.4792 1.51159C28.1872 1.51159 27.9004 1.53396 27.6196 1.57591C27.6194 1.57537 27.6186 1.5742 27.6184 1.57389C27.1223 0.761606 26.2637 0.276581 25.3217 0.276581C23.8343 0.276581 22.6241 1.49932 22.6241 3.00232V7.76495H19.1412V3.00232C19.1412 1.4994 17.9311 0.276581 16.4437 0.276581C15.5033 0.276581 14.6463 0.759819 14.1459 1.57591C13.8652 1.53396 13.5782 1.51159 13.2861 1.51159C11.239 1.51159 9.37479 2.56453 8.29924 4.32822C8.2844 4.35253 8.23927 4.42664 7.15518 6.26303C6.96884 6.57872 7.07108 6.98731 7.38342 7.1756C7.69584 7.36382 8.10021 7.26074 8.28655 6.94498C9.17861 5.43397 9.39586 5.06764 9.42099 5.02639C10.2548 3.65909 11.6997 2.84277 13.2862 2.84277C15.7883 2.84277 17.8238 4.89962 17.8238 7.42782V13.9873C16.2456 11.3866 13.406 9.64788 10.172 9.64788C8.71144 9.64788 7.33146 10.0027 6.11168 10.6311C6.42495 10.1 6.75589 9.5389 7.08799 8.97619C7.27426 8.66043 7.17202 8.25184 6.85952 8.06362C6.54702 7.87541 6.14274 7.97872 5.95639 8.29449C4.55681 10.6663 2.35395 14.2252 2.07567 14.8128C1.51632 15.9941 1.20267 17.3162 1.20267 18.711C1.20267 23.7084 5.22631 27.7741 10.172 27.7741C15.1177 27.7741 19.1412 23.7084 19.1412 18.711V16.9425H22.6241V18.711C22.6241 23.7084 26.6478 27.7741 31.5934 27.7741C36.539 27.7741 40.5627 23.7084 40.5627 18.711C40.5627 17.2777 40.2316 15.9213 39.6427 14.7153ZM17.8238 3.69405C17.2153 2.94033 16.427 2.34081 15.5255 1.96228C15.7749 1.73624 16.0982 1.60776 16.4438 1.60776C17.2047 1.60776 17.8238 2.2333 17.8238 3.00224V3.69405ZM10.172 26.4428C5.9527 26.4428 2.52008 22.9743 2.52008 18.7109C2.52008 14.4476 5.9527 10.9791 10.172 10.9791C14.3913 10.9791 17.8238 14.4476 17.8238 18.7109C17.8238 22.9743 14.3912 26.4428 10.172 26.4428ZM19.1411 13.0556V9.09605H22.624V13.0556H19.1411ZM22.6241 15.6113H19.1412V14.3868H22.6241V15.6113ZM23.9415 3.00232C23.9415 2.23338 24.5606 1.60784 25.3216 1.60784C25.6682 1.60784 25.9926 1.73717 26.2407 1.96205C25.3389 2.34058 24.5502 2.94026 23.9415 3.69413V3.00232ZM23.9415 7.42821C23.9415 4.89993 25.9771 2.84277 28.4792 2.84277C30.0657 2.84277 31.5106 3.65917 32.3444 5.02639C32.4234 5.15604 34.0697 7.94586 35.6537 10.6311C34.4338 10.0026 33.0538 9.6478 31.5933 9.6478C28.3592 9.6478 25.5197 11.3866 23.9415 13.9872V7.42821ZM31.5934 26.4428C27.3742 26.4428 23.9416 22.9743 23.9416 18.7109C23.9416 14.4475 27.3742 10.979 31.5934 10.979C35.8127 10.979 39.2453 14.4475 39.2453 18.7109C39.2453 22.9743 35.8126 26.4428 31.5934 26.4428ZM37.3684 16.6135C37.2452 16.2677 36.8681 16.0881 36.5257 16.2124C36.1834 16.3368 36.0056 16.718 36.1287 17.0639C36.3161 17.5908 36.4112 18.145 36.4112 18.7109C36.4112 21.3953 34.25 23.5791 31.5934 23.5791C28.9368 23.5791 26.7755 21.3953 26.7755 18.7109C26.7755 16.0266 28.9368 13.8428 31.5934 13.8428C32.9266 13.8428 34.2124 14.4087 35.1212 15.3955C35.3691 15.6645 35.7858 15.6797 36.0523 15.4293C36.3186 15.1788 36.3335 14.7577 36.0857 14.4885C34.9287 13.2321 33.2912 12.5115 31.5934 12.5115C28.2103 12.5115 25.4581 15.2925 25.4581 18.7109C25.4581 22.1293 28.2103 24.9102 31.5934 24.9102C34.9764 24.9102 37.7286 22.1293 37.7286 18.7109C37.7286 17.9911 37.6074 17.2854 37.3684 16.6135ZM10.172 12.5117C6.78895 12.5117 4.03675 15.2926 4.03675 18.711C4.03675 22.1294 6.78895 24.9104 10.172 24.9104C13.555 24.9104 16.3072 22.1294 16.3072 18.711C16.3072 15.2926 13.5549 12.5117 10.172 12.5117ZM10.172 23.5791C7.51542 23.5791 5.35415 21.3954 5.35415 18.7109C5.35415 16.0266 7.51534 13.8428 10.172 13.8428C12.8286 13.8428 14.9898 16.0265 14.9898 18.7109C14.9898 21.3954 12.8285 23.5791 10.172 23.5791Z"
                                fill="#4A4A4A"
                            />
                        </svg>
                        <p className="text-[25px] font-[500]">Tracked Parties</p>
                    </div>
                    <button
                        onClick={showModal3}
                        className="px-6 flex mt-10 flex-row items-center gap-3 h-[35px] group rounded-md text-white font-[400] md:font-[500] hover:bg-transparent border border-transparent hover:border-[#012B6D] transition-all duration-300 ease-in hover:text-[#012B6D] bg-[#012B6D]"
                    >
                        <AiOutlinePlus
                            size={15}
                            className="text-white group-hover:text-[#012B6D]"
                        />
                        New Post Notfication
                    </button>
                    {isCardHidden ? (
                        <p className="py-5">
                            No Tracked Parties
                        </p>
                    ) :
                        (

                            <div>
                                <div className="mt-5  md:w-[290px] ">
                                    <Link to={"/manager/overview"}>
                                        <div className="w-[296px] h-[153px] flex items-center justify-center border border-[#ADADAD]">
                                            <img
                                                src="/images/meet.jpg"
                                                alt=""
                                                className="w-[280px] h-[140px] object-cover"
                                            />
                                        </div>
                                    </Link>
                                    <div className="flex items-center gap-4 md:gap-0 w-full justify-between ">
                                        <div>
                                            <p className="font-[400] text-[#777]">Sep 6, 2023 6:00 PM</p>
                                        </div>
                                        <div>
                                            <Dropdown
                                                menu={{
                                                    items,
                                                    selectable: true,
                                                    defaultSelectedKeys: ["3"],
                                                }}
                                            >
                                                <FiMenu size={35} />
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-between w-full mt-2 mb-7">
                                    <Link to={"/manager/overview"}>
                                        <button className="hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0]  w-[135px] h-[35px] bg-[#FF5FC0] rounded-md text-white font-[400] md:font-[500]">
                                            Open Party
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )

                    }

                </div>
                <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md  px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div className='w-full'>
                        <div className='border-none'>
                            <button
                                className="flex items-center w-full  justify-between   text-left"
                                onClick={toggleAccordion}
                            >
                                <div className='flex items-center gap-5 text-[24px] font-[500]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
                                        <g clip-path="url(#clip0_1201_32)">
                                            <path d="M26.6035 0.283527C26.799 0.0880269 27.115 0.0880269 27.3105 0.283527C27.506 0.479027 27.506 0.795527 27.3105 0.990527L4.0605 24.2405C3.963 24.338 3.835 24.387 3.707 24.387C3.579 24.387 3.451 24.338 3.3535 24.2405C3.158 24.045 3.158 23.729 3.3535 23.5335L26.6035 0.283527ZM22.9215 6.35453C23.5748 6.79286 24.1969 7.28814 24.7762 7.8311L25.1185 8.16253L29.524 12.5685L25.0025 17.09C22.232 19.8605 18.4805 21.349 14.67 21.349C13.027 21.349 11.373 21.0725 9.782 20.5025C9.522 20.409 9.387 20.123 9.48 19.863C9.573 19.603 9.8595 19.4675 10.1195 19.561C14.9321 21.2857 20.3614 20.1284 24.0521 16.6204L24.2955 16.383L28.11 12.5685L24.411 8.86953C23.783 8.24153 23.094 7.67453 22.364 7.18503C22.135 7.03103 22.0735 6.72003 22.2275 6.49103C22.381 6.26203 22.6925 6.20103 22.9215 6.35453ZM20.882 8.88603C21.626 9.99753 22.0195 11.2945 22.0195 12.637C22.0195 16.359 18.9915 19.387 15.2695 19.387C14.0065 19.387 12.774 19.036 11.7065 18.371C11.472 18.225 11.4 17.917 11.546 17.6825C11.6925 17.448 12.001 17.377 12.2345 17.522C13.144 18.088 14.193 18.387 15.2695 18.387C18.44 18.387 21.0195 15.808 21.0195 12.637C21.0195 11.493 20.6845 10.3885 20.051 9.44203C19.8975 9.21303 19.959 8.90253 20.1885 8.74853C20.417 8.59503 20.728 8.65653 20.882 8.88603ZM19.467 4.65403C19.729 4.74203 19.8695 5.02603 19.782 5.28753C19.6935 5.54903 19.41 5.68903 19.1485 5.60253C14.3398 3.98822 9.13288 5.14884 5.47591 8.62868L5.229 8.86953L1.4145 12.684L5.1135 16.383C5.4775 16.7475 5.8655 17.094 6.266 17.413C6.482 17.585 6.5175 17.8995 6.3455 18.1155C6.2465 18.2395 6.101 18.304 5.954 18.304C5.8445 18.304 5.7345 18.268 5.6425 18.195C5.32037 17.9382 5.00556 17.665 4.70355 17.3795L4.406 17.09L0 12.684L4.522 8.16203C8.459 4.22553 14.186 2.88153 19.467 4.65403ZM15.269 5.88703C16.481 5.88703 17.6695 6.21203 18.7065 6.82653C18.9445 6.96753 19.0225 7.27403 18.882 7.51153C18.741 7.74953 18.434 7.82753 18.197 7.68703C17.314 7.16353 16.302 6.88703 15.2695 6.88703C12.099 6.88703 9.5195 9.46653 9.519 12.6375C9.519 13.5255 9.716 14.3765 10.104 15.1675C10.2255 15.415 10.123 15.7145 9.875 15.8365C9.8045 15.871 9.729 15.8875 9.6555 15.8875C9.4705 15.8875 9.293 15.7845 9.206 15.6075C8.75 14.6785 8.519 13.679 8.519 12.637C8.519 8.91503 11.547 5.88703 15.269 5.88703Z" fill="#4A4A4A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1201_32">
                                                <rect width="30" height="25" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Hiddden Groups

                                </div>
                                <span
                                    className={`transform ${isOpen ? 'rotate-0' : 'rotate-180'} transition-transform`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="13"
                                        viewBox="0 0 24 13"
                                        fill="none"
                                    >
                                        <path d="M23 12L12.2157 2L1 12" stroke="black" stroke-width="2" />
                                    </svg>
                                </span>
                            </button>
                            {isOpen && (
                                <div className='pt-5'>
                                    {isCardHidden ? (
                                        <div className='bg-[#ADADAD]/10 p-3 w-full rounded-md flex items-center gap-3'>
                                            <button onClick={toggleCardVisibility} className='bg-[#012B6D] flex items-center gap-3 text-white rounded-md px-4 py-2'>
                                                <BsEyeSlash size={20} className='text-white' />
                                                Unhide
                                            </button>
                                            <p className='font-[500]'>
                                                Marketing Madness
                                            </p>
                                        </div>
                                    ) :
                                        (

                                            <p>
                                                No hidden Groups.
                                            </p>
                                        )
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title={null}
                closable={false}
                visible={open3}
                centered
                onCancel={handleCancel3}
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
                <div className="bg-[#012B6D] w-[328px] md:w-[520px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                    <h1 className="text-[25px] text-white">New Post Notification</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="py-10">
                        <div className="mb-4 flex items-center gap-2">
                            <label htmlFor="date" className="block font-medium">
                                Start Time:
                            </label>
                            <input
                                type="date"
                                id="date"
                                className="border rounded-md p-2 w-32 focus:outline-none"
                                value={date}
                                onChange={handleDateChange}
                                required
                            />
                            <input
                                type="time"
                                id="time"
                                className="border rounded-md p-2 w-32 focus:outline-none"
                                value={time}
                                onChange={handleTimeChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center gap-2 ml-9">
                            <label htmlFor="title" className="block font-medium">
                                Title:
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="border rounded-md p-2 w-64 focus:outline-none"
                                value={title}
                                onChange={handleTitleChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center gap-2">
                            <label htmlFor="eventLink" className="block font-medium">
                                Event Link:
                            </label>
                            <input
                                type="url"
                                id="eventLink"
                                className="border rounded-md p-2 w-64 focus:outline-none"
                                value={eventLink}
                                onChange={handleEventLinkChange}
                            />
                        </div>
                    </form>
                </div>
            </Modal>
        </ManagerLayout>
    );
};

export default PostNotificationManager;
