import { Button, Dropdown, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { IoMdCopy } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import Loading from "../../../components/shared/Loading";
import { useDeletePostMutation } from "../../../features/post/postApi";
import {
  useDeleteTemplateMutation,
  useDublicateTemplateMutation,
  useGetSingleTemplateQuery,
  useGetTemplateFoldersQuery,
  useMoveToTemplateFolderMutation,
} from "../../../features/template/templateApi";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";

const Post2 = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [openEdit, setOpenEdit] = useState({});

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

  const items = (id, post) => [
    {
      key: "1",
      label: "Edit",
      onClick: () => setOpenEdit(post),
    },
    // {
    //   key: "2",
    //   label: "Duplicate",
    // },
    {
      key: "3",
      label: "Review Post",
    },
    {
      key: "4",
      label: "Delete",
      onClick: () => deletePost(id),
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
  const { id, teamId } = useParams();
  const { data: template, refetch } = useGetSingleTemplateQuery(id);

  // get template folders
  const { data: templateFolders } = useGetTemplateFoldersQuery({
    type: "instagram",
    team: teamId || "not-found",
  });

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
      navigate(`/dashboard/team/${teamId}/instagram-template`);
    }
  }, [deletedTemplate, deleteTemplateLoading, navigate, teamId]);

  // delete post
  const [deletePost, { data: deletedPost, isLoading: deletePostLoading }] =
    useDeletePostMutation();

  useEffect(() => {
    if (!deletePostLoading && deletedPost?._id) {
      toast.success("Post Deleted Successfully");
      refetch();
    }
  }, [deletedPost, deletePostLoading, refetch]);
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
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <g clip-path="url(#clip0_1_6)">
                  <path
                    d="M20.25 0.337494H6.75002C3.20849 0.337494 0.337521 3.20847 0.337521 6.74999V20.25C0.337521 23.7915 3.20849 26.6625 6.75002 26.6625H20.25C23.7915 26.6625 26.6625 23.7915 26.6625 20.25V6.74999C26.6625 3.20847 23.7915 0.337494 20.25 0.337494ZM6.75002 1.34999H20.25C23.2324 1.34999 25.65 3.76766 25.65 6.74999V20.25C25.65 23.2323 23.2324 25.65 20.25 25.65H6.75002C3.76768 25.65 1.35002 23.2323 1.35002 20.25V6.74999C1.35002 3.76766 3.76768 1.34999 6.75002 1.34999Z"
                    fill="#4A4A4A"
                  ></path>
                  <path
                    d="M13.5 6.24374C9.4925 6.24374 6.24377 9.49248 6.24377 13.5C6.24377 17.5075 9.4925 20.7562 13.5 20.7562C17.5075 20.7562 20.7563 17.5075 20.7563 13.5C20.7563 9.49248 17.5075 6.24374 13.5 6.24374ZM13.5 7.25624C16.9483 7.25624 19.7438 10.0517 19.7438 13.5C19.7438 16.9483 16.9483 19.7437 13.5 19.7437C10.0517 19.7437 7.25627 16.9483 7.25627 13.5C7.25627 10.0517 10.0517 7.25624 13.5 7.25624Z"
                    fill="#4A4A4A"
                  ></path>
                  <path
                    d="M21.9375 2.86874C20.7259 2.86874 19.7438 3.85092 19.7438 5.06249C19.7438 6.27407 20.7259 7.25624 21.9375 7.25624C23.1491 7.25624 24.1313 6.27407 24.1313 5.06249C24.1313 3.85092 23.1491 2.86874 21.9375 2.86874ZM21.9375 3.88124C22.5899 3.88124 23.1188 4.41011 23.1188 5.06249C23.1188 5.71488 22.5899 6.24374 21.9375 6.24374C21.2851 6.24374 20.7563 5.71488 20.7563 5.06249C20.7563 4.41011 21.2851 3.88124 21.9375 3.88124Z"
                    fill="#4A4A4A"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_6">
                    <rect width="27" height="27" fill="white"></rect>
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

          <div className="w-full">
            {template?.posts?.map((post) => (
              <div
                className="mt-4 p-4 rounded-[9px] flex justify-between items-center w-full"
                style={{ background: "rgba(173, 173, 173, 0.06)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="bg-[#D9D9D9] w-[58px] h-[58px] flex justify-center items-center">
                    {post?.attachmentType === "image" && (
                      <img
                        src={`${process.env.REACT_APP_API_URL}${post?.attachments[0]}`}
                        alt=""
                      />
                    )}

                    {post?.attachmentType === "album" && (
                      <img src={post?.attachments[0]} alt="" />
                    )}

                    {post?.attachmentType === "link" && (
                      <img src={post?.attachments[0]} alt="" />
                    )}

                    {post?.attachmentType === "video" && (
                      <video
                        src={`${process.env.REACT_APP_API_URL}${post?.attachments[0]}`}
                      ></video>
                    )}
                  </div>
                  <div>
                    <p className="text-[13px] font-[700]">{post?.title}</p>
                    <p className="text-[13px] font-[700] mt-2">
                      {post?.description}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-sm">Schedule Date:</h3>
                  <p className="text-sm">{post?.date}</p>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-sm">Schedule Time:</h3>
                  <p className="text-sm">{post?.time}</p>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-sm">Status:</h3>
                  <p className="text-sm">
                    {post?.published ? "Published" : "Unpublished"}
                  </p>
                </div>

                <div>
                  <div>
                    <Dropdown
                      menu={{
                        items: items(post?._id, post),
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
            ))}
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
        <CreatePost refetch={refetch} handleCancel={handleCancel2} />
      </Modal>

      {/* edit post */}
      <Modal
        title={null}
        closable={false}
        visible={openEdit?._id}
        centered
        onCancel={() => setOpenEdit(false)}
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
        <EditPost
          refetch={refetch}
          handleCancel={() => setOpenEdit({})}
          data={openEdit}
        />
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

export default Post2;
