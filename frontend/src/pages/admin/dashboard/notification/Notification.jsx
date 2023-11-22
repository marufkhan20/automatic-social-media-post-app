import React from 'react'
import {
  NotificationOutlined,

} from "@ant-design/icons";
import AdminLayout from '../../../../components/layout/AdminLayout';
const Notification = () => {
  const data = [
    {
      user: '/images/user1.png',
      name: 'James Williams',
      noti: 'Changed password',
      time: 'Just now',
    },
    {
      user: '/images/user2.jpg',
      name: 'Rocky Smith',
      noti: 'Login failed',
      time: '1 hour ago',
    },
    {
      user: '/images/user3.png',
      name: 'Kane Johnson',
      noti: 'Changed password',
      time: 'Yesterday',
    },
    {
      user: '/images/user4.png',
      name: 'James Williams',
      noti: 'Changed password',
      time: '1 week ago',
    }
  ]
  return (
    <div>
      <AdminLayout>
        <div className='bg-[#EFF6F9]  md:pb-52 py-10 px-5 md:pt-10 w-full md:px-20'>

          <div
            className={`flex items-center text-[24px] mb-7 text-black font-[600] gap-2 px-3 py-2 
          `}
          >
            <NotificationOutlined />
            <p>Notifications</p>
          </div>
          <div className='flex flex-col gap-5'>
          {
            data.map((item, i) => (
              <div key={i} className='w-full bg-white shadow-xl rounded-md p-5  '>
                <div className='flex w-full items-center justify-between text-black'>
                  <div className='flex items-center gap-4 text-black'>
                    <img src={item.user} alt="" className='w-[40px] h-[40px] rounded-full object-cover ' />
                    <p className='font-[600]'>
                      {item.name}
                    </p>
                    <p className=''>
                      {item.noti}
                    </p>
                  </div>
                  <div>
                    <p className=''>
                     {item.time}
                    </p>
                  </div>

                </div>


              </div>
            ))
          }

          </div>


        </div>
      </AdminLayout>


    </div>
  )
}

export default Notification