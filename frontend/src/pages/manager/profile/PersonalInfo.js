// src/components/ProfileForm.js

import React, { useMemo, useState } from "react";
import spacetime from "spacetime";
import TimezoneSelect, { allTimezones } from "react-timezone-select";

const PersonalInfo = () => {
  const defaultName = "James Williams";
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

  return (
    <div className="mx-auto">
      <form className="">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="focus:ring-1  border-[1px] border-black/[0.2] appearance-none  ring-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            defaultValue={defaultName}
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
          >
            {businessOptions.map((option, index) => (
              <option key={index} value={option}>
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
