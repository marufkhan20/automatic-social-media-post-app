import React, { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { GoShare } from "react-icons/go"
import { Button, Modal } from 'antd'
import { PiFolderOpen, PiFolderOpenDuotone } from 'react-icons/pi'
import { CiImageOn } from 'react-icons/ci'
import Upload2 from './Upload'

import ManagerLayout from '../../../components/layout/ManagerLayout'
const ImageGalleryManager = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

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
        setOpen4(false);
    };
    const showModal4 = () => {
        setOpen4(true);
    };

    const handleOk4 = (e) => {
        console.log(e);
        setOpen4(false);
    };

    const handleCancel4 = (e) => {
        console.log(e);
        setOpen4(false);
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
    const [name, setName] = useState("user");
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };
    const [isFolderSelectorVisible, setIsFolderSelectorVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(true);

    const handleMoveClick = () => {
        setIsFolderSelectorVisible(!isFolderSelectorVisible);
        setIsDeleteVisible(false);
    };

    const handleDeleteClick = () => {
        setIsDeleteVisible(true);
        setIsFolderSelectorVisible(false);
    };

    const handleCancelClick = () => {
        setIsDeleteVisible(true);
        setIsFolderSelectorVisible(false);
    };
    return (
        <div>
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
                            <div className="border flex items-center rounded-md text-[#4A4A4A] border-[#4A4A4A] ">
                                <button onClick={showModal3} className='border-r px-3 py-3 hover:shadow-lg transition-all ease-in duration-300'>
                                    <IoAddSharp size={20} />
                                </button>
                                <button onClick={showModal2} className='flex items-center py-3 gap-1 px-3 hover:shadow-lg transition-all ease-in duration-300'>
                                    <GoShare size={20} />
                                    <p>
                                        Import
                                    </p>
                                </button>

                            </div>
                        </div>
                        <div className='mt-5 cursor-pointer'>
                            <div className='border border-[#012B6D] rounded-md pt-4 flex flex-col justify-start'>
                                <div className='flex items-center justify-center'>
                                    <PiFolderOpen size={60} />
                                </div>
                                <div className='bg-gradient-to-t py-5 px-16 from-black/90 via-slate-400 to-white flex flex-col gap-1'>
                                    <p className='text-[18px] font-[700] text-white'>
                                        Images
                                    </p>
                                    <p className='text-[16px] font-[400] text-[white]'>
                                        0 Images
                                    </p>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md  px-5 md:px-10 py-6"
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <CiImageOn size={35} />
                                <p className="text-[25px] font-[500]">Images</p>
                            </div>

                        </div>
                        <div className=''>
                            <button onClick={showModal} className='px-6 flex mt-5 flex-row items-center gap-3 h-[39px] group rounded-md text-white font-[400] md:font-[500] hover:bg-transparent border border-transparent hover:border-[#012B6D] transition-all duration-300 ease-in hover:text-[#012B6D] bg-[#012B6D]'>
                                <GoShare size={20} className="text-white group-hover:text-[#012B6D]" />
                                Upload Images
                            </button>
                            <p className='flex mt-5 justify-center items-center rounded-md border w-[120px] h-[120px]'>
                                <img src="/images/meet.jpg" alt="" className='w-[100px] h-[100px] object-cover cursor-pointer' onClick={showModal4} />

                            </p>
                            <div>
                                {/* put images here that uploaded  */}
                            </div>


                        </div>

                    </div>
                </div>
                <Modal
                    title={null}
                    closable={false}
                    visible={open4}
                    centered
                    onCancel={handleCancel4}
                    width={700}
                    wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                    footer={
                        isFolderSelectorVisible ? (
                            [
                                <Button
                                    key="cancel"
                                    className="bg-[#012B6D] h-[48px] w-[122px] text-[18px] rounded-md text-white"
                                    onClick={handleCancelClick}
                                >
                                    Move
                                </Button>,
                                <Button
                                    key="cancel"
                                    className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                                    onClick={handleCancel4}
                                >
                                    Cancel
                                </Button>,
                            ]
                        ) :
                            (
                                [
                                    <Button
                                        key="cancel"
                                        className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                                        onClick={handleCancel4}
                                    >
                                        Cancel
                                    </Button>,

                                ]
                            )

                    }
                >
                    <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                        <h1 className="text-[25px] text-white">View Image</h1>
                    </div>
                    <div className='my-10 text-[#4A4A4A] flex flex-col justify-center items-center w-full'>
                        <div className="p-4">
                            {isEditing ? (
                                <div className="flex items-center gap-2">
                                    <p className='text-[18px] font-[600]'>
                                        Title:
                                    </p>
                                    <input
                                        type="text"
                                        className="border rounded-md focus:outline-none p-2 w-64 mr-2"
                                        value={name}
                                        onChange={handleChange}
                                    />
                                    <button
                                        className="bg-[#012B6D] text-white py-2 px-4 rounded-md"
                                        onClick={handleSaveClick}
                                    >
                                        Rename Image
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <p className="mr-2">{name}</p>
                                    <button
                                        className=" text-gray-600 hover:shadow-lg py-2 px-3 rounded-full"
                                        onClick={handleEditClick}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clip-path="url(#clip0_101_1049)">
                                                <path d="M16.5936 11.2376C16.8409 11.2376 17.0413 11.438 17.0413 11.6853V15.6611C17.0399 16.897 16.0384 17.8986 14.8025 17.9H2.23881C1.00292 17.8986 0.00139925 16.897 0 15.6611V3.99277C0.00139925 2.75688 1.00292 1.75536 2.23881 1.75396H6.21444C6.46175 1.75396 6.6622 1.95458 6.6622 2.20172C6.6622 2.44904 6.46175 2.64948 6.21444 2.64948H2.23881C1.4972 2.65036 0.896397 3.25134 0.895522 3.99277V15.661C0.896397 16.4026 1.4972 17.0036 2.23881 17.0043H14.8025C15.5441 17.0036 16.1449 16.4026 16.1458 15.661V11.6853C16.1458 11.438 16.3463 11.2376 16.5936 11.2376ZM16.864 0.601852L17.3894 1.12727C18.1751 1.9147 18.1751 3.18942 17.3894 3.97685L9.40124 11.9654C9.34649 12.0201 9.27863 12.0596 9.20412 12.0803L5.41161 13.1309C5.25612 13.174 5.08961 13.1301 4.9754 13.016C4.86136 12.9018 4.81746 12.7353 4.86066 12.5798L5.91115 8.78731C5.93179 8.7128 5.97132 8.64494 6.02606 8.59019L14.0144 0.601852C14.8013 -0.185053 16.0771 -0.185053 16.864 0.601852ZM7.00169 8.88124L9.11002 10.9897L15.648 4.45172L13.5395 2.34322L7.00169 8.88124ZM6.58052 9.72639L5.93493 12.0567L8.26504 11.4111L6.58052 9.72639ZM16.7562 3.34369C17.1926 2.90625 17.1926 2.19805 16.7562 1.76043L16.2306 1.23501C15.7936 0.797922 15.0848 0.797922 14.6477 1.23501L14.1727 1.70989L16.2814 3.81856L16.7562 3.34369Z" fill="#4A4A4A" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_101_1049">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                        <img src="/images/meet.jpg" alt="" className='w-full h-[300px] object-scale-down' />
                        <div className="flex items-center gap-6 justify-center  mt-5 ">
                            {isDeleteVisible && !isFolderSelectorVisible && (
                                <button
                                    className="flex items-center px-5 py-2 border rounded-md border-[#ADADAD] gap-1"
                                    onClick={handleMoveClick}
                                >

                                    Move to Folder
                                </button>
                            )}
                            {isFolderSelectorVisible && (
                                <div className="ml-2 flex items-center gap-3">
                                    <label htmlFor="folderSelector" className="block font-medium">
                                        Move To:
                                    </label>
                                    <select
                                        id="folderSelector"
                                        className="border rounded-md p-2 mt-1 focus:outline-none w-72 "
                                        onChange={(e) => console.log("Selected folder:", e.target.value)}
                                    >
                                        <option value="folder1">Folder 1</option>
                                        <option value="folder2">Folder 2</option>
                                        <option value="folder3">Folder 3</option>
                                    </select>

                                </div>
                            )}
                            {isDeleteVisible && !isFolderSelectorVisible && (
                                <button
                                    className="bg-[#D40101] w-[102px] rounded-md text-white py-2"
                                    onClick={handleDeleteClick}
                                >
                                    Delete
                                </button>
                            )}
                        </div>


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
                            Save
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
                        <h1 className="text-[25px] text-white">Upload Images</h1>
                    </div>
                    <div className='my-10'>
                        <Upload2 />

                    </div>

                </Modal>
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
                                        className="flex-1 px-3 bg-transparent  outline-none"
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
            </ManagerLayout>
        </div>
    )
}

export default ImageGalleryManager