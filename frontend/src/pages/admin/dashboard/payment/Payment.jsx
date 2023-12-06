import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../../../../components/layout/AdminLayout";
import {
  useCreatePackageMutation,
  useDeletePackageMutation,
  useGetPackagesQuery,
} from "../../../../features/package/packageApi";

const Payment = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offers, setOffers] = useState([]);
  const [errors, setErrors] = useState({});

  // get all packages
  const { data: packages } = useGetPackagesQuery();

  // add new offer
  const addOffer = () => {
    const id = offers?.length === 0 ? 1 : offers[offers?.length - 1]?.id + 1;

    const newOffer = {
      id,
      title: "",
    };

    setOffers([...offers, newOffer]);
  };

  // updateOffer
  const updateOffer = (id, title) => {
    const updatedOffers = offers?.map((offer) => {
      if (offer?.id === id) {
        return {
          id,
          title,
        };
      } else {
        return offer;
      }
    });

    setOffers(updatedOffers);
  };

  // create new package
  const [creatPackage, { data: packageData, isLoading, isError, error }] =
    useCreatePackageMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && packageData?._id) {
      toast.success("Package Created Successfully");
      setOpenModal(false);
      setName("");
      setPrice("");
      setOffers([]);
    }
  }, [packageData, isLoading, isError, error]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Package Name is required!!";
    }

    if (!price) {
      validationErrors.price = "Package Price is required!!";
    }

    if (offers?.length === 0) {
      validationErrors.offer = "Please add package offer!!";
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    creatPackage({
      name,
      price,
      offers,
    });
  };

  // delete package
  const [deletePackage, { data: deletedPackage }] = useDeletePackageMutation();

  useEffect(() => {
    if (deletedPackage) {
      toast.success("Package deleted successfully");
    }
  }, [deletedPackage]);
  return (
    <div>
      <AdminLayout>
        <div className="bg-[#EFF6F9] text-black py-10 w-full px-10">
          <p className="text-[25px]  font-[400]">Billing & Payment</p>
          <button
            className="bg-[#012B6D] my-10 px-10 py-3 text-white rounded-md text-[20px] font-[600]"
            onClick={() => setOpenModal(true)}
          >
            Create New Package
          </button>

          <p className="text-[20px] font-[600] pt-10">Packages</p>

          <div className="bg-white w-full px-3 rounded-md mt-6 overflow-x-scroll md:overflow-hidden overflow-y-hidden">
            <table className="min-w-full text-center  ">
              <thead className="border-b w-full">
                <tr>
                  <th className="px-6 py-3 bg-white border-r font-[600]  md:text-[20px]   text-black uppercase tracking-wider">
                    Id
                  </th>
                  <th className="px-6 py-3 bg-white border-r font-[600] md:text-[20px]   text-black uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-white border-r  font-[600] md:text-[20px]   text-black uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 bg-white  font-[600] md:text-[20px]   text-black uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {packages?.map((item) => (
                  <tr key={item?._id}>
                    <td className="px-6 py-4 md:text-[20px] whitespace-no-wrap border-r text-black">
                      {item?._id}
                    </td>
                    <td className="px-6 py-4 md:text-[20px] whitespace-no-wrap border-r text-black">
                      {item?.name}
                    </td>
                    <td className="md:px-6 py-4 md:text-[20px] whitespace-no-wrap border-r text-black">
                      ${item?.price}
                    </td>
                    <td className="md:px-6 py-4 md:text-[20px] whitespace-no-wrap  text-black">
                      <button
                        className="text-red-500"
                        onClick={() => deletePackage(item?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[20px] font-[600] pt-10">Payment History</p>
          <div className="border mt-5 text-[#8B8B8B] text-[400] border-[#D9D9D9]">
            <thead>
              <tr className=" flex ">
                <th className="py-2 px-5 md:px-40 border-r bg-transparent text-center text-[400]">
                  ID
                </th>
                <th className="py-2 px-5 md:px-40 border-r bg-transparent text-center  text-[400]">
                  Date
                </th>
                <th className="py-2 px-5 md:px-40 border-r bg-transparent text-center text-[400]">
                  Amount
                </th>
              </tr>
            </thead>
          </div>
          <button className="bg-[#25BE62] my-10 px-10 py-3 text-white rounded-md text-[20px] font-[600]">
            Generate Invoices
          </button>
          <div
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-full bg-white rounded-lg  flex flex-col gap-5 p-5"
          >
            <p className="text-[20px] font-[600]">Handle Dispute or Refund</p>
            <div className="flex items-center gap-3">
              <p>Dispute Reason:</p>
              <input
                type="text"
                className="p-3 w-40 md:w-64 focus:outline-none rounded-md border border-[#D9D9D9]"
              />
            </div>
            <div className="flex items-center gap-3">
              <p>Refund Amount:</p>
              <input
                type="text"
                className="p-3 w-40 md:w-64 focus:outline-none rounded-md border border-[#D9D9D9]"
                placeholder="0"
              />
            </div>
            <button className="bg-[#DF0707] max-w-[300px] my-10  py-3 text-white rounded-md text-[20px] font-[600]">
              Submit Dispute or Refund
            </button>
          </div>
        </div>

        <Modal
          title={null}
          closable={false}
          visible={openModal}
          centered
          onCancel={() => setOpenModal(false)}
          width={700}
          wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
          footer={[
            <Button
              key="cancel"
              className="bg-[#012B6D] h-[48px] w-[122px] text-[18px] rounded-md text-white"
              onClick={submitHandler}
            >
              Create
            </Button>,
            <Button
              key="cancel"
              className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </Button>,
          ]}
        >
          <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
            <h1 className="text-[25px] text-white">Create New Package</h1>
          </div>
          <form onSubmit={submitHandler}>
            <div className="my-10 text-[#4A4A4A] flex flex-col justify-center items-center w-full gap-5">
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packageName"
                >
                  Package Name
                </label>
                <input
                  type="text"
                  id="packageName"
                  name="packageName"
                  placeholder=""
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors?.name && (
                  <p className="text-red-500 font-medium mt-3">
                    {errors?.name}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packagePrice"
                >
                  Package Price
                </label>
                <input
                  type="number"
                  id="packagePrice"
                  name="packagePrice"
                  placeholder=""
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 outline-none"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {errors?.price && (
                  <p className="text-red-500 font-medium mt-3">
                    {errors?.price}
                  </p>
                )}
              </div>

              {offers?.map((offer) => (
                <div className="w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="offerName"
                  >
                    Offer {offer?.id}
                  </label>
                  <input
                    type="text"
                    id="offerName"
                    name="offerName"
                    placeholder=""
                    className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 outline-none"
                    value={offer?.title}
                    onChange={(e) => updateOffer(offer?.id, e.target.value)}
                  />
                </div>
              ))}

              <div className="w-full">
                <button
                  className="border w-full rounded py-2 font-semibold bg-gray-100"
                  onClick={addOffer}
                  type="button"
                >
                  Add Package Offer
                </button>
                {errors?.offer && (
                  <p className="text-red-500 font-medium mt-3">
                    {errors?.offer}
                  </p>
                )}
              </div>
            </div>
          </form>
        </Modal>
      </AdminLayout>
    </div>
  );
};

export default Payment;
