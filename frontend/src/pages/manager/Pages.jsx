import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Dropdown } from 'antd';
import { FiMenu } from "react-icons/fi";
import { BsEyeSlash } from 'react-icons/bs';
import ManagerLayout from '../../components/layout/ManagerLayout';

const ManagerPages = () => {
    const [isCardHidden, setCardHidden] = useState(false);
    const [isUntrack, setIsUntrack] = useState(false);

    const items = [
        {
            key: '1',
            label: 'Hide Pages',
            onClick: () => setCardHidden(true),
        },
        {
            key: '2',
            label: 'Untrack Pages',
            onClick: () => setIsUntrack(true),
        },
    ];

    const toggleCardVisibility = () => {
        setCardHidden(!isCardHidden);
    };
    const toggleUntrack = () => {
        setIsUntrack(!isUntrack);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const [lastUpdated, setLastUpdated] = useState(isUntrack ? new Date() : null);
    const [timeDiff, setTimeDiff] = useState(isUntrack ? 0 : null);
    const updateLastUpdated = () => {
        const currentTime = new Date();
        const diff = Math.floor((currentTime - lastUpdated) / 1000);
        setTimeDiff(diff);
    };

    useEffect(() => {
        if (isUntrack) {
            setLastUpdated(new Date()); 
            updateLastUpdated();
            const intervalId = setInterval(updateLastUpdated, 1000);
            return () => clearInterval(intervalId);
        }
    }, [isUntrack, lastUpdated]);

    const handleRefresh = () => {
        if (isUntrack) {
            setLastUpdated(new Date());
        }
    };

    const getTimeDisplay = () => {
        if (!isUntrack) {
            return '33 seconds ago';
        }
        if (timeDiff < 30) {
            return `just now`;
        }
        if (timeDiff > 30 && timeDiff <= 60) {
            return `${timeDiff} seconds ago`
        }
        else {
            const minutes = Math.floor(timeDiff / 60);
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        }
    };

    return (
        <ManagerLayout>
            <div className='flex flex-col gap-y-10 justify-center md:justify-start items-center md:items-start w-full'>
                <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-3 w-full bg-white rounded-md px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="29" viewBox="0 0 41 29" fill="none">
                            <path d="M39.6427 14.7153C39.3734 14.164 33.612 4.5677 33.466 4.32806C32.3906 2.56445 30.5263 1.51159 28.4792 1.51159C28.1872 1.51159 27.9004 1.53396 27.6196 1.57591C27.6194 1.57537 27.6186 1.5742 27.6184 1.57389C27.1223 0.761606 26.2637 0.276581 25.3217 0.276581C23.8343 0.276581 22.6241 1.49932 22.6241 3.00232V7.76495H19.1412V3.00232C19.1412 1.4994 17.9311 0.276581 16.4437 0.276581C15.5033 0.276581 14.6463 0.759819 14.1459 1.57591C13.8652 1.53396 13.5782 1.51159 13.2861 1.51159C11.239 1.51159 9.37479 2.56453 8.29924 4.32822C8.2844 4.35253 8.23927 4.42664 7.15518 6.26303C6.96884 6.57872 7.07108 6.98731 7.38342 7.1756C7.69584 7.36382 8.10021 7.26074 8.28655 6.94498C9.17861 5.43397 9.39586 5.06764 9.42099 5.02639C10.2548 3.65909 11.6997 2.84277 13.2862 2.84277C15.7883 2.84277 17.8238 4.89962 17.8238 7.42782V13.9873C16.2456 11.3866 13.406 9.64788 10.172 9.64788C8.71144 9.64788 7.33146 10.0027 6.11168 10.6311C6.42495 10.1 6.75589 9.5389 7.08799 8.97619C7.27426 8.66043 7.17202 8.25184 6.85952 8.06362C6.54702 7.87541 6.14274 7.97872 5.95639 8.29449C4.55681 10.6663 2.35395 14.2252 2.07567 14.8128C1.51632 15.9941 1.20267 17.3162 1.20267 18.711C1.20267 23.7084 5.22631 27.7741 10.172 27.7741C15.1177 27.7741 19.1412 23.7084 19.1412 18.711V16.9425H22.6241V18.711C22.6241 23.7084 26.6478 27.7741 31.5934 27.7741C36.539 27.7741 40.5627 23.7084 40.5627 18.711C40.5627 17.2777 40.2316 15.9213 39.6427 14.7153ZM17.8238 3.69405C17.2153 2.94033 16.427 2.34081 15.5255 1.96228C15.7749 1.73624 16.0982 1.60776 16.4438 1.60776C17.2047 1.60776 17.8238 2.2333 17.8238 3.00224V3.69405ZM10.172 26.4428C5.9527 26.4428 2.52008 22.9743 2.52008 18.7109C2.52008 14.4476 5.9527 10.9791 10.172 10.9791C14.3913 10.9791 17.8238 14.4476 17.8238 18.7109C17.8238 22.9743 14.3912 26.4428 10.172 26.4428ZM19.1411 13.0556V9.09605H22.624V13.0556H19.1411ZM22.6241 15.6113H19.1412V14.3868H22.6241V15.6113ZM23.9415 3.00232C23.9415 2.23338 24.5606 1.60784 25.3216 1.60784C25.6682 1.60784 25.9926 1.73717 26.2407 1.96205C25.3389 2.34058 24.5502 2.94026 23.9415 3.69413V3.00232ZM23.9415 7.42821C23.9415 4.89993 25.9771 2.84277 28.4792 2.84277C30.0657 2.84277 31.5106 3.65917 32.3444 5.02639C32.4234 5.15604 34.0697 7.94586 35.6537 10.6311C34.4338 10.0026 33.0538 9.6478 31.5933 9.6478C28.3592 9.6478 25.5197 11.3866 23.9415 13.9872V7.42821ZM31.5934 26.4428C27.3742 26.4428 23.9416 22.9743 23.9416 18.7109C23.9416 14.4475 27.3742 10.979 31.5934 10.979C35.8127 10.979 39.2453 14.4475 39.2453 18.7109C39.2453 22.9743 35.8126 26.4428 31.5934 26.4428ZM37.3684 16.6135C37.2452 16.2677 36.8681 16.0881 36.5257 16.2124C36.1834 16.3368 36.0056 16.718 36.1287 17.0639C36.3161 17.5908 36.4112 18.145 36.4112 18.7109C36.4112 21.3953 34.25 23.5791 31.5934 23.5791C28.9368 23.5791 26.7755 21.3953 26.7755 18.7109C26.7755 16.0266 28.9368 13.8428 31.5934 13.8428C32.9266 13.8428 34.2124 14.4087 35.1212 15.3955C35.3691 15.6645 35.7858 15.6797 36.0523 15.4293C36.3186 15.1788 36.3335 14.7577 36.0857 14.4885C34.9287 13.2321 33.2912 12.5115 31.5934 12.5115C28.2103 12.5115 25.4581 15.2925 25.4581 18.7109C25.4581 22.1293 28.2103 24.9102 31.5934 24.9102C34.9764 24.9102 37.7286 22.1293 37.7286 18.7109C37.7286 17.9911 37.6074 17.2854 37.3684 16.6135ZM10.172 12.5117C6.78895 12.5117 4.03675 15.2926 4.03675 18.711C4.03675 22.1294 6.78895 24.9104 10.172 24.9104C13.555 24.9104 16.3072 22.1294 16.3072 18.711C16.3072 15.2926 13.5549 12.5117 10.172 12.5117ZM10.172 23.5791C7.51542 23.5791 5.35415 21.3954 5.35415 18.7109C5.35415 16.0266 7.51534 13.8428 10.172 13.8428C12.8286 13.8428 14.9898 16.0265 14.9898 18.7109C14.9898 21.3954 12.8285 23.5791 10.172 23.5791Z" fill="#4A4A4A" />
                        </svg>
                        <p className='text-[25px] font-[500]'>
                            Tracked Pages
                        </p>
                    </div>
                    {isCardHidden ? (
                        <p>
                            You are not tracking any pages right now.
                        </p>
                    ) : (
                        <div className='min-w-full'>
                            <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)" }} className={`my-5 p-4 md:w-[290px] bg-[#F4F7F8] ${isUntrack ? 'hidden' : ''}`}>
                                <div>
                                    <div className='bg-white w-full flex flex-col justify-center items-center h-[113px]'>
                                        <p className='text-[12px]'>
                                            [Thumbnail Image here]
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-4 md:gap-0 w-full justify-between pt-5'>
                                        <div className='bg-[#E82828] flex justify-center items-center w-[36px] h-[21px] rounded-full text-white font-[500]'>
                                            1
                                        </div>
                                        <div>
                                            <p className='font-[500]'>
                                                Marketing Madness
                                            </p>
                                        </div>
                                        <div>
                                            <Dropdown
                                                menu={{
                                                    items,
                                                    selectable: false,
                                                }}
                                            >
                                                <FiMenu size={35} />
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex md:flex-row flex-col gap-3 md:gap-0 justify-between w-full my-5  ${isUntrack ? 'hidden' : ''}`}>
                                <button className='hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0]  w-[135px] h-[35px] bg-[#FF5FC0] rounded-md text-white font-[400] md:font-[500]'>
                                    Open Pages
                                </button>
                                <button className='w-[210px] h-[35px] rounded-md text-white font-[400] md:font-[500] hover:bg-transparent border border-transparent hover:border-[#012B6D] transition-all duration-300 ease-in hover:text-[#012B6D] bg-[#012B6D]'>
                                    Connect Your Facebook
                                </button>
                            </div>

                        </div>
                    )}
                    <p className={`${isUntrack ? 'block' : 'hidden'}`}>
                        You are not tracking any pages right now.
                    </p>
                  
                </div>
                <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="21" viewBox="0 0 35 21" fill="none">
                            <g clip-path="url(#clip0_1201_14)">
                                <path d="M29.565 9.19126H25.0681C24.1388 9.19065 23.2252 9.43114 22.4165 9.88925C21.7283 10.2797 21.1329 10.8148 20.6716 11.4577C20.3643 11.4041 20.0529 11.3773 19.7409 11.3775H15.24C14.9281 11.3772 14.6167 11.4041 14.3094 11.4577C13.8482 10.8147 13.2528 10.2796 12.5644 9.88925C11.7558 9.43114 10.8422 9.19065 9.91282 9.19126H5.41597C2.42784 9.19788 0.00712054 11.6186 0.000501633 14.6067V17.6595C0.00270794 17.9792 0.26245 18.2371 0.582164 18.2371H9.80852V19.8417C9.80852 20.1629 10.069 20.4233 10.3902 20.4233H24.5747C24.8959 20.4233 25.1564 20.1629 25.1564 19.8417V18.2371H34.3827C34.704 18.2371 34.9644 17.9767 34.9644 17.6554V14.6067C34.9578 11.6248 32.5468 9.2067 29.565 9.19126ZM9.8687 16.2715V16.3958C9.8687 16.452 9.8687 16.5042 9.8687 16.5603V16.793V17.0738H1.16383V14.6067C1.17044 12.261 3.07027 10.3612 5.41597 10.3546H9.91282C10.641 10.3538 11.3569 10.5417 11.9908 10.9001C12.4157 11.1404 12.7969 11.4511 13.118 11.8188C11.3079 12.6044 10.0648 14.3081 9.8687 16.2715ZM23.981 16.793V19.264H10.9879V16.7488C10.9879 16.7034 10.9879 16.6593 10.9879 16.6165C10.9879 16.547 10.9879 16.4774 10.9879 16.4079V16.3036C10.9879 16.2635 10.9879 16.2234 10.9879 16.1832V16.0549V16.0148V15.9706V15.8824L11.012 15.7861L11.0521 15.6417L11.0802 15.5454C11.6564 13.7989 13.2847 12.6164 15.1237 12.609L15.24 12.5448H19.7409C21.8767 12.5527 23.678 14.1379 23.9569 16.2554C23.9569 16.3437 23.9569 16.4319 23.981 16.5202C23.981 16.6112 23.981 16.702 23.981 16.793ZM33.8171 17.0778H25.1524V16.7288C25.1524 16.6847 25.1524 16.6405 25.1524 16.5964C25.1524 16.551 25.1524 16.5055 25.1524 16.46C25.1524 16.3958 25.1524 16.3276 25.1524 16.2635V16.2033V16.1351V16.0107V15.9907V15.9425V15.8984V15.8703V15.8182V15.762V15.734V15.6978V15.6617V15.6256V15.5374V15.4973V15.4451V15.393L25.1243 15.2927V15.2526V15.2165V15.1884V15.1483V15.0961L25.0681 14.9397C24.5454 13.5502 23.4794 12.4335 22.1157 11.8468C22.357 11.4896 22.6504 11.1705 22.9862 10.9001C23.62 10.5417 24.3359 10.3538 25.0641 10.3546H29.565C31.9106 10.3612 33.8105 12.261 33.8171 14.6067V17.0778ZM10.5587 1.22048C11.3254 1.98918 11.7554 3.03075 11.7545 4.11636C11.7525 6.37842 9.91724 8.21045 7.65517 8.20845C5.39311 8.20644 3.56107 6.3711 3.56308 4.10914C3.56509 1.84707 5.40043 0.0150384 7.66239 0.0170441C8.7496 0.0162418 9.79218 0.44948 10.5587 1.22048ZM9.73632 6.18266C10.287 5.63309 10.5959 4.88676 10.5948 4.10873C10.5946 3.33111 10.2855 2.58538 9.73552 2.03561C8.59004 0.89064 6.73344 0.891041 5.58847 2.03641C4.4435 3.18189 4.4439 5.03849 5.58927 6.18346C6.73474 7.32843 8.59135 7.32803 9.73632 6.18266ZM27.3219 0.0130327C29.5838 0.0150384 31.416 1.85028 31.414 4.11235C31.4119 6.37441 29.5766 8.20644 27.3146 8.20444C26.2274 8.20524 25.1849 7.772 24.4184 7.001C23.6517 6.2324 23.2215 5.19073 23.2225 4.10512C23.2246 1.84306 25.0599 0.0110269 27.3219 0.0130327ZM29.3925 6.18096C30.5374 5.03558 30.537 3.17888 29.3917 2.03391C28.2462 0.888935 26.3896 0.889336 25.2446 2.03471C24.694 2.58428 24.3851 3.33061 24.3862 4.10863C24.3864 4.88626 24.6955 5.63199 25.2454 6.18176C26.3909 7.32673 28.2475 7.32633 29.3925 6.18096ZM20.3807 3.39269C21.9814 4.98785 21.9859 7.57855 20.3908 9.17922C18.7956 10.7799 16.2049 10.7844 14.6042 9.18925C13.0036 7.59409 12.999 5.00339 14.5942 3.40272C15.3607 2.63171 16.4033 2.19848 17.4905 2.19928C18.5739 2.19878 19.6133 2.6279 20.3807 3.39269ZM17.4897 9.23057C19.1091 9.23097 20.4223 7.91852 20.4228 6.29899C20.424 5.52097 20.1151 4.77464 19.5644 4.22507C19.0146 3.6751 18.2689 3.36601 17.4913 3.36581C15.8718 3.36541 14.5585 4.67796 14.5581 6.29739C14.5577 7.91682 15.8701 9.23007 17.4897 9.23057Z" fill="#4A4A4A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1201_14">
                                    <rect width="35" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-[25px] font-[500]'>
                            Available Pages
                        </p>
                    </div>
                    <div className=' py-4'>
                        <div className='flex gap-5 items-center'>
                            <p className='text-[18px] font-[400]'>
                                Updated:
                                <span className='font-[700]'> {getTimeDisplay()}</span>
                            </p>
                            <button onClick={handleRefresh} className='border hover:text-white ease-in duration-300 transition-all hover:bg-[#ADADAD] rounded-md border-[#ADADAD] w-[130px] h-[33px]' >
                                Refresh Now
                            </button>
                        </div>
                        {isCardHidden ? (
                            <p>
                                 No Pages found.
                            </p>
                        ) : (
                            <div className='pt-5'>
                                {isUntrack ? (
                                    <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)" }} className='my-5 p-4 w-[290px] bg-[#F4F7F8] '>
                                        <div className='bg-white w-full flex flex-col justify-center items-center h-[113px]'>
                                            <p className='text-[12px]'>
                                                [Thumbnail Image here]
                                            </p>
                                        </div>
                                        <div className='flex flex-col items-start  w-full  pt-5'>
                                            <div>
                                                <p className='font-[500]'>
                                                    Marketing Madness
                                                </p>
                                            </div>
                                            <div className='flex w-full items-center justify-between mt-3'>
                                                <button onClick={toggleUntrack} className='bg-[#FF5FC0] rounded-md py-1 px-2 text-white font-[600] text-[14px]'>
                                                    Track

                                                </button>
                                                <button onClick={() => setCardHidden(true)} className='bg-[#012B6D] rounded-md py-1 px-2 text-white font-[600] text-[14px]'>
                                                    Hide

                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                )
                                    :
                                    (
                                        <p className='text-[18px]'>
                                            No Pages found.
                                        </p>

                                    )
                                }
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md  px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div className='w-full'>
                        <div className='border-none'>
                            <button
                                className="flex items-center w-full  justify-between   text-left"
                                onClick={toggleAccordion}
                            >
                                <div className='flex items-center gap-5 text-[24px] font-[500]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
                                        <g clip-path="url(#clip0_1201_32)">
                                            <path d="M26.6035 0.283527C26.799 0.0880269 27.115 0.0880269 27.3105 0.283527C27.506 0.479027 27.506 0.795527 27.3105 0.990527L4.0605 24.2405C3.963 24.338 3.835 24.387 3.707 24.387C3.579 24.387 3.451 24.338 3.3535 24.2405C3.158 24.045 3.158 23.729 3.3535 23.5335L26.6035 0.283527ZM22.9215 6.35453C23.5748 6.79286 24.1969 7.28814 24.7762 7.8311L25.1185 8.16253L29.524 12.5685L25.0025 17.09C22.232 19.8605 18.4805 21.349 14.67 21.349C13.027 21.349 11.373 21.0725 9.782 20.5025C9.522 20.409 9.387 20.123 9.48 19.863C9.573 19.603 9.8595 19.4675 10.1195 19.561C14.9321 21.2857 20.3614 20.1284 24.0521 16.6204L24.2955 16.383L28.11 12.5685L24.411 8.86953C23.783 8.24153 23.094 7.67453 22.364 7.18503C22.135 7.03103 22.0735 6.72003 22.2275 6.49103C22.381 6.26203 22.6925 6.20103 22.9215 6.35453ZM20.882 8.88603C21.626 9.99753 22.0195 11.2945 22.0195 12.637C22.0195 16.359 18.9915 19.387 15.2695 19.387C14.0065 19.387 12.774 19.036 11.7065 18.371C11.472 18.225 11.4 17.917 11.546 17.6825C11.6925 17.448 12.001 17.377 12.2345 17.522C13.144 18.088 14.193 18.387 15.2695 18.387C18.44 18.387 21.0195 15.808 21.0195 12.637C21.0195 11.493 20.6845 10.3885 20.051 9.44203C19.8975 9.21303 19.959 8.90253 20.1885 8.74853C20.417 8.59503 20.728 8.65653 20.882 8.88603ZM19.467 4.65403C19.729 4.74203 19.8695 5.02603 19.782 5.28753C19.6935 5.54903 19.41 5.68903 19.1485 5.60253C14.3398 3.98822 9.13288 5.14884 5.47591 8.62868L5.229 8.86953L1.4145 12.684L5.1135 16.383C5.4775 16.7475 5.8655 17.094 6.266 17.413C6.482 17.585 6.5175 17.8995 6.3455 18.1155C6.2465 18.2395 6.101 18.304 5.954 18.304C5.8445 18.304 5.7345 18.268 5.6425 18.195C5.32037 17.9382 5.00556 17.665 4.70355 17.3795L4.406 17.09L0 12.684L4.522 8.16203C8.459 4.22553 14.186 2.88153 19.467 4.65403ZM15.269 5.88703C16.481 5.88703 17.6695 6.21203 18.7065 6.82653C18.9445 6.96753 19.0225 7.27403 18.882 7.51153C18.741 7.74953 18.434 7.82753 18.197 7.68703C17.314 7.16353 16.302 6.88703 15.2695 6.88703C12.099 6.88703 9.5195 9.46653 9.519 12.6375C9.519 13.5255 9.716 14.3765 10.104 15.1675C10.2255 15.415 10.123 15.7145 9.875 15.8365C9.8045 15.871 9.729 15.8875 9.6555 15.8875C9.4705 15.8875 9.293 15.7845 9.206 15.6075C8.75 14.6785 8.519 13.679 8.519 12.637C8.519 8.91503 11.547 5.88703 15.269 5.88703Z" fill="#4A4A4A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1201_32">
                                                <rect width="30" height="25" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Hiddden Pages

                                </div>
                                <span
                                    className={`transform ${isOpen ? 'rotate-0' : 'rotate-180'} transition-transform`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="13"
                                        viewBox="0 0 24 13"
                                        fill="none"
                                    >
                                        <path d="M23 12L12.2157 2L1 12" stroke="black" stroke-width="2" />
                                    </svg>
                                </span>
                            </button>
                            {isOpen && (
                                <div className='pt-5'>
                                    {isCardHidden ? (
                                        <div className='bg-[#ADADAD]/10 p-3 w-full rounded-md flex items-center gap-3'>
                                            <button onClick={toggleCardVisibility} className='bg-[#012B6D] flex items-center gap-3 text-white rounded-md px-4 py-2'>
                                                <BsEyeSlash size={20} className='text-white' />
                                                Unhide
                                            </button>
                                            <p className='font-[500]'>
                                                Marketing Madness
                                            </p>
                                        </div>
                                    ) :
                                        (

                                            <p>
                                                No hidden Pages.
                                            </p>
                                        )
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ManagerLayout>
    )
}

export default ManagerPages;
