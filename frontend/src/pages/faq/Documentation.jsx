// Documentation.js
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useWriteDocumentationMutation } from "../../features/dashboard/dashboardApi";

const Documentation = () => {
  const [administorGuide, setAdministorGuide] = useState("");

  const [writeDocumentation, { data: newDocumentation }] =
    useWriteDocumentationMutation();

  useEffect(() => {
    if (newDocumentation?._id) {
      toast.success("Administor Guide Update Successfully");
    }
  }, [newDocumentation]);
  return (
    <div className="text-center text-[20px] pt-16">
      <textarea
        rows="8"
        className="outline-none border p-5 rounded-xl w-full"
        placeholder="Write documentation for administors..."
        value={administorGuide}
        onChange={(e) => setAdministorGuide(e.target.value)}
      />
      <button
        className="bg-[#012B6D] text-white border border-transparent py-3 focus:outline-none px-6 rounded-md text-[16px] md:text-[18px]"
        onClick={() => writeDocumentation({ administorGuide })}
      >
        Submit
      </button>
    </div>
  );
};

export default Documentation;
