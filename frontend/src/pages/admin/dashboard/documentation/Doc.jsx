import React, { useState } from 'react'
import UserGuide from '../../../faq/UserGuide';
import FaqContent from '../../../faq/FaqContent';
import Documentation from '../../../faq/Documentation';
import AdminLayout from '../../../../components/layout/AdminLayout';


const Doc = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        { title: "USER GUIDE", content: <UserGuide /> },
        { title: "FAQs", content: <FaqContent /> },
        { title: "DOCUMENTATION FOR ADMINISTRATORS", content: <Documentation /> },
    ];
    return (
        <AdminLayout>
            <div className="flex flex-col gap-y-10 items-start justify-start text-black w-full">
                <div
                    className="flex flex-col justify-start items-start gap-5 w-full h-screen bg-[#EFF6F9]  px-5  pt-6 pb-10"
                >
                  
                    <div className="flex justify-center flex-col items-center mx-auto py-32 md:py-20">
                        <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:space-x-4">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`${activeTab === index ? "bg-[#012B6D] text-white border border-transparent" : "bg-white border-[#ADADAD] border"
                                        } py-3 focus:outline-none px-6 rounded-md text-[16px] md:text-[18px]`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 w-[100%] md:w-[75%] mx-auto">{tabs[activeTab].content}</div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Doc