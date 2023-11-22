import React, { useState } from 'react'
import AdminLayout from '../../../../components/layout/AdminLayout'

const Payment = () => {
    const [selectedPlan, setSelectedPlan] = useState('Core');
    const handleStatusChange = (event) => {
        setSelectedPlan(event.target.value);
    };
    return (
        <div>
            <AdminLayout>
                <div className='bg-[#EFF6F9] text-black py-10 w-full px-10'>
                    <p className='text-[25px]  font-[400]'>
                        Billing & Payment
                    </p>
                    <p className='text-[20px] font-[600] pt-10'>
                        Subscription Plan
                    </p>
                    <p className='text-[#8B8B8B] text-[20px]'>
                        Current Plan:
                        <span className='text-[#25BE62]'> {selectedPlan}</span>
                    </p>
                    <div className='flex items-center gap-3 pt-3'>
                        <p className='text-[#8B8B8B] text-[20px]'>
                            Select Plan:
                        </p>
                        <select
                            id="status"
                            name="status"
                            className="block w-32 px-4  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:border-indigo-500"
                            value={selectedPlan}
                            onChange={handleStatusChange}
                        >
                            <option value="Core">Core</option>
                            <option value="Basic">Basic</option>
                            <option value="Pro">Pro</option>
                        </select>
                    </div>
                    <button className='bg-[#012B6D] my-10 px-10 py-3 text-white rounded-md text-[20px] font-[600]'>
                        Update Plan
                    </button>
                    <p className='text-[20px] font-[600] pt-10'>
                        Subscription Plan
                    </p>
                    <div className='border mt-5 text-[#8B8B8B] text-[400] border-[#D9D9D9]'>
                        <thead>
                            <tr className=' flex '>
                                <th className="py-2 px-5 md:px-40 border-r bg-transparent text-center text-[400]">ID</th>
                                <th className="py-2 px-5 md:px-40 border-r bg-transparent text-center  text-[400]">Date</th>
                                <th className="py-2 px-5 md:px-40 border-r bg-transparent text-center text-[400]">Amount</th>
                            </tr>
                        </thead>

                    </div>
                    <p className='text-[20px] font-[600] pt-10'>
                        Payment History
                    </p>
                    <div className='border mt-5 text-[#8B8B8B] text-[400] border-[#D9D9D9]'>
                        <thead>
                            <tr className=' flex '>
                                <th className="py-2 px-5 md:px-40 border-r bg-transparent text-center text-[400]">ID</th>
                                <th className="py-2 px-5 md:px-40 border-r bg-transparent text-center  text-[400]">Date</th>
                                <th className="py-2 px-5 md:px-40 border-r bg-transparent text-center text-[400]">Amount</th>
                            </tr>
                        </thead>

                    </div>
                    <button className='bg-[#25BE62] my-10 px-10 py-3 text-white rounded-md text-[20px] font-[600]'>
                        Generate Invoices
                    </button>
                    <div style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} className='w-full bg-white rounded-lg  flex flex-col gap-5 p-5'>
                        <p className='text-[20px] font-[600]'>
                            Handle Dispute or Refund
                        </p>
                        <div className='flex items-center gap-3'>
                            <p>
                                Dispute Reason:
                            </p>
                            <input type="text" className='p-3 w-40 md:w-64 focus:outline-none rounded-md border border-[#D9D9D9]' />

                        </div>
                        <div className='flex items-center gap-3'>
                            <p>
                                Refund Amount:
                            </p>
                            <input type="text" className='p-3 w-40 md:w-64 focus:outline-none rounded-md border border-[#D9D9D9]' placeholder='0' />

                        </div>
                        <button className='bg-[#DF0707] max-w-[300px] my-10  py-3 text-white rounded-md text-[20px] font-[600]'>
                            Submit Dispute or Refund
                        </button>

                    </div>
                </div>
            </AdminLayout>
        </div>
    )
}

export default Payment