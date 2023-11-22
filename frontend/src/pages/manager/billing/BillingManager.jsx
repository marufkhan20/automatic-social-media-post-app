import React, { useState } from 'react'
import { Button, Modal } from "antd";
import ManagerLayout from '../../../components/layout/ManagerLayout';

const BillingManager = () => {
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const showModal2 = () => {
        setOpen2(true);
    };
    const showModal3 = () => {
        setOpen3(true);
    };
    const handleCancel3 = (e) => {
        console.log(e);
        setOpen3(false);
    };
    const handleCancel2 = (e) => {
        console.log(e);
        setOpen2(false);
    };
    return (
        <div>
            <ManagerLayout>
                <div className="flex flex-col gap-y-10 items-start justify-start w-full">
                    <div
                        className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5 md:px-10 pt-6 pb-10"
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" viewBox="0 0 21 18" fill="none">
                                    <g clip-path="url(#clip0_1101_100)">
                                        <path d="M20.6447 3.7033C20.4002 3.38892 20.0858 3.21425 19.7015 3.17933L18.8632 3.07772V2.09641V1.39781C18.8632 0.629321 18.2344 0.000549318 17.4659 0.000549318H1.39726C0.628772 0.000508383 0 0.62928 0 1.39781V2.09646V4.89101V12.576C0 13.2069 0.423971 13.7434 1.001 13.9153C0.983398 14.622 1.51806 15.2354 2.23566 15.3007L18.3741 17.1171C18.4091 17.1171 18.4789 17.1171 18.5139 17.1171C19.2125 17.1171 19.8413 16.5931 19.9111 15.9294L20.9591 4.71634C20.994 4.36699 20.8892 3.98273 20.6447 3.7033ZM0.698649 2.44576H18.1645V3.354V4.54167H0.698649V2.44576ZM1.39726 0.699157H17.4659C17.8501 0.699157 18.1645 1.01354 18.1645 1.39781V1.74711H0.698649V1.39781C0.698649 1.01354 1.01304 0.699157 1.39726 0.699157ZM0.698649 12.5759V5.24027H18.1645V12.5759C18.1645 12.9602 17.8502 13.2746 17.4659 13.2746H1.43222H1.3973C1.01304 13.2746 0.698649 12.9602 0.698649 12.5759ZM20.2604 4.57658L19.2125 15.7897C19.1775 16.1739 18.8282 16.4534 18.444 16.4185L2.34042 14.602C1.99111 14.5671 1.74656 14.2876 1.71164 13.9732H17.4659C18.2343 13.9732 18.8631 13.3445 18.8631 12.576V4.89097V3.73822L19.6666 3.8081C19.8412 3.8081 20.0159 3.91289 20.1207 4.05261C20.2255 4.19232 20.2954 4.40191 20.2604 4.57658ZM11.1782 11.8773C10.9686 11.8773 10.8288 11.7376 10.8289 11.528V8.38418C10.8289 8.17458 10.9686 8.03487 11.1782 8.03487H16.7673C16.9768 8.03487 17.1166 8.17458 17.1166 8.38418V11.528C17.1166 11.7376 16.9768 11.8773 16.7673 11.8773H11.1782ZM11.5275 8.73348V11.1787H16.4179V8.73348H11.5275ZM1.7466 7.33618C1.53701 7.33618 1.3973 7.19647 1.3973 6.98688C1.3973 6.77729 1.53701 6.63757 1.7466 6.63757H4.54116C4.75075 6.63757 4.89046 6.77729 4.89046 6.98688C4.89046 7.19647 4.75075 7.33618 4.54116 7.33618H1.7466ZM5.93842 7.33618C5.72882 7.33618 5.58911 7.19647 5.58911 6.98688C5.58911 6.77729 5.72882 6.63757 5.93842 6.63757H8.73297C8.94256 6.63757 9.08227 6.77729 9.08227 6.98688C9.08227 7.19647 8.94256 7.33618 8.73297 7.33618H5.93842ZM1.7466 8.73348C1.53701 8.73348 1.3973 8.59377 1.3973 8.38418C1.3973 8.17458 1.53701 8.03487 1.7466 8.03487H6.28772C6.49731 8.03487 6.63702 8.17458 6.63702 8.38418C6.63702 8.59377 6.49731 8.73348 6.28772 8.73348H1.7466ZM8.73293 8.03483C8.94252 8.03483 9.08223 8.17454 9.08223 8.38413C9.08223 8.59373 8.94252 8.73344 8.73293 8.73344H7.68498C7.47539 8.73344 7.33567 8.59373 7.33567 8.38413C7.33567 8.17454 7.47539 8.03483 7.68498 8.03483H8.73293Z" fill="#4A4A4A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1101_100">
                                            <rect width="21" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-[25px] font-[500]">Billing</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 md:py-5 md:px-5'>
                            <p className='text-[18px] font-[600]'>
                                Your Billing Details
                            </p>
                            <div className='px-5'>
                                <div className='flex items-center gap-2'>
                                    <p className='text-[18px] font-[600]'>
                                        Subscription:
                                    </p>
                                    <p className='text-[18px] font-[400]'>
                                        Free!
                                    </p>
                                </div>
                                <div className='flex items-center gap-2 pt-4'>
                                    <p className='text-[18px] font-[600]'>
                                        Refresh Date:                                    </p>
                                    <p className='text-[18px] font-[400]'>
                                        10/04/2023
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md  px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="31" viewBox="0 0 36 31" fill="none">
                            <g clip-path="url(#clip0_202_149)">
                                <path d="M35.3909 6.37794C34.9717 5.8365 34.4328 5.53568 33.774 5.47554L32.3368 5.30056V3.61052V2.40736C32.3368 1.08386 31.2589 0.000976566 29.9415 0.000976566H2.3953C1.07789 0.000906066 -2.38419e-07 1.08379 -2.38419e-07 2.40736V3.61059V8.42344V21.6587C-2.38419e-07 22.7453 0.726807 23.6692 1.716 23.9653C1.68582 25.1823 2.60239 26.2388 3.83256 26.3512L31.4985 29.4795C31.5584 29.4795 31.6782 29.4795 31.738 29.4795C32.9357 29.4795 34.0136 28.5771 34.1333 27.4341L35.9298 8.12261C35.9897 7.52096 35.81 6.85918 35.3909 6.37794ZM1.19768 4.21217H31.1392V5.77636V7.82179H1.19768V4.21217ZM2.3953 1.20414H29.9415C30.6002 1.20414 31.1392 1.74558 31.1392 2.40736V3.00894H1.19768V2.40736C1.19768 1.74558 1.73663 1.20414 2.3953 1.20414ZM1.19768 21.6586V9.02495H31.1392V21.6586C31.1392 22.3204 30.6003 22.8618 29.9415 22.8618H2.45523H2.39537C1.73663 22.8618 1.19768 22.3204 1.19768 21.6586ZM34.7321 7.88193L32.9356 27.1934C32.8758 27.8552 32.2769 28.3364 31.6182 28.2763L4.01214 25.1479C3.41333 25.0878 2.9941 24.6065 2.93425 24.0651H29.9415C31.2589 24.0651 32.3368 22.9822 32.3368 21.6587V8.42337V6.43808L33.7141 6.55842C34.0135 6.55842 34.3129 6.7389 34.4926 6.97952C34.6723 7.22014 34.7921 7.5811 34.7321 7.88193ZM19.1626 20.4554C18.8033 20.4554 18.5637 20.2148 18.5638 19.8539V14.4394C18.5638 14.0785 18.8033 13.8379 19.1626 13.8379H28.7439C29.1032 13.8379 29.3427 14.0785 29.3427 14.4394V19.8539C29.3427 20.2148 29.1032 20.4554 28.7439 20.4554H19.1626ZM19.7614 15.041V19.2522H28.1451V15.041H19.7614ZM2.99418 12.6346C2.63488 12.6346 2.39537 12.3939 2.39537 12.033C2.39537 11.672 2.63488 11.4314 2.99418 11.4314H7.78484C8.14414 11.4314 8.38365 11.672 8.38365 12.033C8.38365 12.3939 8.14414 12.6346 7.78484 12.6346H2.99418ZM10.1801 12.6346C9.82084 12.6346 9.58133 12.3939 9.58133 12.033C9.58133 11.672 9.82084 11.4314 10.1801 11.4314H14.9708C15.3301 11.4314 15.5696 11.672 15.5696 12.033C15.5696 12.3939 15.3301 12.6346 14.9708 12.6346H10.1801ZM2.99418 15.041C2.63488 15.041 2.39537 14.8004 2.39537 14.4394C2.39537 14.0785 2.63488 13.8379 2.99418 13.8379H10.7789C11.1382 13.8379 11.3778 14.0785 11.3778 14.4394C11.3778 14.8004 11.1382 15.041 10.7789 15.041H2.99418ZM14.9707 13.8378C15.33 13.8378 15.5695 14.0784 15.5695 14.4394C15.5695 14.8003 15.33 15.041 14.9707 15.041H13.1742C12.8149 15.041 12.5754 14.8003 12.5754 14.4394C12.5754 14.0784 12.8149 13.8378 13.1742 13.8378H14.9707Z" fill="#4A4A4A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_149">
                                    <rect width="36" height="31" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-[25px] font-[500]'>
                            Billing History
                        </p>
                        <div className='flex flex-col gap-4 w-full'>
                            <div className='flex justify-between items-center w-full'>
                                <div>
                                    <p className='text-[#4A4A4A]'>
                                        10/10/2023
                                    </p>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <p className='text-[#4A4A4A]'>
                                        $40
                                    </p>
                                    <p className='text-[#47C628] w-20'>
                                        BILLED
                                    </p>

                                </div>

                            </div>
                            <div className='flex justify-between items-center w-full'>
                                <div>
                                    <p className='text-[#4A4A4A]'>
                                        10/11/2023
                                    </p>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <p className='text-[#4A4A4A]'>
                                        $40
                                    </p>
                                    <p className='text-[#F4B513] w-20'>
                                        PENDING
                                    </p>

                                </div>

                            </div>
                            <div className='flex justify-between items-center  w-full'>
                                <div>
                                    <p className='text-[#4A4A4A]'>
                                        10/12/2023
                                    </p>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <p className='text-[#4A4A4A]'>
                                        $40
                                    </p>
                                    <p className='text-[#E40000] w-20'>
                                        FAILED
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        className=" flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5 md:px-10 pt-6 pb-10"
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
                                    <path d="M29.5546 15.4654L26.1326 8.13588L27.6098 8.5596C27.9342 8.6527 28.2727 8.46531 28.3655 8.14066C28.4586 7.81625 28.2712 7.47799 27.9468 7.38489L17.6759 4.43748C17.678 4.39355 17.6792 4.34963 17.6792 4.30547C17.6795 3.08587 16.8561 2.02001 15.6759 1.71278C14.4957 1.40532 13.257 1.93407 12.6624 2.99874L2.39049 0.051568C2.06608 -0.0415308 1.72758 0.146099 1.63448 0.470513C1.54162 0.794926 1.72901 1.13318 2.05343 1.22628L4.08059 1.80803L0.409396 9.6713C0.164474 9.757 -3.94033e-07 9.98807 -3.94033e-07 10.2478C-0.00071622 12.2318 1.19501 14.0202 3.02858 14.7776C4.86214 15.5353 6.97167 15.1123 8.37149 13.7065C9.30415 12.7973 9.83099 11.5505 9.83338 10.2478C9.83338 9.97423 9.65124 9.73408 9.38794 9.65984L5.97599 2.35206L12.3244 4.17346C12.3222 4.21738 12.321 4.2613 12.321 4.30571C12.3229 5.54917 13.1787 6.6284 14.389 6.91343V19.0184H12.7023C11.3545 19.0184 10.2335 20.1 10.2335 21.4481V21.8028C9.09933 22.0415 8.28508 23.0389 8.27791 24.1981V25.0536C8.28818 25.3985 8.56819 25.6745 8.91337 25.6795H21.0869C21.4321 25.6745 21.7121 25.3985 21.7223 25.0536V24.1981C21.7152 23.0389 20.9009 22.0415 19.7668 21.8028V21.4481C19.7668 20.1 18.6455 19.0184 17.298 19.0184H15.6112V6.91343C16.3436 6.74036 16.9698 6.26818 17.3379 5.61195L24.2549 7.59687L20.576 15.4768C20.3309 15.5625 20.1666 15.7936 20.1664 16.0531C20.1659 18.0371 21.3616 19.8255 23.1952 20.583C25.0288 21.3406 27.1381 20.9179 28.5379 19.5121C29.4705 18.6026 29.9976 17.3558 30 16.0531C30 15.7795 29.8179 15.5396 29.5546 15.4654ZM4.90129 2.9097L8.02822 9.60732H1.77461L4.90129 2.9097ZM4.90129 13.8973C3.10138 13.9078 1.56191 12.6063 1.27307 10.8295H8.55745C8.2464 12.6049 6.70383 13.8994 4.90129 13.8973ZM20.5001 24.1981V24.4573H9.50013V24.1981C9.50013 23.5242 10.073 22.9906 10.7467 22.9906H19.2535C19.9272 22.9906 20.5001 23.5242 20.5001 24.1981ZM18.5446 21.4481V21.7684H11.4557V21.4481C11.4557 20.7742 12.0286 20.2406 12.7023 20.2406H17.298C17.9716 20.2406 18.5446 20.7742 18.5446 21.4481ZM15.0001 5.76234C14.3787 5.76282 13.8254 5.36942 13.6218 4.78242C13.4182 4.19542 13.6089 3.54397 14.0968 3.1594C14.585 2.77483 15.2632 2.74188 15.7862 3.07752C16.3092 3.41291 16.562 4.04288 16.4162 4.64683C16.4007 4.6855 16.3892 4.72537 16.3818 4.76619C16.183 5.36059 15.6268 5.76163 15.0001 5.76234ZM28.1948 15.4129H21.9412L25.0679 8.71525L28.1948 15.4129ZM25.0679 19.7028C23.268 19.7133 21.7285 18.4118 21.4397 16.6351H28.7241C28.413 18.4104 26.8705 19.705 25.0679 19.7028Z" fill="#4A4A4A" />
                                </svg>
                                <p className="text-[25px] font-[500]">Plans</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-10'>
                            <div className='flex bg-white border-[#ADADAD] border rounded-lg flex-col text-center  justify-center items-center px-7 pt-7 pb-16'>
                                <div className='flex flex-col justify-center items-center gap-3 text-[black]'>
                                    <h1 className='text-[35px] font-[900]'>
                                        Plan Name
                                    </h1>
                                    <div className='flex items-center'>
                                        <span className='text-[36px] font-[800]'>$10</span>
                                        <p className='text-[#4A4A4A] font-[400] text-[25px]'>/month</p>
                                    </div>
                                    <p className='text-[#4A4A4A]'>or</p>
                                    <div className='flex items-center'>
                                        <span className='text-black font-[800] text-[20px]'>$100</span>
                                        <p className='text-[#4A4A4A] font-[400]'>/month</p>
                                    </div>
                                    <button
                                        onClick={showModal2}
                                        className="bg-[#FF5FC0] mb-3  text-white  py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Select
                                    </button>
                                    <div className='flex flex-col justify-center gap-2 items-center'>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                    </div>



                                </div>

                            </div>
                            <div className='flex bg-[#FF5FC0]  rounded-lg flex-col text-center  justify-center items-center px-7 pt-7 pb-16'>
                                <div className='flex flex-col justify-center items-center gap-3 text-white'>
                                    <h1 className='text-[35px] font-[900]'>
                                        Plan Name
                                    </h1>
                                    <div className='flex items-center'>
                                        <span className='text-[36px] font-[800]'>$10</span>
                                        <p className='text-white font-[400] text-[25px]'>/month</p>
                                    </div>
                                    <p className='text-white'>or</p>
                                    <div className='flex items-center'>
                                        <span className='text-white font-[800] text-[20px]'>$100</span>
                                        <p className='text-white font-[400]'>/month</p>
                                    </div>
                                    <button
                                        onClick={showModal2}
                                        className="bg-[#012B6D] mb-3  text-white  py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Select
                                    </button>
                                    <div className='flex flex-col justify-center gap-2 items-center text-white'>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                    </div>



                                </div>

                            </div>
                            <div className='flex bg-white border-[#ADADAD] border rounded-lg flex-col text-center  justify-center items-center px-7 pt-7 pb-16'>
                                <div className='flex flex-col justify-center items-center gap-3 text-[black]'>
                                    <h1 className='text-[35px] font-[900]'>
                                        Plan Name
                                    </h1>
                                    <div className='flex items-center'>
                                        <span className='text-[36px] font-[800]'>$10</span>
                                        <p className='text-[#4A4A4A] font-[400] text-[25px]'>/month</p>
                                    </div>
                                    <p className='text-[#4A4A4A]'>or</p>
                                    <div className='flex items-center'>
                                        <span className='text-black font-[800] text-[20px]'>$100</span>
                                        <p className='text-[#4A4A4A] font-[400]'>/month</p>
                                    </div>
                                    <button
                                        onClick={showModal2}
                                        className="bg-[#FF5FC0] mb-3  text-white  py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Select
                                    </button>
                                    <div className='flex flex-col justify-center gap-2 items-center'>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                        <p className='text-[18px] font-[500] flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#012B6D" />
                                            </svg>
                                            Offer Included
                                        </p>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5 md:px-10 pt-6 pb-6"
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <p className='text-[18px] font-[500]'>
                            Let your customers pay you with ease using our ecommerce social media payment system                       </p>
                            <button                                         className="bg-[#012B6D] mb-3  text-white  py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
>

                                Get Paid
                            </button>
                    </div>

                </div>
                <Modal
                    title={null}
                    closable={false}
                    visible={open2}
                    centered
                    onCancel={handleCancel2}
                    width={700}
                    wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                    footer={[
                        <Button
                            key="cancel"
                            className="text-[18px] mt-32 h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                            onClick={handleCancel2}
                        >
                            Cancel
                        </Button>,
                    ]}
                >
                    <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                        <h1 className="text-[25px] text-white">Sign Up for a Subscription</h1>
                    </div>
                    <div>
                        <div className='flex flex-col gap-4 pt-6'>
                            <p className='text-[16px] font-[500]'>
                                Thankyou for a choosing to purchase a subscription to Social Reach Pro!
                            </p>
                            <p className='text-[16px]'>
                                You will be charged today to begin your subscription, and your card will be charged automatically when your pre-paid month (or year) ends.
                            </p>
                            <p className='text-[16px]'>
                                Vizzlie does not offer refunds, however you can cancel your subscription at any time and enjoy your paid benefits until what would have been your renewal date.

                            </p>

                        </div>
                        <div className='flex flex-col justify-center items-center text-center pt-6'>
                            <p>
                                Subscription Level: <span className='font-[500]'>
                                    Core
                                </span>
                            </p>
                            <button onClick={() => { showModal3(); handleCancel2(); }} className="bg-[#012B6D] my-3 hover:bg-blue-900 text-white  py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
                            >
                                Purchase Monthly Subscription ($10/mo)
                            </button>
                            <p>
                                -or-
                            </p>
                            <button onClick={() => { showModal3(); handleCancel2(); }} className="bg-[#012B6D] my-3 hover:bg-blue-900 text-white  py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
                            >
                                Purchase Annual Subscription ($100/yr)
                            </button>

                        </div>

                    </div>
                </Modal>
                <Modal
                    title={null}

                    closable={false}
                    visible={open3}
                    centered
                    onCancel={handleCancel3}

                    wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                    footer={null}
                >

                    <div>
                        <div class="modal">
                            <form class="form">

                                <div class="credit-card-info--form">
                                    <div class="input_container">
                                        <label for="password_field" class="input_label">Card holder full name</label>
                                        <input id="password_field" class="input_field" type="text" name="input-name" title="Inpit title" placeholder="Enter your full name" />
                                    </div>
                                    <div class="input_container">
                                        <label for="password_field" class="input_label">Card Number</label>
                                        <input id="password_field" class="input_field" type="number" name="input-name" title="Inpit title" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div class="input_container">
                                        <label for="password_field" class="input_label">Expiry Date / CVV</label>
                                        <div class="split">
                                            <input id="password_field" class="input_field" type="text" name="input-name" title="Expiry Date" placeholder="01/23" />
                                            <input id="password_field" class="input_field" type="number" name="cvv" title="CVV" placeholder="CVV" />
                                        </div>
                                    </div>
                                </div>
                                <button class="purchase--btn">Checkout</button>
                            </form>
                        </div>
                    </div>
                </Modal>

            </ManagerLayout>
        </div>
    )
}

export default BillingManager