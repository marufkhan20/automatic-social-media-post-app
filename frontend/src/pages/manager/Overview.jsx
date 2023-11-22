import React, { useMemo, useRef, useState } from "react";
import DashboardLayout from '../../components/layout/DashboardLayout'
import spacetime from 'spacetime';
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import { BsCalendar4Week } from 'react-icons/bs';
import { Button, Modal, Upload, message } from "antd";
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { IoCloudUploadOutline } from 'react-icons/io5'
import { TbZoomReplace } from "react-icons/tb";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must be smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
const OverviewManager = () => {
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);


    const showModal2 = () => {
        setOpen2(true);
    };

    const handleOk2 = (e) => {
        console.log(e);
        setOpen2(false);
    };
    const handleCancel2 = (e) => {
        console.log(e);
        setOpen2(false);
    };

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
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };


    const handleImageDelete = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };
    const fileInputRef = useRef(null);

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
    };
    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };


    const [tz, setTz] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    );
    const [datetime, setDatetime] = useState(spacetime.now());
    const handleCancel3 = (e) => {
        console.log(e);
        setOpen3(false);
    };
    const handleOk3 = (e) => {
        console.log(e);
        setOpen3(false);
    };
    const showModal3 = () => {
        setOpen3(true);
    };
    useMemo(() => {
        const tzValue = tz.value ?? tz;
        setDatetime(datetime.goto(tzValue));
    }, [tz]);
    const [teamName, setTeamName] = useState("");
    const [description, setDescription] = useState("");
    const [joinCode, setJoinCode] = useState("");
    const [logo, setLogo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange2 = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const handleTeamNameChange = (e) => {
        const newName = e.target.value;
        if (newName.length <= 50) {
            setTeamName(newName);
        }
    };

    const handleDescriptionChange = (e) => {
        const newDescription = e.target.value;
        if (newDescription.length <= 800) {
            setDescription(newDescription);
        }
    };

    const handleJoinCodeChange = (e) => {
        const newJoinCode = e.target.value;
        if (newJoinCode.length <= 50) {
            setJoinCode(newJoinCode);
        }
    };

    const handleLogoChange = (e) => {
        const selectedLogo = e.target.files[0];
        setLogo(selectedLogo);
    };
    const [open, setOpen] = useState(false);



    const showModal = () => {
        setOpen(true);
    };


    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };
    
    return (

        <div>
            <DashboardLayout>
                <div className='flex flex-col gap-y-10 justify-center md:justify-start items-center md:items-start w-full'>
                    <div className='flex flex-col justify-center md:justify-start items-center md:items-start  w-full bg-white rounded-md px-5  md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <div className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="29" viewBox="0 0 41 29" fill="none">
                                <path d="M39.6427 14.7153C39.3734 14.164 33.612 4.5677 33.466 4.32806C32.3906 2.56445 30.5263 1.51159 28.4792 1.51159C28.1872 1.51159 27.9004 1.53396 27.6196 1.57591C27.6194 1.57537 27.6186 1.5742 27.6184 1.57389C27.1223 0.761606 26.2637 0.276581 25.3217 0.276581C23.8343 0.276581 22.6241 1.49932 22.6241 3.00232V7.76495H19.1412V3.00232C19.1412 1.4994 17.9311 0.276581 16.4437 0.276581C15.5033 0.276581 14.6463 0.759819 14.1459 1.57591C13.8652 1.53396 13.5782 1.51159 13.2861 1.51159C11.239 1.51159 9.37479 2.56453 8.29924 4.32822C8.2844 4.35253 8.23927 4.42664 7.15518 6.26303C6.96884 6.57872 7.07108 6.98731 7.38342 7.1756C7.69584 7.36382 8.10021 7.26074 8.28655 6.94498C9.17861 5.43397 9.39586 5.06764 9.42099 5.02639C10.2548 3.65909 11.6997 2.84277 13.2862 2.84277C15.7883 2.84277 17.8238 4.89962 17.8238 7.42782V13.9873C16.2456 11.3866 13.406 9.64788 10.172 9.64788C8.71144 9.64788 7.33146 10.0027 6.11168 10.6311C6.42495 10.1 6.75589 9.5389 7.08799 8.97619C7.27426 8.66043 7.17202 8.25184 6.85952 8.06362C6.54702 7.87541 6.14274 7.97872 5.95639 8.29449C4.55681 10.6663 2.35395 14.2252 2.07567 14.8128C1.51632 15.9941 1.20267 17.3162 1.20267 18.711C1.20267 23.7084 5.22631 27.7741 10.172 27.7741C15.1177 27.7741 19.1412 23.7084 19.1412 18.711V16.9425H22.6241V18.711C22.6241 23.7084 26.6478 27.7741 31.5934 27.7741C36.539 27.7741 40.5627 23.7084 40.5627 18.711C40.5627 17.2777 40.2316 15.9213 39.6427 14.7153ZM17.8238 3.69405C17.2153 2.94033 16.427 2.34081 15.5255 1.96228C15.7749 1.73624 16.0982 1.60776 16.4438 1.60776C17.2047 1.60776 17.8238 2.2333 17.8238 3.00224V3.69405ZM10.172 26.4428C5.9527 26.4428 2.52008 22.9743 2.52008 18.7109C2.52008 14.4476 5.9527 10.9791 10.172 10.9791C14.3913 10.9791 17.8238 14.4476 17.8238 18.7109C17.8238 22.9743 14.3912 26.4428 10.172 26.4428ZM19.1411 13.0556V9.09605H22.624V13.0556H19.1411ZM22.6241 15.6113H19.1412V14.3868H22.6241V15.6113ZM23.9415 3.00232C23.9415 2.23338 24.5606 1.60784 25.3216 1.60784C25.6682 1.60784 25.9926 1.73717 26.2407 1.96205C25.3389 2.34058 24.5502 2.94026 23.9415 3.69413V3.00232ZM23.9415 7.42821C23.9415 4.89993 25.9771 2.84277 28.4792 2.84277C30.0657 2.84277 31.5106 3.65917 32.3444 5.02639C32.4234 5.15604 34.0697 7.94586 35.6537 10.6311C34.4338 10.0026 33.0538 9.6478 31.5933 9.6478C28.3592 9.6478 25.5197 11.3866 23.9415 13.9872V7.42821ZM31.5934 26.4428C27.3742 26.4428 23.9416 22.9743 23.9416 18.7109C23.9416 14.4475 27.3742 10.979 31.5934 10.979C35.8127 10.979 39.2453 14.4475 39.2453 18.7109C39.2453 22.9743 35.8126 26.4428 31.5934 26.4428ZM37.3684 16.6135C37.2452 16.2677 36.8681 16.0881 36.5257 16.2124C36.1834 16.3368 36.0056 16.718 36.1287 17.0639C36.3161 17.5908 36.4112 18.145 36.4112 18.7109C36.4112 21.3953 34.25 23.5791 31.5934 23.5791C28.9368 23.5791 26.7755 21.3953 26.7755 18.7109C26.7755 16.0266 28.9368 13.8428 31.5934 13.8428C32.9266 13.8428 34.2124 14.4087 35.1212 15.3955C35.3691 15.6645 35.7858 15.6797 36.0523 15.4293C36.3186 15.1788 36.3335 14.7577 36.0857 14.4885C34.9287 13.2321 33.2912 12.5115 31.5934 12.5115C28.2103 12.5115 25.4581 15.2925 25.4581 18.7109C25.4581 22.1293 28.2103 24.9102 31.5934 24.9102C34.9764 24.9102 37.7286 22.1293 37.7286 18.7109C37.7286 17.9911 37.6074 17.2854 37.3684 16.6135ZM10.172 12.5117C6.78895 12.5117 4.03675 15.2926 4.03675 18.711C4.03675 22.1294 6.78895 24.9104 10.172 24.9104C13.555 24.9104 16.3072 22.1294 16.3072 18.711C16.3072 15.2926 13.5549 12.5117 10.172 12.5117ZM10.172 23.5791C7.51542 23.5791 5.35415 21.3954 5.35415 18.7109C5.35415 16.0266 7.51534 13.8428 10.172 13.8428C12.8286 13.8428 14.9898 16.0265 14.9898 18.7109C14.9898 21.3954 12.8285 23.5791 10.172 23.5791Z" fill="#4A4A4A" />
                            </svg>
                            <p className='text-[25px] font-[500]'>
                                Overview
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <div onClick={showModal} className='w-[296px] cursor-pointer h-[153px] flex items-center justify-center border border-[#ADADAD]'>
                                <img src="/images/meet.jpg" alt="" className='w-[280px] h-[140px] object-cover' />
                            </div>

                            <div>
                                <p className='font-[400] text-[#777]'>
                                    Sep 6, 2023 6:00 PM
                                </p>

                            </div>

                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <div className="my-4 flex items-center gap-3">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="timezone"
                                >
                                    Time Zone:
                                </label>
                                <div className="timezone--wrapper">
                                    <TimezoneSelect
                                        value={tz}
                                        onChange={setTz}
                                        className="focus:outline-none"

                                        timezones={{
                                            ...allTimezones,
                                            "America/Lima": "Pittsburgh",
                                            "Europe/Berlin": "Frankfurt",
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>

                        <div className='flex  items-center gap-3'>
                            <BsCalendar4Week size={27} />
                            <p className='text-[25px] font-[500]'>
                                Scheduled Post
                            </p>
                        </div>
                        <div className='flex items-center gap-3 mt-3 '>
                            <button onClick={showModal2} className="px-6 h-[35px] hover:border-[#012B6D] border border-transparent transition-all ease-in duration-300 hover:text-[#012B6D] hover:bg-[white] bg-[#012B6D] rounded-md text-[white] font-[500] ">
                                New Post
                            </button>
                            <button onClick={showModal3} className="border rounded-md px-[5px] md:px-4 h-[35px] border-[#4A4A4A] text-[#4A4A4A]">
                                Use a Template
                            </button>
                        </div>
                        <p className="pt-5 pb-3">
                            There are no scheduled posts at this time
                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <div className='flex items-center gap-3'>
                            <TbZoomReplace size={27} />
                            <p className='text-[25px] font-[500]'>
                                Text Replacements
                            </p>
                        </div>

                        <p className="pt-5 pb-3">
                            There are no text replacements at this time.
                        </p>
                    </div>
                </div>
                <Modal
                    title={null}
                    closable={false}
                    visible={open}
                    centered
                    onCancel={handleCancel}
                    width={700}
                    wrapClassName="custom-modal"
                    footer={[
                        <Button
                            type="submit"
                            key="ok"
                            className="bg-[#012B6D] h-[48px] w-[140px] text-[18px] rounded-md text-white"
                            onClick={handleOk}
                        >
                            Confirm
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
                        <h1 className="text-[25px] text-white">Edit Post Notification</h1>
                    </div>
                    <div className="w-full">
                        <form className='my-5'>
                            <div className="mb-4 flex items-center gap-2 ml-20">
                                <label htmlFor="teamName" className="block font-medium">
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    id="teamName"
                                    className="border rounded-md p-2 w-64 focus:outline-none"
                                    value={teamName}
                                    onChange={handleTeamNameChange}
                                    maxLength={75}
                                />
                                <p>
                                    ({teamName.length}/75)
                                </p>
                            </div>
                            <div className="mb-4 flex items-start gap-2 ml-10">
                                <label htmlFor="description" className="block font-medium">
                                    Event Link:
                                </label>
                                <input
                                    type="text"
                                    id="description"
                                    className="border rounded-md p-2 w-64 focus:outline-none"
                                    value={description}
                                    onChange={handleDescriptionChange}

                                />
                                <p>
                                    (optional)
                                </p>
                            </div>
                            <div className="mb-4 ml-10 flex items-center gap-2">
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
                            <div className="mb-4 flex items-center gap-2" >
                                <label htmlFor="logo" className="block font-medium w-32 ">
                                    Cover Image:
                                </label>
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader w-[250px]"
                                    showUploadList={false}
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange2}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
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
                    style={{ maxHeight: '90vh', overflowY: 'auto', overflowX: 'hidden', borderRadius: '6px' }}
                    wrapClassName="custom-modal"
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
                    visible={open3}
                    centered
                    onCancel={handleCancel3}
                    width={700}
                    wrapClassName="custom-modal"
                    footer={[

                        <Button
                            type="submit"
                            key="ok"
                            className="bg-[#012B6D] h-[40px] px-5 text-[18px] rounded-md text-white"
                            onClick={handleOk3}
                        >
                            Load Template
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
                        <h1 className="text-[25px] text-white">Use Template</h1>
                    </div>
                    <div className="flex flex-col mt-3 gap-3">
                        <p className="text-[18px]">
                            Template folders:
                        </p>
                        <div>
                            <select
                                id="postSelector"
                                name="postSelector"
                                className="w-full focus:outline-none border p-2 mb-10"
                            >
                                <option value="">Show All</option>
                            </select>
                        </div>
                        <p className="text-[18px]">
                            Select a template to import:
                        </p>
                        <div>
                            <select
                                id="postSelector"
                                name="postSelector"
                                className="w-full focus:outline-none border p-2 mb-10"
                            >
                                <option value="">Select One...</option>
                                <option value="post1">Template 1</option>

                            </select>
                        </div>

                    </div>



                </Modal>
            </DashboardLayout>
        </div>
    )
}

export default OverviewManager