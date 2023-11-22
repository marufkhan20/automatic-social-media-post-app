import React from 'react'
import Wrapper from "../shared/Wrapper"
const Plan = () => {
  const data = [
    {
      id: 1,
      title: 'Pro',
      features: [
        {
          feature: '20 users included',
        },
        {
          feature: '5GB of storage',
        },
        {
          feature: 'Email support',
        },
        {
          feature: 'Help center Access',
        },
        {
          feature: 'Phone support',
        },
        {
          feature: 'Community Access',
        },
      ],
      price: '30',
    bg:'white',
    text: '#1E1E1E',
    },
    {
      id: 2,
      bg: '#FF5FC0',
      text:'white',
      title: 'PRO',
      features: [
        {
          feature: '20 users included',
        },
        {
          feature: '5GB of storage',
        },
        {
          feature: 'Email support',
        },
        {
          feature: 'Help center Access',
        },
        {
          feature: 'Phone support',
        },
        {
          feature: 'Community Access',
        },
      ],
      price: '30'
    },
    {
      id: 3,
      title: 'Pro',
      features: [
        {
          feature: '20 users included',
        },
        {
          feature: '5GB of storage',
        },
        {
          feature: 'Email support',
        },
        {
          feature: 'Help center Access',
        },
        {
          feature: 'Phone support',
        },
        {
          feature: 'Community Access',
        },
      ],
      price: '30',
      bg:'white',
      text: '#1E1E1E',
    },
  ]
  return (
    <div>
      <Wrapper>
        <div  className='flex flex-col justify-center items-center gap-5 mb-20'>
          <h1 className='text-[35px] font-[800] text-[#012B6D]'>
            Our Plan
          </h1>
          <p className='md:max-w-[494px] px-5 md:px-0 text-center font-[500]'>
            SocialReachPro’s goal is to make it as quick and easy as possible
            for you to prepare and run your Facebook parties.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3  bg-white shadow-lg md:p-10'>
            {
              data.map((item, index) => (
                <div key={index} className='w-[320px] md:w-[350px] h-[600px] text-center flex flex-col p-5 gap-10  border items-center justify-center' style={{background: `${item.bg}`, color: `${item.text}`}}>
                  <div > 
                  <p className='text-[35px] font-[800]'>{item.title}</p>

                  </div>
                  <div>
                  {item.features.map((items, i) => (
                    <div key={i}>
                      <p className={`text-[20px] font-[500] `}>{items.feature}</p>
                    </div>

                  ))}

                  </div>
                  
                  <p className='text-[60px] font-[900]'>${item.price}</p>
                  <button className={`border border-[#1E1E1E] text-[28px] font-[900] py-2 px-12 uppercase ${item.id === 2 ? 'border-white' : ''}`}>Buy Now</button>
                </div>
              ))
            }

          </div>

        </div>

      </Wrapper>

    </div>
  )
}

export default Plan