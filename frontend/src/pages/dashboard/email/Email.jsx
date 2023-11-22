import React, { useMemo, useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'
import { IoMdAdd } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdManageHistory } from "react-icons/md"
import { GoPlay } from 'react-icons/go'
import { FiPauseCircle } from 'react-icons/fi'
import Accordion from '../Accordion'
import { Button, Modal } from 'antd'
import spacetime from 'spacetime'
import TimezoneSelect, { allTimezones } from "react-timezone-select";
const Email = () => {
    const accordionItems = [
        {
            title: 'Hidden Campaigns',
            content: 'You dont have any hidden campaigns.',
        },
    ];
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };


    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    const [tz, setTz] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    );
    const [datetime, setDatetime] = useState(spacetime.now());

    useMemo(() => {
        const tzValue = tz.value ?? tz;
        setDatetime(datetime.goto(tzValue));
    }, [tz]);
    return (
        <div>
            <div>
                <DashboardLayout>
                    <div
                        className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5  pt-6 pb-10"
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <IoMdAdd size={35} />
                                <p className="text-[25px] font-[500]">New Campaign</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>

                            <button onClick={showModal} className='px-6 flex  flex-row items-center gap-3 h-[35px] group rounded-md text-white font-[400] md:font-[500] hover:bg-transparent border border-transparent hover:border-[#012B6D] transition-all duration-300 ease-in hover:text-[#012B6D] bg-[#012B6D]'>
                                <AiOutlinePlus size={20} className="text-white group-hover:text-[#012B6D]" />
                                New Campaign
                            </button>
                            <button className='border hover:text-white ease-in flex items-center gap-1 justify-center  text-[#ADADAD] group duration-300 transition-all hover:bg-[#ADADAD] rounded-md border-[#ADADAD] w-[130px] h-[33px]' >
                                <MdManageHistory className='text-[#ADADAD] group-hover:text-white' size={20} />
                                Manage

                            </button>
                        </div>
                        <p className='text-xs px-10'>
                            You dont have any campaigns.
                        </p>
                    </div>
                    <div
                        className="flex flex-col justify-start items-start mt-5 gap-5 w-full bg-white rounded-md  px-5  pt-6 pb-10"
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <GoPlay size={35} />
                                <p className="text-[25px] font-[500]">Active Campaigns</p>
                            </div>
                        </div>

                        <p className='text-xs px-10'>
                            You dont have any campaigns.
                        </p>
                    </div>
                    <div
                        className="flex flex-col justify-start items-start mt-5 gap-5 w-full bg-white rounded-md  px-5  pt-6 pb-10"
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <FiPauseCircle size={35} />
                                <p className="text-[25px] font-[500]">Paused Campaigns</p>
                            </div>
                        </div>

                        <p className='text-xs px-10'>
                            You dont have any campaigns.
                        </p>
                    </div>
                    <div className='flex flex-col mt-5 justify-start items-start gap-3 w-full bg-white rounded-md  px-5 md:px-10 py-6' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <div className='w-full'>
                            <Accordion items={accordionItems} />
                        </div>
                    </div>
                </DashboardLayout>
            </div>
            <Modal
                title={null}
                closable={false}
                visible={open}
                centered
                onCancel={handleCancel}
                width={700}
                wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                footer={[
                    <Button
                        type="submit"
                        key="ok"
                        className="bg-[#012B6D] h-[48px] w-[122px] text-[18px] rounded-md text-white"
                        onClick={handleOk}
                    >
                        Create
                    </Button>,
                    <Button
                        key="cancel"
                        className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>,
                ]}
            >
                <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                    <h1 className="text-[25px] text-white">Create New Campaign</h1>
                </div>
                <div className='my-5'>
                    <div className="container mx-auto p-4">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Title (max 75 characters):
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    maxLength="75"
                                    required
                                    className="border focus:outline-none focus:ring-1 ring-blue-500 rounded-md px-3 py-2 w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                                    Start Time:
                                </label>
                                <input
                                    type="datetime-local"
                                    id="startTime"
                                    name="startTime"
                                    required
                                    className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 ring-blue-500 w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description (max 500 characters):
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="4"
                                    maxLength="500"
                                    required
                                    className="border rounded-md px-3 focus:outline-none focus:ring-1 ring-blue-500 py-2 w-full"
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                                    Timezone:
                                </label>
                                <div className="timezone--wrapper">
                                    <TimezoneSelect
                                        value={tz}
                                        onChange={setTz}
                                        className="focus:outline-none"

                                        timezones={{
                                            ...allTimezones,
                                            "America/Lima": "Pittsburgh",
                                            "Europe/Berlin": "Frankfurt",
                                        }}
                                    />
                                </div>
                            </div>

                        </form>
                    </div>

                </div>

            </Modal>
        </div>
    )
}

export default Email

