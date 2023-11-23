import { Button } from "antd";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../../components/shared/Loading";
import { useUploadFileMutation } from "../../../features/gallery/galleryApi";

const Upload2 = ({ galleries, handleCancel }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [galleryId, setGalleryId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const captureImage = (e) => {
    setLoading(true);

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoFile(reader.result);

      if (reader.result) {
        setLoading(false);
      }
    };
  };

  const [uploadFile, { data: gallery, isLoading, isError, error }] =
    useUploadFileMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && gallery?._id) {
      toast.success("Gallery Video Upload Successfully");
      setGalleryId("");
      setVideoFile("");
      setErrors({});
      handleCancel();
    }
  }, [gallery, isLoading, isError, error, handleCancel]);

  // submit handler
  const submitHandler = async (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!galleryId) {
      validationErrors.galleryId = "Please Select Folder!!";
    }

    if (!videoFile) {
      validationErrors.videoFile = "Video is required!!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    uploadFile({
      id: galleryId,
      data: {
        file: videoFile,
        type: "video",
      },
    });
  };
  return (
    <div className="flex flex-col justify-center gap-5 items-center">
      <div className="flex items-center gap-3">
        <label htmlFor="" className="text-[18px] font-[500]">
          Into Folder
        </label>

        <select
          id="postSelector"
          name="postSelector"
          className="focus:outline-none border p-2 w-64"
          onChange={(e) => setGalleryId(e.target.value)}
        >
          <option value="">Select Folder</option>
          {galleries?.map((gallery) => (
            <option value={gallery?._id} key={gallery?._id}>
              {gallery?.folderName}
            </option>
          ))}
        </select>
      </div>
      {errors?.galleryId && (
        <p className="text-red-500 font-medium">{errors?.galleryId}</p>
      )}

      <input
        onChange={captureImage}
        type="file"
        className="hidden"
        name="image"
        id="image"
      />

      <label
        htmlFor="image"
        className="flex flex-col items-center justify-center py-8 px-3 border-dashed border-gray-400 border bg-[#FAFAFA] rounded-lg gap-5 cursor-pointer h-[135] w-[335px]"
      >
        {loading ? (
          <>
            <img className="w-10" src="/images/loading-secondary.gif" alt="" />
            <p>Image Uploading...</p>
          </>
        ) : (
          <>
            <img src="/images/image-gallery.png" alt="imageGallery" />
            <p className="text-lg">Click or drag file to this area to upload</p>
          </>
        )}
      </label>
      {errors?.videoFile && (
        <p className="text-red-500 font-medium">{errors?.videoFile}</p>
      )}

      {videoFile && (
        <div>
          <video src={videoFile} height={200} controls></video>
        </div>
      )}

      <div className="flex justify-end">
        <Button
          type="submit"
          key="ok"
          className="bg-[#012B6D] h-[48px] w-[122px] text-[18px] rounded-md text-white"
          onClick={submitHandler}
        >
          {isLoading ? <Loading /> : "Save"}
        </Button>
        ,
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

export default Upload2;
