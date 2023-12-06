import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiImageOn } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import { IoAddSharp } from "react-icons/io5";
import { PiFolderOpen } from "react-icons/pi";
import { useSelector } from "react-redux";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import Loading from "../../../components/shared/Loading";
import {
  useCreateGalleryMutation,
  useGetGalleriesQuery,
} from "../../../features//gallery/galleryApi";
import { useGetManageUsersManagersQuery } from "../../../features/user/userApi";
import Upload2 from "./Upload";

const ImageGallery = () => {
  const { user: userData } = useSelector((state) => state.auth || {});
  // get active user send request
  const { data: activeUsers } = useGetManageUsersManagersQuery("active");

  const [user, setUser] = useState();

  // get all image galleries
  const {
    data: galleries,
    isLoading: loading,
    refetch,
  } = useGetGalleriesQuery({
    type: "image",
    team: "not-found",
    user: user || "not-found",
  });

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [filter, setFilter] = useState("all");
  const [viewImage, setViewImage] = useState({});

  const showModal = () => {
    setOpen(true);
  };
  const showModal3 = () => {
    setOpen3(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };

  const showModal4 = () => {
    setOpen4(true);
  };

  const handleCancel4 = (e) => {
    console.log(e);
    setOpen4(false);
  };

  const handleCancel3 = (e) => {
    setOpen3(false);
  };
  const handleCancel2 = (e) => {
    setOpen2(false);
  };

  // create folder state
  const [folderName, setFolderName] = useState("");
  const [errors, setErrors] = useState({});

  const [createGallery, { data: gallery, isLoading, isError, error }] =
    useCreateGalleryMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && gallery?._id) {
      toast.success("Folder Created Successfully");
      setFolderName("");
      setErrors({});
      handleCancel3();
    }
  }, [gallery, isLoading, isError, error]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!folderName) {
      validationErrors.folderName = "Folder Name is required!!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    createGallery({
      folderName,
      type: "image",
      user,
    });
  };

  // reject data according to user
  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [refetch, user]);
  return (
    <div>
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
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setFilter("all")}
                  className={`rounded-md border border-[#4A4A4A] flex items-center py-3 gap-1 px-3 hover:shadow-lg transition-all ease-in duration-300 ${
                    filter === "all" && "bg-[#012B6D] text-white"
                  }`}
                >
                  <p>All Images</p>
                </button>
                <div className="border flex items-center rounded-md text-[#4A4A4A] border-[#4A4A4A] ">
                  <button
                    onClick={showModal3}
                    className="border-r px-3 py-3 hover:shadow-lg transition-all ease-in duration-300"
                  >
                    <IoAddSharp size={20} />
                  </button>
                </div>
              </div>
            </div>

            {userData?.role === "manager" && (
              <div className="w-full mt-2">
                <select
                  className="appearance-none border rounded w-full py-3 px-3 bg-white leading-tight focus:outline-none focus:-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={(e) => setUser(e.target.value)}
                >
                  <option value="not-found">Select User</option>
                  {activeUsers?.map((item) => (
                    <option value={item?.user?._id}>
                      {item?.user?.firstName} {item?.user?.lastName}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mt-5 grid grid-cols-5 gap-4 items-center">
              {loading && <Loading type="secondary" />}

              {!loading &&
                galleries?.length > 0 &&
                galleries?.map((gallery) => (
                  <div
                    className={`border border-[#012B6D] rounded-md pt-4 flex flex-col justify-start  cursor-pointer w-full`}
                    key={gallery?._id}
                    onClick={() => setFilter(gallery?._id)}
                  >
                    <div className="flex items-center justify-center">
                      <PiFolderOpen size={60} />
                    </div>
                    <div
                      className={`py-5 px-5 flex flex-col gap-1 ${
                        filter === gallery?._id ? "bg-[#012B6D]" : "bg-gray-500"
                      }`}
                    >
                      <p className="text-[18px] font-[700] text-white">
                        {gallery?.folderName}
                      </p>
                      <p className="text-[16px] font-[400] text-[white]">
                        {gallery?.resources?.length} Images
                      </p>
                    </div>
                  </div>
                ))}
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
            <div className="">
              <button
                onClick={showModal}
                className="px-6 flex mt-5 flex-row items-center gap-3 h-[39px] group rounded-md text-white font-[400] md:font-[500] hover:bg-transparent border border-transparent hover:border-[#012B6D] transition-all duration-300 ease-in hover:text-[#012B6D] bg-[#012B6D]"
              >
                <GoShare
                  size={20}
                  className="text-white group-hover:text-[#012B6D]"
                />
                Upload Images
              </button>

              <div className="grid grid-cols-6 gap-5">
                {!loading &&
                  galleries?.length > 0 &&
                  galleries
                    ?.filter((item) =>
                      filter === "all" ? true : item?._id === filter
                    )
                    .map((gallery) => {
                      return gallery?.resources?.map((image) => (
                        <div
                          key={image}
                          className="flex mt-5 justify-center items-center rounded-md border w-[120px] h-[120px]"
                          onClick={() =>
                            setViewImage({
                              _id: gallery?._id,
                              image,
                            })
                          }
                        >
                          <img
                            src={`${process.env.REACT_APP_API_URL}${image}`}
                            alt=""
                            className="w-[100px] h-[100px] object-cover cursor-pointer"
                            onClick={showModal4}
                          />
                        </div>
                      ));
                    })}
              </div>
            </div>
          </div>
        </div>

        {/* upload images */}
        <Modal
          title={null}
          closable={false}
          visible={viewImage?._id}
          centered
          onCancel={handleCancel4}
          width={700}
          wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
          footer={[
            <Button
              key="cancel"
              className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
              onClick={() => setViewImage({})}
            >
              Cancel
            </Button>,
          ]}
        >
          <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
            <h1 className="text-[25px] text-white">View Image</h1>
          </div>
          <div className="my-10 text-[#4A4A4A] flex flex-col justify-center items-center w-full">
            <img
              src={`${process.env.REACT_APP_API_URL}${viewImage?.image}`}
              alt=""
              className="w-full h-[300px] object-scale-down"
            />
          </div>
        </Modal>

        <Modal
          title={null}
          closable={false}
          visible={open}
          centered
          onCancel={handleOk}
          width={700}
          wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
          footer={[]}
        >
          <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
            <h1 className="text-[25px] text-white">Upload Images</h1>
          </div>
          <div className="my-10">
            <Upload2 handleCancel={handleOk} galleries={galleries} />
          </div>
        </Modal>

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
              {isLoading ? <Loading /> : "Create"}
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
                  value={folderName}
                  onChange={(e) => setFolderName(e.target.value)}
                />
              </div>
              {errors?.folderName && (
                <p className="text-red-500 font-medium mt-3">
                  {errors?.folderName}
                </p>
              )}
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
              //   onSubmit={handleSubmit}
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
      </DashboardLayout>
    </div>
  );
};

export default ImageGallery;
