import React, { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { Button, Modal } from 'antd';
import { DatePicker } from 'antd';
import ManagerLayout from '../../components/layout/ManagerLayout';



function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

const InstagramManager = () => {
    const [modal2Open, setModal2Open] = useState(false);
    const [open2, setOpen2] = useState(false);

    const showModal2 = () => {
        setOpen2(true);
    };

    const handleOk2 = (e) => {
        console.log(e);
        setOpen2(false);
    };

    const handleCancel2 = (e) => {
        console.log(e);
        setOpen2(false);
    };
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <ManagerLayout>
            <div className='flex flex-col gap-y-10 items-start justify-start'>
                <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path d="M20.4231 0H6.57692C2.94459 0 0 2.94459 0 6.57692V20.4231C0 24.0554 2.94459 27 6.57692 27H20.4231C24.0554 27 27 24.0554 27 20.4231V6.57692C27 2.94459 24.0554 0 20.4231 0ZM6.57692 1.03846H20.4231C23.4819 1.03846 25.9615 3.51812 25.9615 6.57692V20.4231C25.9615 23.4819 23.4819 25.9615 20.4231 25.9615H6.57692C3.51812 25.9615 1.03846 23.4819 1.03846 20.4231V6.57692C1.03846 3.51812 3.51812 1.03846 6.57692 1.03846Z" fill="#4A4A4A" />
                            <path d="M13.5 6.05769C9.38973 6.05769 6.05769 9.38973 6.05769 13.5C6.05769 17.6103 9.38973 20.9423 13.5 20.9423C17.6103 20.9423 20.9423 17.6103 20.9423 13.5C20.9423 9.38973 17.6103 6.05769 13.5 6.05769ZM13.5 7.09615C17.0367 7.09615 19.9038 9.96325 19.9038 13.5C19.9038 17.0367 17.0367 19.9038 13.5 19.9038C9.96325 19.9038 7.09615 17.0367 7.09615 13.5C7.09615 9.96325 9.96325 7.09615 13.5 7.09615Z" fill="#4A4A4A" />
                            <path d="M22.1538 2.59615C20.9112 2.59615 19.9038 3.60351 19.9038 4.84615C19.9038 6.08879 20.9112 7.09615 22.1538 7.09615C23.3965 7.09615 24.4038 6.08879 24.4038 4.84615C24.4038 3.60351 23.3965 2.59615 22.1538 2.59615ZM22.1538 3.63461C22.823 3.63461 23.3654 4.17704 23.3654 4.84615C23.3654 5.51527 22.823 6.05769 22.1538 6.05769C21.4847 6.05769 20.9423 5.51527 20.9423 4.84615C20.9423 4.17704 21.4847 3.63461 22.1538 3.63461Z" fill="#4A4A4A" />
                        </svg>
                        <p className='text-[25px] font-[500]'>
                            Instagram
                        </p>
                    </div>

                    <div className='flex flex-col gap-10 w-full my-5'>

                        <button className='w-[210px] h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#012B6D] transition-all duration-300 ease-in hover:text-[#012B6D] bg-[#012B6D]'>
                            Connect Your Instagram
                        </button>
                        <button onClick={() => setModal2Open(true)} className='w-[151px] h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0] bg-[#FF5FC0]'>
                            Schedule a Post
                        </button>
                        <Modal
                            className='md:max-w-[350px]'
                            centered
                            open={modal2Open}
                            onOk={() => setModal2Open(false)}
                            onCancel={() => setModal2Open(false)}
                            footer={null}

                        >
                            <div className='flex flex-col gap-6 p-5 justify-center items-center '>
                                <div className='w-[296px] h-[153px] flex items-center justify-center border border-[#ADADAD]'>
                                    <p>
                                        <img src="/images/meet.jpg" alt="" className='w-[270px] h-[130px] object-cover' />
                                    </p>
                                </div>
                                <button className='w-[210px] h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#012B6D] transition-all duration-300 ease-in hover:text-[#012B6D] bg-[#012B6D]'>
                                    Import post from template
                                </button>
                                <DatePicker showTime onChange={onChange} onOk={onOk} />
                                <button onClick={() => setModal2Open(false)} className='w-[151px]  h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0] bg-[#FF5FC0]'>
                                    Schedule
                                </button>
                            </div>
                        </Modal>




                    </div>

                </div>
                <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clip-path="url(#clip0_1301_25)">
                                <path d="M0 26.8041C0 28.549 1.42041 29.9633 3.15918 29.9633H26.8041C28.549 29.9633 29.9633 28.5429 29.9633 26.8041V3.15918C29.9633 1.41429 28.5429 0 26.8041 0H3.15918C1.41429 0 0 1.42041 0 3.15918V26.8041ZM26.8041 28.4633H3.15918C2.24694 28.4633 1.5 27.7163 1.5 26.8041V22.8551L7.18163 17.1735L12.0367 22.0286C12.3306 22.3224 12.802 22.3224 13.0959 22.0286L21.8633 13.2612L28.4633 19.8612V26.8041C28.4633 27.7163 27.7163 28.4633 26.8041 28.4633ZM3.15918 1.5H26.8041C27.7163 1.5 28.4633 2.24694 28.4633 3.15918V17.7367L22.3898 11.6694C22.0959 11.3755 21.6245 11.3755 21.3306 11.6694L12.5633 20.4367L7.70816 15.5816C7.41429 15.2878 6.94286 15.2878 6.64898 15.5816L1.5 20.7306V3.15918C1.5 2.24694 2.24694 1.5 3.15918 1.5ZM9.28776 12.0061C11.3939 12.0061 13.102 10.2918 13.102 8.19184C13.102 6.09184 11.3878 4.37755 9.28776 4.37755C7.18776 4.37755 5.47347 6.09184 5.47347 8.19184C5.47347 10.2918 7.18163 12.0061 9.28776 12.0061ZM9.28776 5.87755C10.5673 5.87755 11.602 6.91837 11.602 8.19184C11.602 9.46531 10.5612 10.5061 9.28776 10.5061C8.01429 10.5061 6.97347 9.46531 6.97347 8.19184C6.97347 6.91837 8.00816 5.87755 9.28776 5.87755Z" fill="#4A4A4A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1301_25">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-[25px] font-[500]'>
                            Your Scheduled Posts
                        </p>
                    </div>
                    <div className='w-[296px] h-[153px] flex items-center justify-center border border-[#ADADAD]'>
                        <img src="/images/meet.jpg" alt="" className='w-[270px] h-[130px] object-cover' />

                    </div>
                    <p className='text-[#7E97A5] pt-3'>
                        Sep 6, 2023  6:00PM
                    </p>
                    <button onClick={showModal2} className='w-[151px] mt-5 h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0] bg-[#FF5FC0]'>
                        Reschedule
                    </button>
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
                            onClick={handleOk2}
                        >
                            Ok
                        </Button>,
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
                        <h1 className="text-[25px] text-white">Rescheduled Post</h1>
                    </div>
                    <div>
                        <div
                            className="mt-4 p-4 rounded-[9px] flex justify-between items-center w-full"
                            style={{ background: "rgba(173, 173, 173, 0.06)" }}
                            onClick={() => setShowCalendar(!showCalendar)}
                        >
                            <div className="flex items-start gap-5">
                                <img src="/images/meet.jpg" alt="" className="w-[100px] h-[100px] object-cover" />
                                <p className="text-[18px] font-[700]">Post 1</p>
                            </div>
                        </div>

                        {showCalendar && (
                            <div className="mt-2 p-2 flex items-center gap-3 rounded-lg shadow-md">
                                <DatePicker showTime onChange={onChange} onOk={onOk} />
                                <button onClick={() => setModal2Open(false)} className='w-[151px]  h-[35px] rounded-md text-white font-[500] hover:bg-transparent border border-transparent hover:border-[#FF5FC0] transition-all duration-300 ease-in hover:text-[#FF5FC0] bg-[#FF5FC0]'>
                                    Reschedule
                                </button>
                            </div>
                        )}
                    </div>
                </Modal>

            </div>
        </ManagerLayout>
    )
}

export default InstagramManager