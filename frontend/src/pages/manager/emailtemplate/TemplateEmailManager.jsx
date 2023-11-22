import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import ManagerLayout from "../../../components/layout/ManagerLayout";

const TemplateEmailManager = () => {
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
            <button
              onClick={showModal3}
              className="border hover:text-white ease-in duration-300 transition-all hover:bg-[#ADADAD] rounded-md border-[#ADADAD] px-5 h-[33px]"
            >
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
              <p className="text-[25px] font-[500]">Email Templates</p>
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
            <button
              onClick={showModal2}
              className="border hover:text-white ease-in duration-300 transition-all hover:bg-[#ADADAD] rounded-md border-[#ADADAD] px-5 h-[33px]"
            >
              Import Template
            </button>
          </div>
          {data.map((item, i) => (
            <Link
              to={"/dashboard/emailtemplate/post"}
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
        wrapClassName="custom-modal" 
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
                  className="flex-1 px-3 bg-transparent text-white outline-none"
                />
                <button className="bg-[#012B6D] py-3 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M19.8226 18.98L14.9623 14.1197C16.2661 12.6208 17.0554 10.6652 17.0554 8.52772C17.0554 3.82262 13.2284 0 8.52772 0C3.82262 0 0 3.82705 0 8.52772C0 13.2284 3.82705 17.0554 8.52772 17.0554C10.6652 17.0554 12.6208 16.2661 14.1197 14.9623L18.98 19.8226C19.0953 19.9379 19.2506 20 19.4013 20C19.5521 20 19.7073 19.9424 19.8226 19.8226C20.0532 19.592 20.0532 19.2106 19.8226 18.98ZM1.1929 8.52772C1.1929 4.48337 4.48337 1.19734 8.52328 1.19734C12.5676 1.19734 15.8537 4.48781 15.8537 8.52772C15.8537 12.5676 12.5676 15.8625 8.52328 15.8625C4.48337 15.8625 1.1929 12.5721 1.1929 8.52772Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>{" "}
          </form>
        </div>
      </Modal>
    </ManagerLayout>
  );
};

export default TemplateEmailManager;
