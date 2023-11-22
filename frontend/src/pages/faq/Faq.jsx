import React, { useState } from "react";
import UserGuide from "./UserGuide";
import Documentation from "./Documentation";
import FaqContent from "./FaqContent";
import Wrapper from "../../components/shared/Wrapper";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Faq = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        { title: "USER GUIDE", content: <UserGuide /> },
        { title: "FAQs", content: <FaqContent /> },
        { title: "DOCUMENTATION FOR ADMINISTRATORS", content: <Documentation /> },
    ];

    return (
        <div className="bg-[#EFF6F9]" >
            <Navbar />
            <Wrapper>
                <div className="flex justify-center flex-col items-center py-32 md:py-20">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:space-x-4">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`${activeTab === index ? "bg-[#012B6D] text-white" : "bg-white border-[#ADADAD] border"
                                    } py-3 focus:outline-none ${index <= 1 ? "md:w-[216px] w-[300px]" : "md:w-[478px] w-[300px]"
                                    } rounded-md text-[16px] md:text-[20px]`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4 w-[100%] md:w-[75%] mx-auto">{tabs[activeTab].content}</div>
                </div>
            </Wrapper>
            <Footer />
        </div>
    );
};

export default Faq;
