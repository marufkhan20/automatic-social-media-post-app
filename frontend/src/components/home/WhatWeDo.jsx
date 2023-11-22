import React from 'react'

const WhatWeDo = () => {
    const data = [
        {
            id: 1,
            title: 'Scheduled Facebook Posts & Comments',
            desc: 'Schedule automated posts and comments to your Facebook parties and business pages. Now you can pay less attention to preparing your posts on the spot, and spend more time interacting with your party guests.',
            bg: '#fff',
            text: '#1E1E1E',
            img: '/images/card1.png'
        },
        {
            id: 2,
            title: 'Scheduled Instagram Posts',
            desc: 'Auto posting to Instagram allows you to provide value to your customers and connect with them by putting a face to your brand without taking over your day.',
            bg: '#E744A6',
            text: 'white',
            img: '/images/icon2.png'
        },
        {
            id: 3,
            title: 'Multi-Image Support',
            desc: 'Marketing Madness allows you to set up a single Facebook post to have as many images attached to it as you need.',
            bg: '#E744A6',
            text: 'white',
            img: '/images/icon3.png'
        },
        {
            id: 4,
            title: 'Adjust Posts on The Fly',
            desc: `As your Facebook party dragging on, or maybe it's going amazing? Adjust your upcoming scheduled posts to either slow down or speed up!`,
            bg: '#fff',
            text: '#1E1E1E',
            img: '/images/icon4.png'
        },
        {
            id: 5,
            title: 'Party Templates',
            desc: `Do you follow a template with your parties? With Marketing Madness, you can easily create and update your party templates. When they are ready to be used you can bring them into your Facebook Groups and Pages. Reuse them over and over to save precious pre-party planning.`,
            bg: '#fff',
            text: '#1E1E1E',
            img: '/images/icon5.png'
        },
        {
            id: 6,
            title: 'Share Content',
            desc: `With Marketing Madness, it is easy to share your templates and images with friends. Every template and image folder has a 'share code'. Pass this code to a friend, co-worker, or downline and they can easily bring in your content into their account.`,
            bg: '#E744A6',
            text: 'white',
            img: '/images/icon6.png'
        },
        {
            id: 7,
            title: 'Free Tier',
            desc: `We don't want to make money unless you are. If you are new to the business, or if you're just going to take a break, you can stay on our free plan and still run a limited number of parties per month. There's no penalty to switching back and forth between a subscription and the free tier.`,
            bg: '#E744A6',
            text: 'white',
            img: '/images/icon7.png'
        },
        {
            id: 8,
            title: 'Referral Bonuses',
            desc: `Everybody is given a referral code when they sign up. Earn referral tokens by recruiting downlines, friends, and co-workers to join Marketing Madness. Every two referrals are worth $10 off your next subscription payment!`,
            bg: '#fff',
            text: '#1E1E1E',
            img: '/images/icon8.png'
        },
    ]
    return (
        <div  className="flex flex-col justify-center items-center">
            <h1 className='text-[36px] font-[700] text-[#012B6D]'>What We Do</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 relative gap-20 mt-16">
                {data.map((item, index) => (
                    <div  key={index} className={` ${index % 2 === 0 ? "" : "md:mt-40 "}`}>
                        <img src={item.img} alt="" className={`w-[100px] relative z-[-999] ${index % 2 === 0 ? "" : "md:ml-[25rem]"}`}  />
                    <div className={`w-[320px] md:w-[548px] p-5 shadow-md rounded-md z-50 mt-[-2rem]`} style={{ background: `${item.bg}`, color: `${item.text}` }}>
                        <p className="text-[24px] font-[700] ">{item.title}</p>
                        <p className="text-[18px] font-[500] ">{item.desc}</p>
                        {index < data.length - 1 && (
                            <div key={`marker-${index}`} className="absolute top-1 md:left-1/2 md:block hidden">
                                <div className=" w-0.5 bg-[#012B6D] absolute left-1/2 h-[1900px]"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-20"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>
                                <div className="w-4 h-4 bg-[#012B6D] rounded-full mt-32"></div>



                            </div>
                        )}
                    </div>
                    </div>
                ))}

                
            </div>
        </div>




    )
}

export default WhatWeDo