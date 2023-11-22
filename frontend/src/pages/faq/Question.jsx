import React, { useState } from "react";
import { LiaPlusSolid, LiaMinusSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

const ExpandableComponent = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
      };
    
    return (
        <article className="flex flex-col w-full ">
            <header className="flex justify-between p-4 my-3 rounded-md font-[400] text-xl bg-white border border-[#ADADAD] ">
                <h4
                    onClick={() => setExpanded(!expanded)}
                    className="question-title text-xl "
                >
                    {title}
                </h4>
                <button
                    className="text-black/60"
                    onClick={() => setExpanded(!expanded)}
                >
                    <div
                        onClick={toggleExpanded}
                        className={`top-1/2 transform  transition-transform duration-300 ${expanded ? "rotate-180" : ""
                            }`}
                    >
                        <IoIosArrowDown size={20} />
                    </div>        </button>
            </header>

            {content && content.length > 0 && (
                <div
                    className={` border-black/20 transition-all overflow-hidden ${expanded ? "duration-1000 max-h-[1000px]" : "max-h-0 duration-300 "
                        }`}
                >
                    <p className="text-lg my-1 text-black/90 font-[400] h-[150px] bg-white border border-[#ADADAD] p-5 rounded-md w-full">
                        {content.map((item, index) => (
                            <span key={index}>
                                {item.info}
                                <br />
                            </span>
                        ))}
                    </p>
                </div>
            )}
        </article>
    );
};

export default ExpandableComponent;
