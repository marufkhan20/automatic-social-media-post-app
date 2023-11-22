import React, { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'
import UserGuide from '../../faq/UserGuide';
import FaqContent from '../../faq/FaqContent';
import Documentation from '../../faq/Documentation';

const FaqDashboard = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        { title: "USER GUIDE", content: <UserGuide /> },
        { title: "FAQs", content: <FaqContent /> },
        { title: "DOCUMENTATION FOR ADMINISTRATORS", content: <Documentation /> },
    ];
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-y-10 items-start justify-start w-full">
                <div
                    className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5  pt-6 pb-10"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="26" viewBox="0 0 26 26" fill="none">
                                <g clip-path="url(#clip0_1101_110)">
                                    <path d="M13.5139 7.21883C12.7431 6.96191 11.8438 7.21883 11.2014 7.73268C10.5591 8.24653 10.1737 9.01737 10.1737 9.91668C10.1737 10.3021 10.4306 10.5591 10.8161 10.5591C11.2014 10.5591 11.4584 10.3021 11.4584 9.91668C11.4584 9.5313 11.5869 9.01737 11.9723 8.76045C12.3577 8.50353 12.7431 8.37507 13.257 8.50353C13.8994 8.63199 14.2848 9.14591 14.4132 9.65976C14.5417 10.3021 14.4132 10.816 13.8994 11.2014C12.8716 11.9723 12.3577 13.1285 12.3577 14.2848C12.3577 14.6701 12.6146 14.9271 13.0001 14.9271C13.3854 14.9271 13.6424 14.6702 13.5139 14.2848C13.5139 13.5139 14.0278 12.7431 14.6701 12.2292C15.5694 11.4584 15.9548 10.4306 15.6979 9.40283C15.4409 8.2466 14.5417 7.47576 13.5139 7.21883Z" fill="#4A4A4A" />
                                    <path d="M12.4861 17.625C12.3577 17.7535 12.3577 18.0104 12.3577 18.1388C12.3577 18.2673 12.3577 18.3958 12.4861 18.5242C12.6146 18.6527 12.8715 18.7812 13 18.7812C13.1284 18.7812 13.3854 18.6527 13.3854 18.5242C13.5138 18.5242 13.6423 18.2673 13.6423 18.1388C13.6423 17.8819 13.5138 17.7535 13.3854 17.625C13.1284 17.368 12.7431 17.368 12.4861 17.625Z" fill="#4A4A4A" />
                                    <path d="M13 2.07996C6.96183 2.07996 2.07999 6.9618 2.07999 13C2.07999 19.0381 6.96183 23.92 13 23.92C19.0381 23.92 23.92 19.0381 23.92 13C23.92 6.9618 19.0381 2.07996 13 2.07996ZM13 22.6353C7.73268 22.6353 3.36468 18.2673 3.36468 13C3.36468 7.73265 7.73268 3.36465 13 3.36465C18.2673 3.36465 22.6353 7.73265 22.6353 13C22.6353 18.2673 18.2673 22.6353 13 22.6353Z" fill="#4A4A4A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1101_110">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-[25px] font-[500]">FAQs</p>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col items-center mx-auto py-32 md:py-20">
                        <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:space-x-4">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`${activeTab === index ? "bg-[#012B6D] text-white border border-transparent" : "bg-white border-[#ADADAD] border"
                                        } py-3 focus:outline-none  px-6 rounded-md text-[16px] md:text-[18px]`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 w-[100%] md:w-[75%] mx-auto">{tabs[activeTab].content}</div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default FaqDashboard