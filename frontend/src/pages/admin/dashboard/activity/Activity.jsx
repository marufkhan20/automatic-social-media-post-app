import React from 'react'
import AdminLayout from '../../../../components/layout/AdminLayout'

const Activity = () => {
    const activityLogData = [
        {
            timestamp: '2023-09-11 10:30:00',
            userOrManager: 'User 1',
            activity: 'Logged in',
        },
        {
            timestamp: '2023-09-11 10:30:00',
            userOrManager: 'User 2',
            activity: 'Updated Profile',
        },
        {
            timestamp: '2023-09-11 10:30:00',
            userOrManager: 'Manager',
            activity: 'Created New Project',
        },
    ];
    return (
        <div>
            <AdminLayout>
                <div className='flex flex-col bg-[#EFF6F9] w-full  h-[90vh] px-6 py-10 md:px-20'>
                    <div className='w-full flex md:flex-row flex-col gap-5 md:gap-0 md:items-center md:justify-between'>
                        <h1 className='text-[24px] text-black font-[500]'>
                            All Approved Managers
                        </h1>
                        <button className='bg-[#012B6D] px-10 py-3 text-white font-[500] rounded-md' >
                            + Add User
                        </button>
                    </div>
                    <div className='bg-white w-full px-3 rounded-md mt-6 overflow-x-scroll md:overflow-hidden overflow-y-hidden'>
                        <table className="min-w-full text-center  ">
                            <thead className='border-b w-full'>
                                <tr>
                                    <th className="px-6 py-3 bg-white border-r font-[600]  md:text-[20px]   text-black uppercase tracking-wider">
                                        TIMESTAMP
                                    </th>
                                    <th className="px-6 py-3 bg-white border-r font-[600] md:text-[20px]   text-black uppercase tracking-wider">
                                        USER/MANAGER
                                    </th>
                                    <th className="px-6 py-3 bg-white  font-[600] md:text-[20px]   text-black uppercase tracking-wider">
                                        ACTIVITY
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {activityLogData.map((log, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 md:text-[20px] whitespace-no-wrap border-r text-black">{log.timestamp}</td>
                                        <td className="px-6 py-4 md:text-[20px] whitespace-no-wrap border-r text-black">{log.userOrManager}</td>
                                        <td className="md:px-6 py-4 md:text-[20px] whitespace-no-wrap  text-black">
                                            <span className='bg-[#19E351] md:font-[500] rounded-md py-3 md:px-5 text-white'>

                                                {log.activity}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </div>
            </AdminLayout>
        </div>
    )
}

export default Activity