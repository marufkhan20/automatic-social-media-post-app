import React, { useCallback, useRef, useState } from "react";
import { Dropdown } from "antd";
import { Button, Modal } from "antd";
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { IoCloudUploadOutline } from 'react-icons/io5'
import CopyToClipboard from "react-copy-to-clipboard";
import { IoMdCopy } from "react-icons/io";
import ManagerLayout from "../../../components/layout/ManagerLayout";

const PostManager = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const showModal2 = () => {
        setOpen2(true);
    };
    const showModal3 = () => {
        setOpen3(true);
    };
    const showModal4 = () => {
        setOpen4(true);
    };
    const showModal5 = () => {
        setOpen5(true);
    };
    const showModal6 = () => {
        setOpen6(true);
    };

    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    const handleCancel3 = (e) => {
        console.log(e);
        setOpen3(false);
    };
    const handleOk3 = (e) => {
        console.log(e);
        setOpen3(false);
    };
    const handleOk2 = (e) => {
        console.log(e);
        setOpen2(false);
    };


    const handleCancel2 = (e) => {
        console.log(e);
        setOpen2(false);
    };
    const handleOk4 = (e) => {
        console.log(e);
        setOpen4(false);
    };


    const handleCancel4 = (e) => {
        console.log(e);
        setOpen4(false);
    };
    const handleOk5 = (e) => {
        console.log(e);
        setOpen5(false);
    };
    const handleOk6 = (e) => {
        console.log(e);
        setOpen6(false);
    };


    const handleCancel5 = (e) => {
        console.log(e);
        setOpen5(false);
    };
    const handleCancel6 = (e) => {
        console.log(e);
        setOpen6(false);
    };

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
    const [formData, setFormData] = useState({
        date: "",
        number: "",
        durationUnit: "days",
        time: "before",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        const inputText = e.target.value;
        const limitedText = inputText.slice(0, 75);
        setText(limitedText);
    };

    const charCount = text.length;
    const isOverLimit = charCount > 75
    const [text2, setText2] = useState('');

    const handleTextChange2 = (e) => {
        const inputText2 = e.target.value;
        const limitedText2 = inputText2.slice(0, 320);
        setText2(limitedText2);
    };

    const charCount2 = text.length;
    const isOverLimit2 = charCount2 > 320;
    const [selectedValue, setSelectedValue] = useState('before'); // Default value

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const handleItalicClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
    };

    const handleImageDelete = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };
    const fileInputRef = useRef(null);

    const handleFileReorder = (fromIndex, toIndex) => {
        const updatedFiles = [...selectedFiles];
        const [movedItem] = updatedFiles.splice(fromIndex, 1);
        updatedFiles.splice(toIndex, 0, movedItem);
        setSelectedFiles(updatedFiles);
    };
    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
    };
    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };
    const [value, setValue] = useState('HE832Kl');
    const [copied, setCopied] = useState(false);

    const handleValueChange = useCallback(({ target: { value } }) => {
        setValue(value);
        setCopied(false);
    }, []);

    const handleCopy = useCallback(() => {
        setCopied(true);
    }, []);
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedOption1, setSelectedOption1] = useState('');

    const handleOptionChange1 = (e) => {
        setSelectedOption1(e.target.value);
    };
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
                                width="31"
                                height="31"
                                viewBox="0 0 31 31"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_1601_21)">
                                    <path
                                        d="M25.0664 0H5.93359C2.66176 0 0 2.66176 0 5.93359V25.0664C0 28.3382 2.66176 31 5.93359 31H15.5C15.8344 31 16.1055 30.7289 16.1055 30.3945V25.7021C16.1055 25.3677 15.8344 25.0967 15.5 25.0967C15.1656 25.0967 14.8945 25.3677 14.8945 25.7021V29.7891H5.93359C3.32953 29.7891 1.21094 27.6705 1.21094 25.0664V5.93359C1.21094 3.32953 3.32953 1.21094 5.93359 1.21094H25.0664C27.6705 1.21094 29.7891 3.32953 29.7891 5.93359V25.0664C29.7891 27.6705 27.6705 29.7891 25.0664 29.7891H21.1914V19.1026H24.702C25.0129 19.1026 25.2733 18.8671 25.3044 18.5577L25.7398 14.2314C25.7569 14.061 25.7012 13.8915 25.5864 13.7646C25.4716 13.6377 25.3085 13.5653 25.1374 13.5653H21.1914V11.2935C21.1914 10.8823 21.3224 10.7295 21.6746 10.7295H25.1102C25.4446 10.7295 25.7156 10.4584 25.7156 10.124V5.90629C25.7156 5.57189 25.4446 5.30082 25.1102 5.30082H20.5984C18.0419 5.30082 16.6862 6.42372 15.999 7.36571C15.038 8.68309 14.8945 10.2389 14.8945 11.049V13.5924H11.9277C11.5933 13.5924 11.3222 13.8635 11.3222 14.1979V18.4971C11.3222 18.8315 11.5933 19.1025 11.9277 19.1025H14.8945V27.0281C14.8945 27.3625 15.1655 27.6336 15.4999 27.6336C15.8343 27.6336 16.1054 27.3625 16.1054 27.0281V18.4971C16.1054 18.1627 15.8343 17.8916 15.4999 17.8916H12.5331V14.8033H15.4999C15.8343 14.8033 16.1054 14.5322 16.1054 14.1978V11.049C16.1054 9.68472 16.5432 6.5117 20.5984 6.5117H24.5047V9.51845H21.6746C20.8931 9.51845 19.9805 9.98333 19.9805 11.2934V14.1707C19.9805 14.5051 20.2515 14.7762 20.5859 14.7762H24.4679L24.1544 17.8916H20.5859C20.2515 17.8916 19.9805 18.1627 19.9805 18.4971V30.3945C19.9805 30.7289 20.2515 31 20.5859 31H25.0664C28.3382 31 31 28.3382 31 25.0664V5.93359C31 2.66176 28.3382 0 25.0664 0Z"
                                        fill="#4A4A4A"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1601_21">
                                        <rect width="31" height="31" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-[25px] font-[500]">1st Party Template</p>
                        </div>
                        <div className="">
                            <button onClick={showModal6} className=" hover:bg-[#F63131] text-[#F63131] hover:text-white ease-in duration-300 transition-all  rounded-md px-5 h-[33px]">
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full mt-5 md:justify-between md:items-center ">
                        <div>
                            <button onClick={showModal2} className="px-5 h-[35px] hover:border-[#FF5FC0] border border-transparent transition-all ease-in duration-300 hover:text-[#FF5FC0] hover:bg-[white] bg-[#FF5FC0] rounded-md text-[white] font-[500] ">
                                New Post
                            </button>
                        </div>
                        <div className="border flex md:text-base text-xs mt-5 md:mt-0 flex-row rounded-md md:px-2 border-[#4A4A4A]">
                            <button onClick={showModal} className="border-r px-[5px] md:px-4 py-2 border-[#4A4A4A] text-[#4A4A4A]">
                                Share

                            </button>

                            <button onClick={showModal3} className="border-r px-[5px] md:px-4 py-2 border-[#4A4A4A] text-[#4A4A4A]">
                                Import Post
                            </button>

                            <button onClick={showModal4} className="md:px-4 px-[5px] border-r py-2 border-[#4A4A4A] text-[#4A4A4A]">
                                Move to Folder
                            </button>

                            <button onClick={showModal5} className="md:px-4 px-[5px] py-2 border-[#4A4A4A] text-[#4A4A4A]">
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
            <Modal
                title={null}
                closable={false}
                visible={open2}
                centered
                onCancel={handleCancel2}
                width={700}
                style={{ maxHeight: '90vh', overflowY: 'auto', overflowX: 'hidden', borderRadius: '6px' }}
                wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                className="scrollbar"
                footer={[
                    <Button
                        type="submit"
                        key="ok"
                        className="bg-[#012B6D] h-[48px] w-[122px] text-[18px] rounded-md text-white"
                        onClick={handleOk2}
                    >
                        Create
                    </Button>,
                    <Button
                        key="cancel"
                        className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                        onClick={handleCancel2}
                    >
                        Cancel
                    </Button>,
                ]}
            >
                <div className="bg-[#012B6D] Z-[999] w-[328px] md:w-[700px] fixed rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                    <h1 className="text-[25px] text-white">Create Post</h1>
                </div>
                <div className="overflow-y-scroll scrollbar overflow-x-hidden scroll-smooth ">
                    <form onSubmit={handleSubmit} className="md:ml-12 mt-20">
                        <div className="my-4 flex flex-col md:flex-row md:items-center gap-3">
                            <label htmlFor="date" className="block font-semibold">
                                Date:
                            </label>
                            <div className="flex flex-row gap-3 md:gap-3">
                                <input
                                    type="number"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="border p-2 focus:outline-none rounded w-full md:w-44"
                                />


                                <select
                                    id="durationUnit"
                                    name="durationUnit"
                                    value={formData.durationUnit}
                                    onChange={handleChange}
                                    className="border p-2 rounded w-full md:w-44"
                                >
                                    <option value="days">Days</option>
                                    <option value="weeks">Weeks</option>
                                    <option value="months">Months</option>
                                    <option value="years">Years</option>
                                </select>

                            </div>



                            <select
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="border p-2 rounded w-full md:w-44"
                            >
                                <option value="before">Before Starting Time</option>
                                <option value="after">After Starting Time</option>
                            </select>

                        </div>
                        <div>
                            <div className="flex md:flex-row flex-col  md:items-center gap-3">
                                <label htmlFor="time" className="block font-semibold">
                                    Time:
                                </label>
                                <select
                                    id="time"
                                    name="time"
                                    value={selectedValue}
                                    onChange={handleSelectChange}
                                    className="border p-2 rounded w-full md:w-64"
                                >
                                    <option value="before">Relative to the starting time</option>
                                    <option value="after">Exact time of day</option>
                                </select>
                            </div>


                            {selectedValue === 'before' && (
                                <div className="my-4 md:ml-[46px] flex md:flex-row flex-col md:items-center gap-3">
                                    <input
                                        type="number"
                                        id="date"
                                        name="date"
                                        className="border p-2 rounded w-full md:w-64 focus:outline-none"
                                    />

                                    <select
                                        id="durationUnit"
                                        name="durationUnit"
                                        className="border p-2 rounded w-full md:w-64"
                                    >
                                        <option value="days">Minutes</option>
                                        <option value="weeks">Hours</option>
                                    </select>

                                    <select
                                        id="time"
                                        name="time"
                                        className="border p-2 rounded w-full md:w-64"
                                    >
                                        <option value="before">Before event starts</option>
                                        <option value="after">After event starts</option>
                                    </select>
                                </div>
                            )}

                            {selectedValue === 'after' && (
                                <div className="my-4 md:ml-[46px] flex items-center gap-3">
                                    <input type="time" className="w-32 border rounded-md py-1 px-2" />
                                </div>
                            )}
                        </div>
                        <div className="my-4 flex flex-col md:flex-row md:items-center gap-3">
                            <label htmlFor="date" className="block font-semibold">
                                Title:
                            </label>
                            <input
                                value={text}
                                onChange={handleTextChange}
                                style={{ borderColor: isOverLimit ? 'red' : '' }}
                                className="border p-2 rounded w-full md:ml-1 focus:outline-none"
                            />
                            <p className="flex justify-end">
                                {charCount}
                                <span>/75</span>
                            </p>

                        </div>
                        {isOverLimit && <p style={{ color: 'red' }}>Character limit exceeded (75 characters max).</p>}                    </form>
                    <div className="flex flex-col md:flex-row items-start gap-3 w-full md:ml-12">
                        <label className="block font-semibold">
                            Post:
                        </label>
                        <div className="border rounded-md w-full md:w-[80%] md:ml-1">
                            <div className="px-2">
                                <div className="border rounded-md w-20 flex mt-2 justify-center items-center">
                                    <button onClick={handleBoldClick} className="font-bold w-full font-serif">B</button>
                                    <div className="border-l  py-4 h-full "></div>
                                    <button onClick={handleItalicClick} className="italic w-full uppercase font-serif">i</button>

                                </div>

                            </div>
                            <div className="border-b  w-full py-1"></div>
                            <div className="md:w-[100%]  h-40 px-2 py-2 z-10">
                                <Editor editorState={editorState} onChange={setEditorState} data-gramm="false" className='z-[1]' />
                            </div>
                        </div>

                    </div>
                    {/* attachemnts  */}
                    <div className="flex flex-col md:flex-row md:items-center gap-3 my-4">
                        <label htmlFor="" className="block font-semibold">
                            Attachments:
                        </label>
                        <select
                            id=""
                            name=""
                            value={selectedOption}
                            onChange={handleOptionChange}
                            className="border p-2 rounded w-full md:w-64"
                        >
                            <option value="">None</option>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                            <option value="album">Facebook Album</option>
                            <option value="link">Web Link</option>
                        </select>



                        {/* Add similar sections for video, album, and link inputs */}
                    </div>
                    <div className="w-full">
                        {selectedOption === 'image' && (
                            <div>

                                <div className=" border mt-3 p-2 rounded-md h-40 overflow-hidden">
                                    <h1 className=" font-[600]">
                                        Selected Images
                                    </h1>
                                    <div className="flex gap-3 p-3 ">
                                        {selectedFiles.map((file, index) => (
                                            <div key={index} className="relative ">
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt=""
                                                    className="w-[60px] md:w-[100px] object-cover"
                                                />
                                                <button
                                                    onClick={() => handleImageDelete(index)}
                                                    className="absolute top-0 right-0 w-5 mt-2 mr-2 flex items-center justify-center h-5 bg-red-500 text-white rounded-full hover:bg-red-600"
                                                >
                                                    &#215;
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row w-full mt-4">
                                    <div className="w-full md:w-1/2 flex flex-col">
                                        <h1 className=" font-[600]">
                                            Select images from your gallery:
                                        </h1>
                                        <div className="flex items-center gap-3 my-4">
                                            <label htmlFor="" className="block font-semibold">
                                                Image Folder:
                                            </label>
                                            <select
                                                id=""
                                                name=""

                                                className="border p-2 rounded w-40"
                                            >

                                                <option value="">Images</option>
                                                <option value="">Images from template "Sample Template"</option>
                                            </select>


                                        </div>
                                        <div className="flex items-center gap-3 my-4">
                                            <label htmlFor="" className="block font-semibold">
                                                Filter Images:
                                            </label>
                                            <input
                                                type="text"
                                                className="border p-2 focus:outline-none rounded w-40"
                                            />


                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-2 justify-center items-center w-full py-2 md:w-1/2 border-gray-300 border-2 border-dashed ">
                                        <IoCloudUploadOutline size={35} />
                                        <button
                                            onClick={handleUploadButtonClick}
                                            className="p-2 rounded bg-transparent text-gray-400 border"
                                        >
                                            Upload Image
                                        </button>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={handleFileInputChange}
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                        />
                                        <p className="text-[18px] font-[500]">
                                            Or Drag Image Here
                                        </p>
                                        <p>
                                            From your computer
                                        </p>

                                    </div>

                                </div>
                                <div className="w-full  border rounded-md p-2 flex flex-col  text-center h-40 mt-4 ">
                                    <p className="font-[500]">
                                        Image Gallery
                                    </p>

                                </div>
                            </div>
                        )}

                    </div>
                    <div className="w-full">
                        {selectedOption === 'video' && (
                            <div>

                                <div className=" border mt-3 p-2 rounded-md h-40 overflow-hidden">
                                    <h1 className=" font-[600]">
                                        Selected Videos
                                    </h1>
                                    <div className="flex gap-3 p-3 ">
                                        {selectedFiles.map((file, index) => (
                                            <div key={index} className="relative ">
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt=""
                                                    className="w-[100px] object-cover"
                                                />
                                                <button
                                                    onClick={() => handleImageDelete(index)}
                                                    className="absolute top-0 right-0 w-5 mt-2 mr-2 flex items-center justify-center h-5 bg-red-500 text-white rounded-full hover:bg-red-600"
                                                >
                                                    &#215;
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row w-full mt-4">
                                    <div className=" w-full md:w-1/2 flex flex-col">
                                        <h1 className=" font-[600]">
                                            Select videos from your gallery:
                                        </h1>
                                        <div className="flex items-center gap-3 my-4">
                                            <label htmlFor="" className="block font-semibold">
                                                Video Folder:
                                            </label>
                                            <select
                                                id=""
                                                name=""

                                                className="border p-2 rounded w-40"
                                            >

                                                <option value="">Videos</option>
                                                <option value="">Videos from template "Sample Template"</option>
                                            </select>


                                        </div>
                                        <div className="flex items-center gap-3 my-4">
                                            <label htmlFor="" className="block font-semibold">
                                                Filter Videos:
                                            </label>
                                            <input
                                                type="text"
                                                className="border p-2 focus:outline-none rounded w-40"
                                            />


                                        </div>

                                    </div>
                                    <div className=" hidden flex-col gap-2 justify-center items-center w-full md:w-1/2  border-gray-300 border-2 border-dashed ">
                                        <IoCloudUploadOutline size={35} />
                                        <button
                                            onClick={handleUploadButtonClick}
                                            className="p-2 rounded bg-transparent text-gray-400 border"
                                        >
                                            Upload Image
                                        </button>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={handleFileInputChange}
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                        />
                                        <p className="text-[18px] font-[500]">
                                            Or Drag Image Here
                                        </p>
                                        <p>
                                            From your computer
                                        </p>

                                    </div>

                                </div>
                                <div className="w-full  border rounded-md p-2 flex flex-col  text-center h-40 mt-4 ">
                                    <p className="font-[500]">
                                        Video Gallery
                                    </p>

                                </div>
                            </div>
                        )}

                    </div>
                    <div className="w-full">
                        {selectedOption === 'album' && (
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:ml-2">
                                <label htmlFor="date" className="block font-semibold">
                                    Album Link:
                                </label>
                                <input
                                    type="text"
                                    id="date"
                                    name="date"

                                    className="border p-2 focus:outline-none rounded w-full md:w-[81%] md:ml-1"
                                />
                            </div>
                        )}
                    </div>
                    <div className="w-full">
                        {selectedOption === 'link' && (
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:ml-2">
                                <label htmlFor="date" className="block font-semibold">
                                    Web Link:
                                </label>


                                <input
                                    type="text"

                                    value={text2}
                                    onChange={handleTextChange2}
                                    className="border p-2 focus:outline-none rounded w-full md:w-[82.5%] md:ml-1"
                                />




                            </div>

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
                        key="cancel"
                        className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                        onClick={handleCancel}
                    >
                        Close
                    </Button>,
                ]}
            >
                <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                    <h1 className="text-[25px] text-white">Share Template</h1>
                </div>
                <div className="flex flex-col mt-3 gap-3">
                    <p className="text-[18px]">
                        This template's share code is:
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="border border-gray-200  rounded-md flex items-center px-2">
                            <input
                                value={value}
                                onChange={handleValueChange}
                                className="focus:outline-none pl-3   border-r py-2 bg-white"
                                disabled={isDisabled}
                            />

                            <CopyToClipboard text={value} onCopy={handleCopy}   >
                                <button className=""><IoMdCopy size={20} className="pl-2 w-full" /></button>
                            </CopyToClipboard>

                        </div>
                        {copied ? <span className="bg-blue-600 text-white py-2 px-5  rounded-full">Copied.</span> : null}
                    </div>
                    <p>
                        Sharing this code with somebody will provide them with a copy of this template. If you change the template, only your copy will be affected.
                    </p>
                </div>

            </Modal>
            <Modal
                title={null}
                closable={false}
                visible={open3}
                centered
                onCancel={handleCancel}
                width={700}
                wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                footer={[

                    <Button
                        type="submit"
                        key="ok"
                        className="bg-[#012B6D] h-[40px] px-5 text-[18px] rounded-md text-white"
                        onClick={handleOk3}
                    >
                        Import Posts
                    </Button>,
                    <Button
                        key="cancel"
                        className="text-[18px] h-[40px] w-[100px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                        onClick={handleCancel3}
                    >
                        Close
                    </Button>,
                ]}
            >
                <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                    <h1 className="text-[25px] text-white">Import Posts</h1>
                </div>
                <div className="flex flex-col mt-3 gap-3">
                    <p className="text-[18px]">
                        Where do you want to import posts from?
                    </p>
                    <div>
                        <select
                            id="postSelector"
                            name="postSelector"
                            value={selectedOption1}
                            className="w-full focus:outline-none border p-2 mb-10"
                            onChange={handleOptionChange1}
                        >
                            <option value="">Select One...</option>
                            <option value="post1">Post 1</option>

                        </select>
                    </div>
                    
                </div>



            </Modal>
            <Modal
                title={null}
                closable={false}
                visible={open4}
                centered
                onCancel={handleCancel}
                width={700}
                wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                footer={[

                    <Button
                        type="submit"
                        key="ok"
                        className="bg-[#012B6D] h-[40px] px-5 text-[18px] rounded-md text-white"
                        onClick={handleOk4}
                    >
                        Move
                    </Button>,
                    <Button
                        key="cancel"
                        className="text-[18px] h-[40px] w-[100px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                        onClick={handleCancel4}
                    >
                        Close
                    </Button>,
                ]}
            >
                <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                    <h1 className="text-[25px] text-white">Move Template</h1>
                </div>
                <div className="flex flex-col mt-3 gap-3">
                    <p className="text-[18px]">
                        Move To:
                    </p>
                    <div>
                        <select
                            id="postSelector"
                            name="postSelector"

                            className="w-full focus:outline-none border p-2 mb-10"

                        >
                            <option value="">Unsorted Templates</option>
                        </select>
                    </div>

                </div>



            </Modal>
            <Modal
                title={null}
                closable={false}
                visible={open5}
                centered
                onCancel={handleCancel}
                width={700}
                wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                footer={[

                    <Button
                        type="submit"
                        key="ok"
                        className="bg-[#012B6D] h-[40px] px-5 text-[18px] rounded-md text-white"
                        onClick={handleOk5}
                    >
                        Duplicate Template
                    </Button>,
                    <Button
                        key="cancel"
                        className="text-[18px] h-[40px] w-[100px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                        onClick={handleCancel5}
                    >
                        Cancel
                    </Button>,
                ]}
            >
                <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                    <h1 className="text-[25px] text-white">Duplicate Template</h1>
                </div>
                <div className="flex flex-col mt-3 gap-3">
                    <p className="text-[18px]">
                        New Title:
                    </p>
                    <div>
                        <input type="text" value={'Post 1'} className="w-full focus:outline-none border p-2 mb-10" />
                    </div>

                </div>



            </Modal>
            <Modal
                title={null}
                closable={false}
                visible={open6}
                centered
                onCancel={handleCancel}
                width={700}
                wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                footer={[

                    <Button
                        type="submit"
                        key="ok"
                        className="bg-red-400 h-[40px] px-5 text-[18px] rounded-md text-white"
                        onClick={handleOk6}
                    >
                        Delete Template
                    </Button>,
                    <Button
                        key="cancel"
                        className="text-[18px] h-[40px] w-[100px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                        onClick={handleCancel6}
                    >
                        Cancel
                    </Button>,
                ]}
            >
                <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                    <h1 className="text-[25px] text-white">Delete Template</h1>
                </div>
                <div className="flex flex-col mt-3 gap-3">
                    <p className="text-[16px]">
                        Are you sure you want to delete this template and all its associated data?
                    </p>
                    <div className="flex flex-col md:flex-row justify-start items-center gap-3">
                        <p>
                            Template Name:
                        </p>
                        <p className="font-[600]">
                            Post 1
                        </p>

                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <label htmlFor="">I confirm that i wish to delete this template</label>
                    </div>

                </div>



            </Modal>
        </ManagerLayout >
    );
};

export default PostManager;
