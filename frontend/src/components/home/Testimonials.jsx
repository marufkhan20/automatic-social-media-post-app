import React from 'react'
import Wrapper from "../shared/Wrapper"

const Testimonials = () => {
    return (
        <div className=' flex flex-col justify-center items-center w-full bg-[#EEE] py-20 my-20'>
            <h1 className='text-[36px] font-[800] text-[#012B6D]'>
                Testimonials
            </h1>
            <div className='flex md:flex-row flex-col justify-center items-center mt-9 md:mt-0'>
            

                <div className='flex flex-col justify-center items-center text-center w-full md:w-1/2 px-5 md:px-10'>
                    <img src="/images/ceo.png" alt="" className='w-[107px]' />
                    <p className='text-[32px] font-[800] py-1'>Martha V.</p>
                    <p className='text-[20px] italic py-3'>CEO of NCA Network</p>
                    <p className='text-[20px] italic'>“Testimonial Text Here Testimonial Text Here Testimonial Text Here
                        Testimonial Text Here Testimonial Text Here Testimonial Text Here <br />
                        Testimonial Text Here”

                    </p>

                </div>
         
                <div className='flex flex-col justify-end items-end w-full md:w-1/2 relative   py-10'>
                    <div className='w-[320px] md:w-[394px] bg-[#012B6D] h-[300px] md:h-[600px]'>
                    </div>

                        <img src="/images/mockup.png" alt=""  className='absolute md:w-[700px] '/>


                </div>

            </div>
        </div>
    )
}

export default Testimonials