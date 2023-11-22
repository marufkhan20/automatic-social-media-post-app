import { RevealWrapper } from 'next-reveal'
import React from 'react'

const ReachCards = () => {
    const data = [
        {
            title: `SocialReachPro  is FUN`,
            desc: 'SocialReachPro has a strong sense of community built into it. You can share graphics and templates with your team members to help get off the ground running, or to inspire each other with new ideas.',
            bg: '#012B6D',
        },
        {
            title: 'SocialReachPro is EASY',
            desc: `SocialReachPro was made with you in mind. We know you don't want to spend hours learning the ins and outs of a new system. That's why we walk you through a test party. It only takes a few minutes, and at the end of it, you'll understand how Marketing Madness works.`,
            bg: '#1955B4',
        },
        {
            title: 'SocialReachPro is POWERFUL',
            desc: 'From scheduled posting to Facebook - to automatically sending texts & emails to hostesses and new recruits, SocialReachPro offers a vast array of services to help you with your Facebook party business.',
            bg: '#5295FF',
        }
    ]
    return (
        <div className='bg-image2 flex flex-col md:flex-row justify-center items-center mt-32 mb-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-white'>
                {
                    data.map((item, i) => (
                        <RevealWrapper key={i}  origin='bottom' delay={200} duration={1000} distance='500px' reset={false} >

                        <div  className='flex flex-col cursor-pointer ease-in duration-300 hover:scale-105 w-[327px] h-[400px] py-5 px-5' style={{background: `${item.bg}`}}>
                            <h1 className='text-[32px] font-[800] text-center px-4 pb-8'>
                                {item.title}
                            </h1>
                            <p className='font-[500] text-left'>
                                {item.desc}
                            </p>
                        </div>
                        </RevealWrapper>
    

                    ))
                }

            </div>

        </div>
    )
}

export default ReachCards