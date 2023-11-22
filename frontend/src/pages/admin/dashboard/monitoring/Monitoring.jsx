import React from 'react'
import AdminLayout from '../../../../components/layout/AdminLayout'

const Monitoring = () => {
    return (
        <div>
            <AdminLayout>

                <div className='bg-[#EFF6F9] md:pt-20 md:pb-40 py-10 px-5 md:py-20 w-full md:px-20'>
                    <h1 className='text-black text-[25px] font-[500]'>
                        Monitoring Dashboard
                    </h1>
                    <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='bg-[#C3FDAF] mt-5 rounded-lg p-5 w-full'>
                        <p className='text-[20px] text-[#343434]'>
                            Server Status: Online
                        </p>
                    </div>
                    <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='bg-[#BEECFF] mt-5 rounded-lg p-5 w-full'>
                        <p className='text-[20px] text-[#343434]'>
                            Database Status: Connected
                        </p>
                    </div>
                    <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='bg-white w-full gap-5 rounded-lg p-5 mt-10'>
                        <p className='text-[20px] text-black font-[600]'>
                            API Integrations
                        </p>
                        <div className='w-full flex md:flex-row flex-col mt-5 md:items-center md:justify-between'>
                            <p className='text-[20px] text-[#28B43E]'>
                                Integration 1
                            </p>
                            <p className='bg-[#28B43E] text-[20px] rounded-md text-white font-[500] py-2 px-10'>
                                Connected
                            </p>
                        </div>
                        <div className='w-full flex md:flex-row flex-col mt-5 md:items-center md:justify-between'>
                            <p className='text-[20px] text-[#C80F0F]'>
                                Integration 1
                            </p>
                            <p className='bg-[#C80F0F] rounded-md text-[20px] text-white font-[500] py-2 px-10'>
                                Disconnected
                            </p>

                        </div>


                    </div>
                </div>
            </AdminLayout>
        </div>
    )
}

export default Monitoring