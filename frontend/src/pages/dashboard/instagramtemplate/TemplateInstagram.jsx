import { Button, DatePicker, Modal } from "antd";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import { PiFolderOpen } from "react-icons/pi";
import { Link } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import Loading from "../../../components/shared/Loading";
import {
  useCreateTemplateFolderMutation,
  useCreateTemplateMutation,
  useGetTemplateFoldersQuery,
  useGetTemplatesQuery,
  useImportTemplateMutation,
} from "../../../features/template/templateApi";

function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}

const TemplateInstagram = () => {
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

  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // all necessary states
  const [filter, setFilter] = useState("all");

  // create folder and get folders
  const { data: folders, isLoading: folderLoading } =
    useGetTemplateFoldersQuery("instagram");

  const [folderTitle, setFolderTitle] = useState("");
  const [folderError, setFolderError] = useState("");

  const [createTemplateFolder, { data: folder, isLoading, isError, error }] =
    useCreateTemplateFolderMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setFolderError(data.error);
    }

    if (!isLoading && !isError && folder?._id) {
      toast.success("Template Folder Created Successfully");
      handleCancel3();
      setFolderTitle("");
      setFolderError("");
    }
  }, [folder, isLoading, isError, error]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    if (!folderTitle) {
      return setFolderError("Folder Name is required!!");
    }

    createTemplateFolder({
      title: folderTitle,
      type: "instagram",
    });
  };

  // create template and get template
  const { data: templates, isLoading: templateLoading } =
    useGetTemplatesQuery("instagram");
  console.log("templates", templates);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [templateErrors, setTemplateErrors] = useState({});

  const [createTemplate, { data: template, isLoading: templateIsLoading }] =
    useCreateTemplateMutation();

  useEffect(() => {
    if (!templateIsLoading && template?._id) {
      toast.success("Template Created Successfully");
      handleCancel();
      setTitle("");
      setDescription("");
      setTemplateErrors({});
    }
  }, [template, templateIsLoading]);

  // submit handler
  const templateSubmitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!title) {
      validationErrors.title = "Template Title is required!!";
    }

    if (!description) {
      validationErrors.description = "Template Description is required!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setTemplateErrors(validationErrors);
    }

    createTemplate({
      title,
      description,
      type: "instagram",
    });
  };

  // import template
  const [code, setCode] = useState("");
  const [importErrors, setImportErrors] = useState({});

  const [
    importTemplate,
    {
      data: importedTemplate,
      isLoading: importLoading,
      isError: importIsError,
      error: importError,
    },
  ] = useImportTemplateMutation();

  useEffect(() => {
    if (!importLoading && importIsError) {
      const { data } = importError || {};
      setImportErrors(data.error);
    }

    if (!importLoading && importedTemplate?._id) {
      toast.success("Template Import Successfully");
      handleCancel();
      setCode("");
      setImportErrors({});
      handleCancel2();
    }
  }, [importedTemplate, importLoading, importIsError, importError]);

  // submit handler
  const importTemplateSubmitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!code) {
      validationErrors.code = "Template Code is required!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setImportErrors(validationErrors);
    }

    importTemplate({ code, type: "instagram" });
  };
  return (
    <DashboardLayout>
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
            <button
              className={`border ${
                filter === "all"
                  ? "text-white bg-[#ADADAD]"
                  : "hover:text-white hover:bg-[#ADADAD]"
              } ease-in duration-300 transition-all  rounded-md border-[#ADADAD] px-5 h-[33px]`}
              onClick={() => setFilter("all")}
            >
              All Templates
            </button>
            <button className="border hover:text-white ease-in duration-300 transition-all hover:bg-[#ADADAD] rounded-md border-[#ADADAD] px-5 h-[33px]">
              Unsorted Templates
            </button>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-4 items-center">
            {folderLoading && <Loading type="secondary" />}

            {!folderLoading &&
              folders?.length > 0 &&
              folders?.map((folder) => (
                <div
                  className={`border border-[#012B6D] rounded-md pt-4 flex flex-col justify-start  cursor-pointer w-full`}
                  key={folder?._id}
                  onClick={() => setFilter(folder?._id)}
                >
                  <div className="flex items-center justify-center">
                    <PiFolderOpen size={60} />
                  </div>
                  <div
                    className={`py-5 px-5 flex flex-col gap-1 ${
                      filter === folder?._id ? "bg-[#012B6D]" : "bg-gray-500"
                    }`}
                  >
                    <p className="text-[18px] font-[700] text-white">
                      {folder?.title}
                    </p>
                    <p className="text-[16px] font-[400] text-[white]">
                      {folder?.templates?.length} Templates
                    </p>
                  </div>
                </div>
              ))}
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
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <g clip-path="url(#clip0_1_6)">
                  <path
                    d="M20.25 0.337494H6.75002C3.20849 0.337494 0.337521 3.20847 0.337521 6.74999V20.25C0.337521 23.7915 3.20849 26.6625 6.75002 26.6625H20.25C23.7915 26.6625 26.6625 23.7915 26.6625 20.25V6.74999C26.6625 3.20847 23.7915 0.337494 20.25 0.337494ZM6.75002 1.34999H20.25C23.2324 1.34999 25.65 3.76766 25.65 6.74999V20.25C25.65 23.2323 23.2324 25.65 20.25 25.65H6.75002C3.76768 25.65 1.35002 23.2323 1.35002 20.25V6.74999C1.35002 3.76766 3.76768 1.34999 6.75002 1.34999Z"
                    fill="#4A4A4A"
                  />
                  <path
                    d="M13.5 6.24374C9.4925 6.24374 6.24377 9.49248 6.24377 13.5C6.24377 17.5075 9.4925 20.7562 13.5 20.7562C17.5075 20.7562 20.7563 17.5075 20.7563 13.5C20.7563 9.49248 17.5075 6.24374 13.5 6.24374ZM13.5 7.25624C16.9483 7.25624 19.7438 10.0517 19.7438 13.5C19.7438 16.9483 16.9483 19.7437 13.5 19.7437C10.0517 19.7437 7.25627 16.9483 7.25627 13.5C7.25627 10.0517 10.0517 7.25624 13.5 7.25624Z"
                    fill="#4A4A4A"
                  />
                  <path
                    d="M21.9375 2.86874C20.7259 2.86874 19.7438 3.85092 19.7438 5.06249C19.7438 6.27407 20.7259 7.25624 21.9375 7.25624C23.1491 7.25624 24.1313 6.27407 24.1313 5.06249C24.1313 3.85092 23.1491 2.86874 21.9375 2.86874ZM21.9375 3.88124C22.5899 3.88124 23.1188 4.41011 23.1188 5.06249C23.1188 5.71488 22.5899 6.24374 21.9375 6.24374C21.2851 6.24374 20.7563 5.71488 20.7563 5.06249C20.7563 4.41011 21.2851 3.88124 21.9375 3.88124Z"
                    fill="#4A4A4A"
                  />
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
              <p className="text-[18px] font-[400]">
                {templates?.length} Templates
              </p>
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

          {templateLoading && <Loading type="secondary" />}
          {!templateLoading &&
            templates
              ?.filter((item) =>
                filter === "all" ? true : item?.folder === filter
              )
              ?.map((item, i) => (
                <Link
                  to={`/dashboard/instagramtemplate/${item?._id}`}
                  key={item?._id}
                  className="border border-[#ADADAD] w-full p-3 mt-6"
                >
                  <div className="flex flex-col gap-3 ">
                    <div
                      className="w-[36px] h-[21px] flex items-center justify-center text-white rounded-full bg-[#012B6D]
                            "
                    >
                      {i + 1}
                    </div>
                    <p>{item.title}</p>
                  </div>
                </Link>
              ))}
        </div>
        <div
          className="flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md px-5 md:px-10 py-6"
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_1301_25)">
                <path
                  d="M0 26.8041C0 28.549 1.42041 29.9633 3.15918 29.9633H26.8041C28.549 29.9633 29.9633 28.5429 29.9633 26.8041V3.15918C29.9633 1.41429 28.5429 0 26.8041 0H3.15918C1.41429 0 0 1.42041 0 3.15918V26.8041ZM26.8041 28.4633H3.15918C2.24694 28.4633 1.5 27.7163 1.5 26.8041V22.8551L7.18163 17.1735L12.0367 22.0286C12.3306 22.3224 12.802 22.3224 13.0959 22.0286L21.8633 13.2612L28.4633 19.8612V26.8041C28.4633 27.7163 27.7163 28.4633 26.8041 28.4633ZM3.15918 1.5H26.8041C27.7163 1.5 28.4633 2.24694 28.4633 3.15918V17.7367L22.3898 11.6694C22.0959 11.3755 21.6245 11.3755 21.3306 11.6694L12.5633 20.4367L7.70816 15.5816C7.41429 15.2878 6.94286 15.2878 6.64898 15.5816L1.5 20.7306V3.15918C1.5 2.24694 2.24694 1.5 3.15918 1.5ZM9.28776 12.0061C11.3939 12.0061 13.102 10.2918 13.102 8.19184C13.102 6.09184 11.3878 4.37755 9.28776 4.37755C7.18776 4.37755 5.47347 6.09184 5.47347 8.19184C5.47347 10.2918 7.18163 12.0061 9.28776 12.0061ZM9.28776 5.87755C10.5673 5.87755 11.602 6.91837 11.602 8.19184C11.602 9.46531 10.5612 10.5061 9.28776 10.5061C8.01429 10.5061 6.97347 9.46531 6.97347 8.19184C6.97347 6.91837 8.00816 5.87755 9.28776 5.87755Z"
                  fill="#4A4A4A"
                />
              </g>
              <defs>
                <clipPath id="clip0_1301_25">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[25px] font-[500]">Your Scheduled Posts</p>
          </div>
          <div className="w-[296px] h-[153px] flex items-center justify-center border border-[#ADADAD]">
            <img
              src="/images/meet.jpg"
              alt=""
              className="w-[270px] h-[130px] object-cover"
            />
          </div>
          <p className="text-[#7E97A5] pt-3">Sep 6, 2023 6:00PM</p>
          <button
            onClick={showModal5}
            className="w-[151px] mt-5 h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0] bg-[#FF5FC0]"
          >
            Reschedule
          </button>
        </div>
      </div>

      {/* create folder */}
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
            onClick={submitHandler}
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
            onSubmit={submitHandler}
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
                value={folderTitle}
                onChange={(e) => setFolderTitle(e.target.value)}
              />
            </div>
            {folderError && (
              <p className="text-red-500 font-medium mt-3">{folderError}</p>
            )}
          </form>
        </div>
      </Modal>

      {/* create template */}
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
            onClick={templateSubmitHandler}
          >
            {templateLoading ? <Loading /> : "Create"}
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
            onSubmit={templateSubmitHandler}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {templateErrors?.title && (
              <p className="text-red-500 font-medium mt-3">
                {templateErrors?.title}
              </p>
            )}
            <div className="flex items-center gap-5">
              <label htmlFor="description" className="text-[18px] font-[700]">
                Description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="border-[#ADADAD] md:w-[500px] border py-2 px-4 focus:outline-none w-[70%]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {templateErrors?.description && (
              <p className="text-red-500 font-medium mt-3">
                {templateErrors?.description}
              </p>
            )}
          </form>
        </div>
        <div className="text-[18px] my-5">
          A template will let you store and organize posts to be used later. You
          can alter it any time, share it with friends, and re-use it anytime.
        </div>
      </Modal>

      {/* import template */}
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
            onSubmit={importTemplateSubmitHandler}
            className="flex my-8 flex-col justify-start items-start gap-5 "
          >
            <div className="flex flex-col  gap-5 ">
              <label htmlFor="title" className="text-[18px] font-[700]">
                Enter a Template Share Code Below:
              </label>
              <div className="border  flex items-center">
                <input
                  type="text"
                  placeholder="Enter code..."
                  className="flex-1 px-3 bg-transparent text-[#777] outline-none"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  onClick={importTemplateSubmitHandler}
                  className="bg-[#012B6D] py-3 px-3 text-white font-semibold"
                >
                  Import
                </button>
              </div>
              {importErrors?.code && (
                <p className="text-red-500 font-medium">{importErrors?.code}</p>
              )}
            </div>
          </form>
        </div>
      </Modal>

      {/* reschedule post */}
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
              <img
                src="/images/meet.jpg"
                alt=""
                className="w-[100px] h-[100px] object-cover"
              />
              <p className="text-[18px] font-[700]">Post 1</p>
            </div>
          </div>

          {showCalendar && (
            <div className="mt-2 p-2 flex items-center gap-3 rounded-lg shadow-md">
              <DatePicker showTime onChange={onChange} onOk={onOk} />
              <button
                onClick={() => setModal2Open(false)}
                className="w-[151px]  h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0] bg-[#FF5FC0]"
              >
                Reschedule
              </button>
            </div>
          )}
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default TemplateInstagram;
