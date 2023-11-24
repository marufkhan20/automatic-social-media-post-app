import { Button, Dropdown, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { IoMdCopy } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import Loading from "../../../components/shared/Loading";
import {
  useDeleteTemplateMutation,
  useDublicateTemplateMutation,
  useGetSingleTemplateQuery,
  useGetTemplateFoldersQuery,
  useMoveToTemplateFolderMutation,
} from "../../../features/template/templateApi";
import CreatePost from "./CreatePost";

const Post = () => {
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

  const handleCancel4 = (e) => {
    console.log(e);
    setOpen4(false);
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
      key: "1",
      label: "Edit",
    },
    {
      key: "2",
      label: "Duplicate",
    },
    {
      key: "3",
      label: "Review Post",
    },
    {
      key: "4",
      label: "Delete",
    },
    {
      key: "5",
      label: "Add comment to post",
    },
  ];

  const [value, setValue] = useState("HE832Kl");
  const [copied, setCopied] = useState(false);

  const handleValueChange = useCallback(({ target: { value } }) => {
    setValue(value);
    setCopied(false);
  }, []);

  const handleCopy = useCallback(() => {
    setCopied(true);
  }, []);
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedOption1, setSelectedOption1] = useState("");

  const handleOptionChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  // get single template
  const { id } = useParams();
  const { data: template } = useGetSingleTemplateQuery(id);

  // get template folders
  const { data: templateFolders } = useGetTemplateFoldersQuery("facebook");

  // move template folder
  const [moveFolder, setMoveFolder] = useState("");
  const [moveFolderError, setMoveFolderError] = useState("");

  const [
    moveToTemplateFolder,
    { data: moveFolderData, isLoading: moveFolderLoading },
  ] = useMoveToTemplateFolderMutation();

  useEffect(() => {
    if (!moveFolderLoading && moveFolderData?._id) {
      toast.success("Template Folder Move Successfully");
      setMoveFolder("");
      setMoveFolderError("");
      handleCancel4();
    }
  }, [moveFolderData, moveFolderLoading]);

  const submitMoveFolderHandler = (e) => {
    e?.preventDefault();

    // check validation
    if (!moveFolder) {
      return setMoveFolderError("Please Select Template Folder!");
    }

    moveToTemplateFolder({
      id,
      folderId: moveFolder,
    });
  };

  // dublicate template
  const [newTitle, setNewTitle] = useState("");
  const [dublicateError, setDublicateError] = useState("");

  const [
    dublicateTemplate,
    { data: dublicateTemplateData, isLoading: dublicateTemplateLoading },
  ] = useDublicateTemplateMutation();

  useEffect(() => {
    if (!dublicateTemplateLoading && dublicateTemplateData?._id) {
      toast.success("Template Dublicate Successfully");
      setNewTitle("");
      setDublicateError("");
      handleCancel5();
    }
  }, [dublicateTemplateData, dublicateTemplateLoading]);

  const submitDublicateTemplateHandler = (e) => {
    e?.preventDefault();

    // check validation
    if (!newTitle) {
      return setDublicateError("New Template Title is required!");
    }

    dublicateTemplate({
      id,
      title: newTitle,
    });
  };

  // delete template
  const [
    deleteTemplate,
    { data: deletedTemplate, isLoading: deleteTemplateLoading },
  ] = useDeleteTemplateMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!deleteTemplateLoading && deletedTemplate?._id) {
      toast.success("Template Deleted Successfully");
      handleCancel6();
      navigate("/dashboard/facebooktemplate/facebook-template");
    }
  }, [deletedTemplate, deleteTemplateLoading, navigate]);
  return (
    <DashboardLayout>
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
              <p className="text-[25px] font-[500]">{template?.title}</p>
            </div>
            <div className="">
              <button
                onClick={showModal6}
                className=" hover:bg-[#F63131] text-[#F63131] hover:text-white ease-in duration-300 transition-all  rounded-md px-5 h-[33px]"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full mt-5 md:justify-between md:items-center ">
            <div>
              <button
                onClick={showModal2}
                className="px-5 h-[35px] hover:border-[#FF5FC0] border border-transparent transition-all ease-in duration-300 hover:text-[#FF5FC0] hover:bg-[white] bg-[#FF5FC0] rounded-md text-[white] font-[500] "
              >
                New Post
              </button>
            </div>
            <div className="border flex md:text-base text-xs mt-5 md:mt-0 flex-row rounded-md md:px-2 border-[#4A4A4A]">
              <button
                onClick={showModal}
                className="border-r px-[5px] md:px-4 py-2 border-[#4A4A4A] text-[#4A4A4A]"
              >
                Share
              </button>

              <button
                onClick={showModal3}
                className="border-r px-[5px] md:px-4 py-2 border-[#4A4A4A] text-[#4A4A4A]"
              >
                Import Post
              </button>

              <button
                onClick={showModal4}
                className="md:px-4 px-[5px] border-r py-2 border-[#4A4A4A] text-[#4A4A4A]"
              >
                Move to Folder
              </button>

              <button
                onClick={showModal5}
                className="md:px-4 px-[5px] py-2 border-[#4A4A4A] text-[#4A4A4A]"
              >
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
                    <line
                      y1="1"
                      x2="23"
                      y2="1"
                      stroke="black"
                      stroke-width="2"
                    />
                    <line
                      y1="8"
                      x2="23"
                      y2="8"
                      stroke="black"
                      stroke-width="2"
                    />
                    <line
                      y1="15"
                      x2="23"
                      y2="15"
                      stroke="black"
                      stroke-width="2"
                    />
                  </svg>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* create post */}
      <Modal
        title={null}
        closable={false}
        visible={open2}
        centered
        onCancel={handleCancel2}
        width={700}
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          overflowX: "hidden",
          borderRadius: "6px",
        }}
        wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
        className="scrollbar"
        footer={[]}
      >
        <CreatePost handleCancel={handleCancel2} />
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
          <p className="text-[18px]">This template's share code is:</p>
          <div className="flex items-center gap-3">
            <div className="border border-gray-200  rounded-md flex items-center px-2">
              <input
                value={template?.code?.toUpperCase()}
                onChange={handleValueChange}
                className="focus:outline-none pl-3   border-r py-2 bg-white"
                disabled={isDisabled}
              />

              <CopyToClipboard text={template?.code} onCopy={handleCopy}>
                <button className="">
                  <IoMdCopy size={20} className="pl-2 w-full" />
                </button>
              </CopyToClipboard>
            </div>
            {copied ? (
              <span className="bg-blue-600 text-white py-2 px-5  rounded-full">
                Copied.
              </span>
            ) : null}
          </div>
          <p>
            Sharing this code with somebody will provide them with a copy of
            this template. If you change the template, only your copy will be
            affected.
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
          <p className="text-[18px]">Where do you want to import posts from?</p>
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
            onClick={submitMoveFolderHandler}
          >
            {moveFolderLoading ? <Loading /> : "Move"}
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
          <p className="text-[18px]">Move To:</p>
          <div>
            <select
              id="postSelector"
              name="postSelector"
              className="w-full focus:outline-none border p-2 mb-10"
              onChange={(e) => setMoveFolder(e.target.value)}
            >
              <option value="">Select Folder</option>
              {templateFolders?.map((folder) => (
                <option key={folder?._id} value={folder?._id}>
                  {folder?.title}
                </option>
              ))}
            </select>
            {moveFolderError && (
              <p className="text-red-500 font-medium">{moveFolderError}</p>
            )}
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
            onClick={submitDublicateTemplateHandler}
          >
            {dublicateTemplateLoading ? <Loading /> : "Duplicate Template"}
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
          <p className="text-[18px]">New Title:</p>
          <div>
            <input
              type="text"
              className="w-full focus:outline-none border p-2 mb-10"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
        </div>
        {dublicateError && (
          <p className="text-red-500 font-medium mt-3">{dublicateError}</p>
        )}
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
            onClick={() => deleteTemplate(template?._id)}
          >
            {deleteTemplateLoading ? <Loading /> : "Delete Template"}
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
            Are you sure you want to delete this template and all its associated
            data?
          </p>
          <div className="flex flex-col md:flex-row justify-start items-center gap-3">
            <p>Template Name:</p>
            <p className="font-[600]">{template?.title}</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <label htmlFor="">
              I confirm that i wish to delete this template
            </label>
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Post;
