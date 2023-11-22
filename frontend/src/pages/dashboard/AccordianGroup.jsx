import React, { useState } from 'react';

const AccordionItem = ({ title, content, isActive, onClick, icon, isCardHidden, toggleCardVisibility }) => (

    <div className='border-none'>
        <button
            className="flex items-center w-full  justify-between   text-left"
            onClick={onClick}
        >
            <div className='flex items-center gap-5 text-[24px] font-[500]'>
                {/* ... Your SVG icon and title ... */}
            </div>
            <span className={`transform ${isActive ? 'rotate-0' : 'rotate-180'} transition-transform`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13" viewBox="0 0 24 13" fill="none">
                    <path d="M23 12L12.2157 2L1 12" stroke="black" stroke-width="2" />
                </svg>
            </span>
        </button>
        {isActive && (
            <div>
                {isCardHidden && (
                    <div className='bg-[#ADADAD]/10 p-3 w-full rounded-md flex items-center gap-3'>
                        <button onClick={toggleCardVisibility} className='bg-[#012B6D] text-white rounded-md px-4 py-2'>
                            Unhide
                        </button>
                        <p className='font-[500]'>
                            Marketing Madness
                        </p>
                    </div>
                )}
                <div className="pt-7 text-[18px]">{content}</div>
            </div>
        )}
    </div>
);

const AccordionGroup = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isCardHidden, setCardHidden] = useState(true);
    const toggleCardVisibility = () => {
        setCardHidden(!isCardHidden);
    };

    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="rounded-lg overflow-hidden">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isActive={index === activeIndex}
                    onClick={() => handleItemClick(index)}
                    isCardHidden={isCardHidden}
                    toggleCardVisibility={toggleCardVisibility}
                />
            ))}
        </div>
    );
};

export default AccordionGroup;
