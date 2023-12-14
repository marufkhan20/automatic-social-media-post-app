/* eslint-disable react-hooks/exhaustive-deps */
// src/components/ProfileForm.js

import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import spacetime from "spacetime";
import Loading from "../../../components/shared/Loading";
import { useUpdateProfileMutation } from "../../../features/user/userApi";

const PersonalInfo = ({ profilePic }) => {
  const businessOptions = ["Option 1", "Option 2", "Option 3"]; // Replace with your options

  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [datetime, setDatetime] = useState(spacetime.now());

  useMemo(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.goto(tzValue));
  }, [tz]);

  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [business, setBusiness] = useState("");
  const [errors, setErrors] = useState({});

  // get user from state
  const { user } = useSelector((state) => state.auth || {});

  useEffect(() => {
    if (user?._id) {
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setBusiness(user?.business);
      // setDatetime(user?.timeZone);
    }
  }, [user]);

  // update profile information
  const [updateProfile, { data, isError, error, isLoading }] =
    useUpdateProfileMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      const { data } = error || {};
      setErrors(data.error);
    }

    if (!isLoading && !isError && data?._id) {
      toast.success("Profile Update successfully");
    }
  }, [data, isLoading, isError, error]);

  useEffect(() => {
    if (profilePic?.length > 0) {
      console.log("profile pic", profilePic[0].status);
    }
  }, [profilePic]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = "First Name is required!!";
    }

    if (!lastName) {
      validationErrors.lastName = "Last Name is required!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    updateProfile({
      firstName,
      lastName,
      business,
      timeZone: tz?.label,
      profilePic,
    });
  };
  return (
    <div className="mx-auto">
      <form className="" onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            First Name
          </label>
          <input
            className="focus:ring-1  border-[1px] border-black/[0.2] appearance-none  ring-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors?.firstName && (
            <p className="text-red-500 font-medium mt-3">{errors?.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="focus:ring-1  border-[1px] border-black/[0.2] appearance-none  ring-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Your Name"
            defaultValue={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors?.lastName && (
            <p className="text-red-500 font-medium mt-3">{errors?.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="business"
          >
            Primary Business
          </label>
          <select
            className="focus:ring-1 border-[1px] border-black/[0.2] ring-blue-500 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="business"
            onChange={(e) => setBusiness(e.target.value)}
          >
            {businessOptions.map((option, index) => (
              <option selected={business === option} key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="timezone"
          >
            Default Time Zone
          </label>
          <div className="timezone--wrapper"></div>
        </div>
        <div className="flex items-center justify-between mt-7">
          <button
            className="bg-[#FF5FC0]  text-white  py-2 px-4 rounded-md "
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loading /> : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
