import React, { useState } from "react";

function LoginInfo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSaveLoginInfo = () => {
    // Here, you can implement the logic to save login information
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className=" w-full">
      <h1 className="text-[25px] font-[500] mb-4">Login Information</h1>

      {/* Email Address Field */}
      <div className="mb-4 w-full">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="focus:ring-1  border-[1px] border-black/[0.2] appearance-none  ring-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="focus:ring-1  border-[1px] border-black/[0.2] appearance-none  ring-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      {/* Confirm Password Field */}
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="focus:ring-1  border-[1px] border-black/[0.2] appearance-none  ring-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div className="mb-4 mt-7">
        <button
          className="bg-[#FF5FC0]  text-white py-2 px-4 rounded-md focus:outline-none focus:ring"
          onClick={handleSaveLoginInfo}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default LoginInfo;
