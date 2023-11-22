// src/components/ProfileForm.js

import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import spacetime from "spacetime";

const PersonalInfo = () => {
  const businessOptions = ["Option 1", "Option 2", "Option 3"]; // Replace with your options
  const timezoneOptions = ["Option A", "Option B", "Option C"]; // Replace with your options
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

  useEffect(() => {
    console.log("data time", datetime);
  }, [datetime]);

  return (
    <div className="mx-auto">
      <form className="">
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
          />
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
          />
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
          <div className="timezone--wrapper">
            <TimezoneSelect
              value={tz}
              onChange={setTz}
              className="focus:outline-none"
              timezones={{
                ...allTimezones,
                "America/Lima": "Pittsburgh",
                "Europe/Berlin": "Frankfurt",
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-7">
          <button
            className="bg-[#FF5FC0]  text-white  py-2 px-4 rounded-md "
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
