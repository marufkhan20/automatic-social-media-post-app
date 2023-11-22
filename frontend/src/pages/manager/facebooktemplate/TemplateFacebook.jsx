import React, { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import { DatePicker } from 'antd';
import ManagerLayout from "../../../components/layout/ManagerLayout";



function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}


const TemplateFacebookManager = () => {
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
    <ManagerLayout>
      <div className="flex flex-col gap-y-10 items-start justify-start">
        <div
          className="flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md  px-5 md:px-10 py-6"
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
          className="flex flex-col justify-start  items-start gap-3 w-full bg-white rounded-md  px-5 md:px-10 py-6"
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
              <p className="text-[25px] font-[500]">Facebook Templates</p>
            </div>
            <div className="">
              <p className="text-[18px] font-[400]">2 Templates</p>
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
          {data.map((item, i) => (
            <Link
              to={"/manager/facebooktemplate/post"}
              key={i}
              className="border border-[#ADADAD] w-full p-3 mt-6"
            >
              <div className="flex flex-col gap-3 ">
                <div
                  className="w-[36px] h-[21px] flex items-center justify-center text-white rounded-full bg-[#012B6D]
                            "
                >
                  {item.no}
                </div>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
          <div className='flex items-center gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clip-path="url(#clip0_1301_25)">
                <path d="M0 26.8041C0 28.549 1.42041 29.9633 3.15918 29.9633H26.8041C28.549 29.9633 29.9633 28.5429 29.9633 26.8041V3.15918C29.9633 1.41429 28.5429 0 26.8041 0H3.15918C1.41429 0 0 1.42041 0 3.15918V26.8041ZM26.8041 28.4633H3.15918C2.24694 28.4633 1.5 27.7163 1.5 26.8041V22.8551L7.18163 17.1735L12.0367 22.0286C12.3306 22.3224 12.802 22.3224 13.0959 22.0286L21.8633 13.2612L28.4633 19.8612V26.8041C28.4633 27.7163 27.7163 28.4633 26.8041 28.4633ZM3.15918 1.5H26.8041C27.7163 1.5 28.4633 2.24694 28.4633 3.15918V17.7367L22.3898 11.6694C22.0959 11.3755 21.6245 11.3755 21.3306 11.6694L12.5633 20.4367L7.70816 15.5816C7.41429 15.2878 6.94286 15.2878 6.64898 15.5816L1.5 20.7306V3.15918C1.5 2.24694 2.24694 1.5 3.15918 1.5ZM9.28776 12.0061C11.3939 12.0061 13.102 10.2918 13.102 8.19184C13.102 6.09184 11.3878 4.37755 9.28776 4.37755C7.18776 4.37755 5.47347 6.09184 5.47347 8.19184C5.47347 10.2918 7.18163 12.0061 9.28776 12.0061ZM9.28776 5.87755C10.5673 5.87755 11.602 6.91837 11.602 8.19184C11.602 9.46531 10.5612 10.5061 9.28776 10.5061C8.01429 10.5061 6.97347 9.46531 6.97347 8.19184C6.97347 6.91837 8.00816 5.87755 9.28776 5.87755Z" fill="#4A4A4A" />
              </g>
              <defs>
                <clipPath id="clip0_1301_25">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className='text-[25px] font-[500]'>
              Your Scheduled Posts
            </p>
          </div>
          <div className='w-[296px] h-[153px] flex items-center justify-center border border-[#ADADAD]'>
            <img src="/images/meet.jpg" alt="" className='w-[270px] h-[130px] object-cover' />

          </div>
          <p className='text-[#7E97A5] pt-3'>
            Sep 6, 2023  6:00PM
          </p>
          <button onClick={showModal5} className='w-[151px] mt-5 h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0] bg-[#FF5FC0]'>
            Reschedule
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
      <Modal
        title={null}
        closable={false}
        visible={open5}
        centered
        onCancel={handleCancel5}
        width={700}
        wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
        footer={[
          <Button
            key="cancel"
            className="text-[18px] mt-32 h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
            onClick={handleOk5}
          >
            Ok
          </Button>,
          <Button
            key="cancel"
            className="text-[18px] mt-32 h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
            onClick={handleCancel5}
          >
            Cancel
          </Button>,
        ]}
      >
        <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
          <h1 className="text-[25px] text-white">Rescheduled Post</h1>
        </div>
        <div>
          <div
            className="mt-4 p-4 rounded-[9px] flex justify-between items-center w-full"
            style={{ background: "rgba(173, 173, 173, 0.06)" }}
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <div className="flex items-start gap-5">
              <img src="/images/meet.jpg" alt="" className="w-[100px] h-[100px] object-cover" />
              <p className="text-[18px] font-[700]">Post 1</p>
            </div>
          </div>

          {showCalendar && (
            <div className="mt-2 p-2 flex items-center gap-3 rounded-lg shadow-md">
              <DatePicker showTime onChange={onChange} onOk={onOk} />
              <button onClick={() => setModal2Open(false)} className='w-[151px]  h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0] bg-[#FF5FC0]'>
                Reschedule
              </button>
            </div>
          )}
        </div>
      </Modal>
    </ManagerLayout>
  );
};

export default TemplateFacebookManager;
