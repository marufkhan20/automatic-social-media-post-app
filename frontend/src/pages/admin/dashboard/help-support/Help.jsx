import React, { useState } from 'react'
import AdminLayout from '../../../../components/layout/AdminLayout'
import Message from './Message';

const Help = () => {
    const [selectedTicket, setSelectedTicket] = useState('Ticket #1');
    const [selectedStatus, setSelectedStatus] = useState('Open');
    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };
    const [selectedAgent, setSelectedAgent] = useState('Agent 1');

    const handleTicketChange = (ticket) => {
        setSelectedTicket(ticket);
    };

    const handleAgentChange = (event) => {
        setSelectedAgent(event.target.value);
    };
    const agents = ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4'];
    return (
        <AdminLayout>
            <div className='flex flex-col bg-[#EFF6F9] w-full   px-6 py-10 md:px-20'>
                <h1 className='text-[25px] font-[500] text-black'>
                    Help & Support
                </h1>
                <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='mt-7 w-full gap-7 bg-white rounded-[8px] p-5 flex flex-col'>
                    <p className='text-[20px] font-[600] text-black'>
                        Create New Ticket
                    </p>
                    <button className='bg-[#012B6D] w-[216px] py-3 text-white font-[500] rounded-md' >
                        Create Ticket
                    </button>


                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 mt-10'>
                    {Array.from({ length: 3 }, (_, index) => (
                        <div
                            key={index}
                            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                            className='bg-white cursor-pointer rounded-[8px] p-5 flex flex-col gap-5'
                        >
                            <div>
                                <p className='text-[20px] font-[600] text-black'>Open Tickets</p>
                            </div>
                            <div
                                className='w-full border p-3 rounded-md border-[#D9D9D9] text-[#D9D9D9] text-[18px] font-[600]'
                                onClick={() => handleTicketChange(`Ticket #${index + 1}`)}
                            >
                                <p>Ticket #{index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='mt-7 w-full gap-4 text-[#8B8B8B] bg-white rounded-[8px] p-5 flex flex-col'>
                    <p className='text-[20px] font-[600] text-black'>
                        Selected Ticket
                    </p>

                    <p>
                    {selectedTicket}
                    </p>
                    <p>
                        Status: {selectedStatus}
                    </p>
                    <p>
                        Assigned Agent: {selectedAgent}

                    </p>
                    <div className='flex items-center gap-3'>
                        <label htmlFor="status" className="text-[#8B8B8B]">
                            Change Status:
                        </label>
                        <select
                            id="status"
                            name="status"
                            className="block w-64 px-4 ml-2 focus:outline-none py-2 mt-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:border-indigo-500"
                            value={selectedStatus}
                            onChange={handleStatusChange}
                        >
                            <option value="Open">Open</option>
                            <option value="Close">Close</option>
                            <option value="In Progress">In Progress</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-3'>
                        <label htmlFor="agent" className="text-[#8B8B8B]">
                            Assigned Agent:
                        </label>
                        <select
                            id="agent"
                            name="agent"
                            className="block w-64 px-4 focus:outline-none py-2 mt-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:border-indigo-500"
                            value={selectedAgent}
                            onChange={handleAgentChange}
                        >
                            {agents.map((agent) => (
                                <option key={agent} value={agent}>
                                    {agent}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Message/>
                </div>



            </div>

        </AdminLayout>
    )
}

export default Help