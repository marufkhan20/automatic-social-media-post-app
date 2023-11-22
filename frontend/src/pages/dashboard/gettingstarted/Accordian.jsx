import React, { useState } from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';

const AccordionItem = ({ title, content, isActive, onClick, icon }) => (
    <div className='border-none '>
        <button
            className="flex items-center w-full mb-3 justify-between rounded-md bg-gray-50 py-3 px-3 text-left"
            onClick={onClick}
        >
            <div className='flex items-center gap-2 text-[24px] font-[500] '>
                <p>{icon}</p>
                <p>
                    {title}

                </p>

            </div>
            <span className={`transform  transition-transform`}>
                {
                    isActive ? <AiOutlineMinusCircle size={30} /> : <IoAddCircleOutline size={30} />
                }
            </span>
        </button>
        {isActive && <div className="flex px-10 py-10 mb-3 bg-gray-50 flex-col gap-2 text-[18px] list-disc">{content}</div>}
    </div>
);

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className=" rounded-lg overflow-hidden">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isActive={index === activeIndex}
                    icon={item.icon}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
