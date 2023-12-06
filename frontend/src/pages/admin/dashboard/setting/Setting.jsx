import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../../../../components/layout/AdminLayout";
import {
  useCreateAndUpdateSettingMutation,
  useGetSettingQuery,
} from "../../../../features/setting/settingApi";

const Setting = () => {
  const [timeZone, setTimeZone] = useState("UTC");
  const [language, setLanguage] = useState("English");
  const [emailNotification, setEmailNotification] = useState(false);
  const [pushNotification, setPushNotification] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [passwordExpiry, setPasswordExpiry] = useState("");
  const [facebookAppId, setFacebookAppId] = useState("");
  const [facebookAppSecret, setFacebookAppSecret] = useState("");
  const [instagramAppId, setInstagramAppId] = useState("");
  const [instagramAppSecret, setInstagramAppSecret] = useState("");
  const [isFacebookGraph, setIsFacebookGraph] = useState(false);

  // get existing setting
  const { data: setting } = useGetSettingQuery();

  useEffect(() => {
    if (setting?._id) {
      setTimeZone(setting?.timeZone);
      setLanguage(setting?.language);
      setEmailNotification(setting?.notifications?.includes("email"));
      setPushNotification(
        setting?.notifications?.includes("push-notification")
      );
      setTwoFactorAuth(setting?.twoFactorAuth);
      setPasswordExpiry(setting?.passwordExpiry);
      setFacebookAppId(setting?.facebookAppId);
      setFacebookAppSecret(setting?.facebookAppSecret);
      setInstagramAppId(setting?.instagramAppId);
      setInstagramAppSecret(setting?.instagramAppSecret);
    }
  }, [setting]);

  // create and update setting
  const [createAndUpdate, { data: settingData, isLoading }] =
    useCreateAndUpdateSettingMutation();

  useEffect(() => {
    if (!isLoading && settingData?._id) {
      toast.success("Setting has been updated successfully");
    }
  }, [settingData, isLoading]);

  const submitHandler = (e) => {
    e.preventDefault();

    createAndUpdate({
      timeZone,
      language,
      notifications: [
        emailNotification && "email",
        pushNotification && "push-notification",
      ],
      twoFactorAuth,
      passwordExpiry,
      facebookAppId,
      facebookAppSecret,
      instagramAppId,
      instagramAppSecret,
    });
  };
  return (
    <div>
      <AdminLayout>
        <div className="bg-[#EFF6F9] px-5 py-10 md:py-20 w-full md:px-20">
          <h1 className="text-black text-[25px] font-[500]">
            Settings and Configuration
          </h1>
          <div
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="bg-white w-full rounded-lg p-5 mt-5"
          >
            <p className="text-[20px] text-black font-[600]">
              Platform Settings
            </p>
            <form onSubmit={submitHandler}>
              <div className="my-4">
                <label
                  htmlFor="timeZone"
                  className="block text-[20px] font-medium text-gray-600"
                >
                  Time Zone
                </label>
                <select
                  id="timeZone"
                  name="timeZone"
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="block w-64 text-gray-600 mt-1 p-2 border  border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option selected={timeZone === "UTC"} value="UTC">
                    UTC
                  </option>
                  <option selected={timeZone === "PST"} value="PST">
                    PST
                  </option>
                  {/* Add more time zone options here */}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="language"
                  className="block text-[20px] font-medium text-gray-600"
                >
                  Language
                </label>
                <select
                  id="language"
                  name="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="block text-gray-600 w-64 mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option selected={language === "English"} value="English">
                    English
                  </option>
                  <option selected={language === "Spanish"} value="Spanish">
                    Spanish
                  </option>
                  {/* Add more language options here */}
                </select>
              </div>

              <label className="block text-[20px] font-medium text-gray-600">
                Notification Preferences
              </label>
              <div className="mb-4 flex items-center gap-3">
                <div className="mt-3 ">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="emailNotification"
                      checked={emailNotification}
                      onChange={() => setEmailNotification(!emailNotification)}
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2 text-[20px] text-gray-600">
                      Email
                    </span>
                  </label>
                </div>
                <div className="mt-3">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="pushNotification"
                      checked={pushNotification}
                      onChange={() => setPushNotification(!pushNotification)}
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2 text-[20px] text-gray-600">
                      Push Notification
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="bg-white w-full rounded-lg p-5 mt-5"
          >
            <p className="text-[20px] text-black font-[600] pb-6">
              Security Settings
            </p>
            <div className="">
              <div className="mb-4 flex items-center  gap-1 md:gap-3">
                <label className="block text-[20px] font-medium text-gray-600">
                  Enable Two-Factor Authentication:
                </label>
                <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="enableTwoFactorAuth"
                      checked={twoFactorAuth}
                      onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                      placeholder="90"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                  </label>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-1 md:gap-3">
                <label
                  htmlFor="passwordExpiry"
                  className="block text-[20px] font-medium text-gray-600"
                >
                  Password Expiry (Days):
                </label>
                <input
                  type="text"
                  id="passwordExpiry"
                  name="passwordExpiry"
                  value={passwordExpiry}
                  onChange={(e) => setPasswordExpiry(e.target.value)}
                  className="block w-32 md:w-64 mt-1 p-2 border focus:outline-none text-black border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-base"
                />
              </div>
            </div>
          </div>
          <div
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="bg-white w-full rounded-lg p-5 mt-5"
          >
            <p className="text-[20px] text-black font-[600] pb-6">
              API Integration Settings
            </p>
            <div className="mb-4 flex items-center gap-3">
              <label className="block text-[20px] font-medium text-gray-600">
                Enable Facebook Graph API Integration:
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="enableTwoFactorAuth"
                    checked={isFacebookGraph}
                    onChange={() => setIsFacebookGraph(!isFacebookGraph)}
                    placeholder="90"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                </label>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <label className="block text-[20px] font-medium text-gray-600">
                Enable Instagram Graph API Integration:
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="enableTwoFactorAuth"
                    placeholder="90"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                </label>
              </div>
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="appId"
                  className="block text-[20px] font-medium text-gray-600"
                >
                  Facebook App ID:
                </label>
                <input
                  type="text"
                  id="appId"
                  name="appId"
                  value={facebookAppId}
                  onChange={(e) => setFacebookAppId(e.target.value)}
                  className="block w-64 focus:outline-none text-black mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="appSecret"
                  className="block text-[20px] font-medium text-gray-600"
                >
                  Facebook App Secret:
                </label>
                <input
                  type="text"
                  id="appSecret"
                  name="appSecret"
                  value={facebookAppSecret}
                  onChange={(e) => setFacebookAppSecret(e.target.value)}
                  className="block w-64 focus:outline-none text-black mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="appId"
                  className="block text-[20px] font-medium text-gray-600"
                >
                  Instagram App ID:
                </label>
                <input
                  type="text"
                  id="appId"
                  name="appId"
                  className="block w-64 focus:outline-none text-black mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={instagramAppId}
                  onChange={(e) => setInstagramAppId(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="appSecret"
                  className="block text-[20px] font-medium text-gray-600"
                >
                  Instagram App Secret:
                </label>
                <input
                  type="text"
                  id="appSecret"
                  name="appSecret"
                  className="block w-64 focus:outline-none text-black mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={instagramAppSecret}
                  onChange={(e) => setInstagramAppSecret(e.target.value)}
                />
              </div>

              <div className="my-7">
                <button
                  className="bg-[#012B6D] w-[216px] py-3 text-white font-[500] rounded-md"
                  onClick={submitHandler}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default Setting;
