import React, { useState } from 'react'
import AdminLayout from '../../../../components/layout/AdminLayout'

const Setting = () => {
    const [timeZone, setTimeZone] = useState('UTC');
    const [language, setLanguage] = useState('English');
    const [emailNotification, setEmailNotification] = useState(false);
    const [pushNotification, setPushNotification] = useState(false);

    const handleTimeZoneChange = (e) => {
        setTimeZone(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleEmailNotificationChange = () => {
        setEmailNotification(!emailNotification);
    };

    const handlePushNotificationChange = () => {
        setPushNotification(!pushNotification);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const [isTwoFactorAuthEnabled, setIsTwoFactorAuthEnabled] = useState(false);
    const [isFacebookGraph, setIsFacebookGraph] = useState(false);
    const [passwordExpiry, setPasswordExpiry] = useState('');

    const handleTwoFactorAuthChange = () => {
        setIsTwoFactorAuthEnabled(!isTwoFactorAuthEnabled);
    };
    const handleFacebookGraph = () => {
        setIsFacebookGraph(!isFacebookGraph);
    };

    const handlePasswordExpiryChange = (e) => {
        setPasswordExpiry(e.target.value);
    };
    const [appId, setAppId] = useState('');
    const [appSecret, setAppSecret] = useState('');

    const handleAppIdChange = (e) => {
        setAppId(e.target.value);
    };

    const handleAppSecretChange = (e) => {
        setAppSecret(e.target.value);
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, e.g., send the data to the server.
        console.log(`App ID: ${appId}, App Secret: ${appSecret}`);
    };
    return (
        <div>
            <AdminLayout>
                <div className='bg-[#EFF6F9] px-5 py-10 md:py-20 w-full md:px-20'>
                    <h1 className='text-black text-[25px] font-[500]'>
                        Settings and Configuration
                    </h1>
                    <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='bg-white w-full rounded-lg p-5 mt-5'>
                        <p className='text-[20px] text-black font-[600]'>
                            Platform Settings

                        </p>
                        <form onSubmit={handleSubmit} >
                            <div className="my-4">
                                <label htmlFor="timeZone" className="block text-[20px] font-medium text-gray-600">
                                    Time Zone
                                </label>
                                <select
                                    id="timeZone"
                                    name="timeZone"
                                    value={timeZone}
                                    onChange={handleTimeZoneChange}
                                    className="block w-64 text-gray-600 mt-1 p-2 border  border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                >
                                    <option value="UTC">UTC</option>
                                    <option value="PST">PST</option>
                                    {/* Add more time zone options here */}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="language" className="block text-[20px] font-medium text-gray-600">
                                    Language
                                </label>
                                <select
                                    id="language"
                                    name="language"
                                    value={language}
                                    onChange={handleLanguageChange}
                                    className="block text-gray-600 w-64 mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                >
                                    <option value="English">English</option>
                                    <option value="Spanish">Spanish</option>
                                    {/* Add more language options here */}
                                </select>
                            </div>

                            <label className="block text-[20px] font-medium text-gray-600">Notification Preferences</label>
                            <div className="mb-4 flex items-center gap-3">
                                <div className="mt-3 ">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name="emailNotification"
                                            checked={emailNotification}
                                            onChange={handleEmailNotificationChange}
                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                        />
                                        <span className="ml-2 text-[20px] text-gray-600">Email</span>
                                    </label>
                                </div>
                                <div className="mt-3">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name="pushNotification"
                                            checked={pushNotification}
                                            onChange={handlePushNotificationChange}
                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                        />
                                        <span className="ml-2 text-[20px] text-gray-600">Push Notification</span>
                                    </label>
                                </div>
                            </div>

                        </form>


                    </div>
                    <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='bg-white w-full rounded-lg p-5 mt-5'>
                        <p className='text-[20px] text-black font-[600] pb-6'>
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
                                            checked={isTwoFactorAuthEnabled}
                                            onChange={handleTwoFactorAuthChange}
                                            placeholder='90'
                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="mb-4 flex items-center gap-1 md:gap-3">
                                <label htmlFor="passwordExpiry" className="block text-[20px] font-medium text-gray-600">
                                    Password Expiry (Days):
                                </label>
                                <input
                                    type="text"
                                    id="passwordExpiry"
                                    name="passwordExpiry"
                                    value={passwordExpiry}
                                    onChange={handlePasswordExpiryChange}
                                    className="block w-32 md:w-64 mt-1 p-2 border focus:outline-none text-black border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-base"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='bg-white w-full rounded-lg p-5 mt-5'>
                        <p className='text-[20px] text-black font-[600] pb-6'>
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
                                        onChange={handleFacebookGraph}
                                        placeholder='90'
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
                                       
                                        placeholder='90'
                                        className="form-checkbox h-5 w-5 text-indigo-600"
                                    />
                                </label>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit2}>
                            <div className="mb-4">
                                <label htmlFor="appId" className="block text-[20px] font-medium text-gray-600">
                                    Facebook App ID:
                                </label>
                                <input
                                    type="text"
                                    id="appId"
                                    name="appId"
                                    value={appId}
                                    onChange={handleAppIdChange}
                                    className="block w-64 focus:outline-none text-black mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="appSecret" className="block text-[20px] font-medium text-gray-600">
                                    Facebook App Secret:
                                </label>
                                <input
                                    type="text"
                                    id="appSecret"
                                    name="appSecret"
                                    value={appSecret}
                                    onChange={handleAppSecretChange}
                                    className="block w-64 focus:outline-none text-black mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="appId" className="block text-[20px] font-medium text-gray-600">
                                    Instagram App ID:
                                </label>
                                <input
                                    type="text"
                                    id="appId"
                                    name="appId"
                                   
                                    className="block w-64 focus:outline-none text-black mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="appSecret" className="block text-[20px] font-medium text-gray-600">
                                    Instagram App Secret:
                                </label>
                                <input
                                    type="text"
                                    id="appSecret"
                                    name="appSecret"
                                 
                                    className="block w-64 focus:outline-none text-black mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="my-7">
                                <button className='bg-[#012B6D] w-[216px] py-3 text-white font-[500] rounded-md' >
                                    Submit
                                </button>

                            </div>
                        </form>

                    </div>
                </div>
            </AdminLayout>
        </div>

    )
}

export default Setting