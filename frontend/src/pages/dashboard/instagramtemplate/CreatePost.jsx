import { Button } from "antd";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useGetGalleriesQuery } from "../../../features/gallery/galleryApi";
import { useCreatePostMutation } from "../../../features/post/postApi";

const CreatePost = ({ handleCancel, refetch }) => {
  // create post state
  const [date, setDate] = useState("");
  const [dateFormat, setDateFormat] = useState("");
  const [startMode, setStartMode] = useState("");
  const [exactTime, setExactTime] = useState("");
  const [time, setTime] = useState("");
  const [minutes, setMinutes] = useState("");
  const [eventStartMode, setEventStartMode] = useState("");
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [album, setAlbum] = useState("");
  const [webLink, setWebLink] = useState("");
  const [filterImageFolder, setFilterImageFolder] = useState("all");
  const [filterVideoFolder, setFilterVideoFolder] = useState("all");
  const [errors, setErrors] = useState({});

  const [text, setText] = useState("");

  useEffect(() => {
    if (title) {
      setText(title);
    }
  }, [title]);

  const charCount = text.length;
  const isOverLimit = charCount > 75;
  const [selectedValue, setSelectedValue] = useState("after"); // Default value

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const handleItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleImageDelete = (image) => {
    const deletedImages = images?.filter((item) => item !== image);
    setImages(deletedImages);
  };

  const handleVideoDelete = (video) => {
    const deletedVideos = videos?.filter((item) => item !== video);
    setVideos(deletedVideos);
  };

  const fileInputRef = useRef(null);

  // capture image funciton
  const captureImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImages([...images, reader.result]);
    };
  };

  const { id, teamId } = useParams();

  // get all gallery image
  const { data: imageGalleries } = useGetGalleriesQuery({
    type: "image",
    team: teamId || "not-found",
  });
  const { data: videoGalleries } = useGetGalleriesQuery({
    type: "video",
    team: teamId || "not-found",
  });

  // create new post
  const [createPost, { data: newPost, isLoading, isError, error }] =
    useCreatePostMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && newPost?._id) {
      toast.success("Post Created Successfully");
      handleCancel();
      setErrors({});
      refetch();
    }
  }, [newPost, isLoading, isError, error, handleCancel, refetch]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const text = rawContentState.blocks.map((block) => block.text).join("\n");

    if (!date) {
      validationErrors.date = "Date is required!!";
    }

    if (!exactTime) {
      validationErrors.exactTime = "Time is required!!";
    }

    if (!title) {
      validationErrors.title = "Title is required!!";
    }

    console.log(validationErrors);
    console.log("date", date);

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    createPost({
      templateId: id,
      date,
      dateFormat,
      time: exactTime,
      title,
      description: text,
      type: "instagram",
      attachmentType: selectedOption,
      attachments:
        selectedOption === "video"
          ? videos
          : selectedOption === "image"
          ? images
          : selectedOption === "album"
          ? [album]
          : selectedOption === "link"
          ? [webLink]
          : [],
      minutes,
    });
  };
  return (
    <div>
      <div className="bg-[#012B6D] Z-[999] w-[328px] md:w-[700px] fixed rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
        <h1 className="text-[25px] text-white">Create Post</h1>
      </div>
      <div className="overflow-y-scroll scrollbar overflow-x-hidden scroll-smooth ">
        <form onSubmit={submitHandler} className="md:ml-12 mt-20">
          <div className="my-4 flex flex-col md:flex-row md:items-center gap-3">
            <label htmlFor="date" className="block font-semibold">
              Date:
            </label>
            <div className="flex flex-row gap-3 md:gap-3">
              <input
                type="text"
                id="date"
                placeholder="24-12-2023"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 focus:outline-none rounded w-full md:w-44"
              />

              <select
                id="durationUnit"
                name="durationUnit"
                className="border p-2 rounded w-full md:w-44"
                value={dateFormat}
                onChange={(e) => setDateFormat(e.target.value)}
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
              value={startMode}
              onChange={(e) => setStartMode(e.target.value)}
              className="border p-2 rounded w-full md:w-44"
            >
              <option value="before">Before Starting Time</option>
              <option value="after">After Starting Time</option>
            </select>
          </div>
          {errors?.date && (
            <p className="text-red-500 font-medium my-3">{errors?.date}</p>
          )}
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
                <option value="after">Exact time of day</option>
              </select>
            </div>

            {selectedValue === "before" && (
              <div className="my-4 md:ml-[46px] flex md:flex-row flex-col md:items-center gap-3">
                <input
                  type="number"
                  id="date"
                  name="date"
                  className="border p-2 rounded w-full md:w-64 focus:outline-none"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />

                <select
                  id="durationUnit"
                  name="durationUnit"
                  className="border p-2 rounded w-full md:w-64"
                  onChange={(e) => setMinutes(e.target.value)}
                >
                  <option value="days">Minutes</option>
                  <option value="weeks">Hours</option>
                </select>

                <select
                  id="time"
                  name="time"
                  className="border p-2 rounded w-full md:w-64"
                  value={eventStartMode}
                  onChange={(e) => setEventStartMode(e.target.value)}
                >
                  <option value="before">Before event starts</option>
                  <option value="after">After event starts</option>
                </select>
              </div>
            )}

            {selectedValue === "after" && (
              <div className="my-4 md:ml-[46px] flex items-center gap-3">
                <input
                  type="time"
                  className="w-32 border rounded-md py-1 px-2"
                  value={exactTime}
                  onChange={(e) => setExactTime(e.target.value)}
                />
              </div>
            )}
            {errors?.exactTime && (
              <p className="text-red-500 font-medium my-3">
                {errors?.exactTime}
              </p>
            )}
          </div>
          <div className="my-4 flex flex-col md:flex-row md:items-center gap-3">
            <label htmlFor="date" className="block font-semibold">
              Title:
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ borderColor: isOverLimit ? "red" : "" }}
              className="border p-2 rounded w-full md:ml-1 focus:outline-none"
            />
            <p className="flex justify-end">
              {charCount}
              <span>/75</span>
            </p>
          </div>
          {errors?.title && (
            <p className="text-red-500 font-medium my-3">{errors?.title}</p>
          )}
          {isOverLimit && (
            <p style={{ color: "red" }}>
              Character limit exceeded (75 characters max).
            </p>
          )}{" "}
        </form>
        <div className="flex flex-col md:flex-row items-start gap-3 w-full md:ml-12">
          <label className="block font-semibold">Post:</label>
          <div className="border rounded-md w-full md:w-[80%] md:ml-1">
            <div className="px-2">
              <div className="border rounded-md w-20 flex mt-2 justify-center items-center">
                <button
                  onClick={handleBoldClick}
                  className="font-bold w-full font-serif"
                >
                  B
                </button>
                <div className="border-l  py-4 h-full "></div>
                <button
                  onClick={handleItalicClick}
                  className="italic w-full uppercase font-serif"
                >
                  i
                </button>
              </div>
            </div>
            <div className="border-b  w-full py-1"></div>
            <div className="md:w-[100%]  h-40 px-2 py-2 z-10">
              <Editor
                editorState={editorState}
                onChange={setEditorState}
                data-gramm="false"
                className="z-[1]"
              />
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
            <option value="album">Instagram Album</option>
            <option value="link">Web Link</option>
          </select>

          {/* Add similar sections for video, album, and link inputs */}
        </div>
        <div className="w-full">
          {selectedOption === "image" && (
            <div>
              <div className=" border mt-3 p-2 rounded-md overflow-hidden">
                <h1 className=" font-[600]">Selected Images</h1>
                <div className="grid grid-cols-6 gap-3 p-3 ">
                  {images?.map((image, index) => (
                    <div key={index} className="relative ">
                      <img
                        src={
                          image?.includes("/storage")
                            ? `${process.env.REACT_APP_API_URL}${image}`
                            : image
                        }
                        alt=""
                        className="h-[120px] w-full object-cover"
                      />
                      <button
                        onClick={() => handleImageDelete(image)}
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
                      onChange={(e) => setFilterImageFolder(e.target.value)}
                    >
                      <option value="all">Images</option>
                      {imageGalleries?.map((gallery) => (
                        <option
                          selected={filterImageFolder === gallery?._id}
                          value={gallery?._id}
                          key={gallery?._id}
                        >
                          {gallery?.folderName}
                        </option>
                      ))}
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
                  <label
                    htmlFor="image"
                    className="p-2 rounded bg-transparent text-gray-400 border"
                  >
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="image"
                    // multiple
                    onChange={captureImage}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                  <p className="text-[18px] font-[500]">Or Drag Image Here</p>
                  <p>From your computer</p>
                </div>
              </div>
              <div className="w-full  border rounded-md p-2 flex flex-col  text-center h-40 mt-4 ">
                <p className="font-[500]">Image Gallery</p>

                <div className="grid grid-cols-4 gap-3 mt-5">
                  {imageGalleries
                    ?.filter((item) =>
                      filterImageFolder === "all"
                        ? true
                        : item?._id === filterImageFolder
                    )
                    .map((item) =>
                      item?.resources?.map((image) => (
                        <img
                          className="w-full h-[120px] cursor-pointer"
                          src={`${process.env.REACT_APP_API_URL}${image}`}
                          alt=""
                          onClick={() => setImages([...images, image])}
                        />
                      ))
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full">
          {selectedOption === "video" && (
            <div>
              <div className=" border mt-3 p-2 rounded-md overflow-hidden">
                <h1 className=" font-[600]">Selected Videos</h1>
                <div className="grid grid-cols-6 gap-3 p-3 ">
                  {videos?.map((video, index) => (
                    <div key={index} className="relative ">
                      <video
                        src={`${process.env.REACT_APP_API_URL}${video}`}
                        className="w-full h-[120px]"
                      ></video>
                      <button
                        onClick={() => handleVideoDelete(video)}
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
                      onChange={(e) => setFilterVideoFolder(e.target.value)}
                      className="border p-2 rounded w-40"
                    >
                      <option value="all">Videos</option>
                      {videoGalleries?.map((item) => (
                        <option value={item?._id} key={item?._id}>
                          {item?.folderName}
                        </option>
                      ))}
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
              </div>
              <div className="w-full  border rounded-md p-2 flex flex-col  text-center h-40 mt-4">
                <p className="font-[500]">Video Gallery</p>
                <div className="grid grid-cols-4 gap-3 mt-5">
                  {videoGalleries
                    ?.filter((item) =>
                      filterVideoFolder === "all"
                        ? true
                        : item?._id === filterVideoFolder
                    )
                    .map((item) =>
                      item?.resources?.map((video) => (
                        <video
                          key={video}
                          controls
                          className="h-[120px] w-full cursor-pointer"
                          onClick={() => setVideos([...videos, video])}
                          src={`${process.env.REACT_APP_API_URL}${video}`}
                        ></video>
                      ))
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full">
          {selectedOption === "album" && (
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:ml-2">
              <label htmlFor="date" className="block font-semibold">
                Album Link:
              </label>
              <input
                type="text"
                id="date"
                name="date"
                className="border p-2 focus:outline-none rounded w-full md:w-[81%] md:ml-1"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="w-full">
          {selectedOption === "link" && (
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:ml-2">
              <label htmlFor="date" className="block font-semibold">
                Web Link:
              </label>

              <input
                type="text"
                className="border p-2 focus:outline-none rounded w-full md:w-[82.5%] md:ml-1"
                value={webLink}
                onChange={(e) => setWebLink(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-end gap-5">
        <Button
          type="submit"
          key="ok"
          className="bg-[#012B6D] h-[48px] w-[122px] text-[18px] rounded-md text-white"
          onClick={submitHandler}
        >
          Create
        </Button>
        <Button
          key="cancel"
          className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
