import React from 'react'
import AdminLayout from '../../../../components/layout/AdminLayout'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';
import { FaRegCircle } from 'react-icons/fa';
import CustomerTable from './CustomerTable';
import { Link } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
      ticks: {
        display: false, // Hide x-axis labels
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
      ticks: {
        display: false, // Hide y-axis labels
      },
    },
  },
};


const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const labels = ['January', 'February', 'March', 'April', 'May'];

const data = {
  labels,
  datasets: [
    {
      label: 'Cost',
      data: labels.map(() => getRandomNumber(-1000, 1000)),
      borderColor: '#FF5FC0',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ],
};
const getRandomNumber2 = (min, max) => {
  return Math.random() * (max - min) + min;
};

const labels2 = ['January', 'February', 'March', 'April', 'May'];

const data2 = {
  labels,
  datasets: [
    {
      label: 'Cost',
      data: labels2.map(() => getRandomNumber2(-1000, 1000)),
      borderColor: '#FF5FC0',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ],
};
const getRandomNumber3 = (min, max) => {
  return Math.random() * (max - min) + min;
};

const labels3 = ['January', 'February', 'March', 'April', 'May'];

const data3 = {
  labels,
  datasets: [
    {
      label: 'Cost',
      data: labels3.map(() => getRandomNumber3(-1000, 1000)),
      borderColor: '#FF5FC0',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ],
};
const AdminHome = () => {
  return (
    <div className=' flex flex-col gap-5 w-full p-4'>
      <div className='flex md:items-center md:justify-between w-full text-white bg-[#FF5FC0]'>
        <div className='flex flex-col  md:px-10 px-4 py-4 md:py-0'>
          <div className='flex items-center gap-2'>
            <h1 className=' text-[24px] md:text-[32px] font-[700] '>
              Good afternoon, Social reach Pro.
            </h1>
            <img src="/images/hand.png" alt="" className='w-[50px] ' />

          </div>
          <p className='text-[18px] md:text-[20px]'>
            Here is what’s happening with your projects today:
          </p>

        </div>
        <div>
          <img src="/images/bg-banner.png" alt="" className='w-[290px] md:block hidden' />
        </div>

      </div>
      <div className='mt-6'>
        <div className='flex md:flex-row flex-col md:items-center gap-5'>
          <div className='px-5 py-3 border rounded-md text-white border-[#B2B2B2]  bg-[#20293A]'>
            <p>
              Sep 6, 2023 - Oct 6, 2023
            </p>
          </div>
          <Link to={'/add-user'}>
            <button className='rounded-md bg-[#FF5FC0] text-[18px] text-white h-[44px] px-14'>
              + Add User
            </button>

          </Link>
          <Link to={'/add-manager'}>
            <button className='rounded-md bg-[#012B6D] text-[18px] text-white h-[44px] px-14'>
              + Add Manager
            </button>
          </Link>

        </div>

      </div>
      <div className='mt-6 flex items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-full'>
          <div className='p-5 border rounded-lg w-full md:w-[380px] border-[#B2B2B2] bg-[#20293A]' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <div className='flex flex-col gap-2 text-white'>
              <p className='text-[20px] font-[700]'>
                Social Reach Pro
              </p>
              <p className='text-[20px] font-[400]'>
                Sales
              </p>
              <div className='flex items-center gap-3'>
                <p className='text-[36px] font-[800]'>
                  $24,780
                </p>
                <div className='bg-[#55B685] text-[14px] rounded-full px-5 flex items-center justify-center h-[23px] text-white'>
                  <p>
                    +49%

                  </p>

                </div>


              </div>
              <Line options={options} data={data} />

            </div>

          </div>
          <div className='p-5 border rounded-lg w-full md:w-[380px] border-[#B2B2B2] bg-[#20293A]' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <div className='flex flex-col gap-2 text-white'>
              <p className='text-[20px] font-[700]'>
                Social Reach Pro
              </p>
              <p className='text-[20px] font-[400]'>
                Sales
              </p>
              <div className='flex items-center gap-3'>
                <p className='text-[36px] font-[800]'>
                  $17,489
                </p>
                <div className='bg-[#E8A13B] text-[14px] rounded-full px-5 flex items-center justify-center h-[23px] text-white'>
                  <p>
                    -14%

                  </p>

                </div>


              </div>
              <Line options={options} data={data2} />

            </div>

          </div>
          <div className='p-5 border rounded-lg w-full md:w-[380px] border-[#B2B2B2] bg-[#20293A]' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <div className='flex flex-col gap-2 text-white'>
              <p className='text-[20px] font-[700]'>
                Social Reach Pro
              </p>
              <p className='text-[20px] font-[400]'>
                Sales
              </p>
              <div className='flex items-center gap-3'>
                <p className='text-[36px] font-[800]'>
                  $9,962
                </p>
                <div className='bg-[#55B685] text-[14px] rounded-full px-5 flex items-center justify-center h-[23px] text-white'>
                  <p>
                    +49%

                  </p>

                </div>


              </div>
              <Line options={options} data={data3} />

            </div>

          </div>

        </div>

      </div>
      <div className='flex md:flex-row flex-col items-center gap-5 md:gap-3 text-white  w-full'>
        <div className='w-full md:w-1/2'>
          <div className='p-5 border rounded-lg border-[#B2B2B2] bg-[#20293A]'>
            <p className='text-[20px] font-[600] pb-5'>
              Sales
            </p>
            <div className='border-b w-full border  border-[#B2B2B2]/50 '>

            </div>
            <div className='py-2'>
              <div className='flex md:flex-row flex-col md:items-center gap-5'>
                <div className='flex items-center gap-2'>
                  <FaRegCircle size={12} className='text-[#70A3F3]' />
                  <p className='text-[24px] font-[700]'>
                    $8.25k
                  </p>
                  <p className='text-[14px] text-[#B2B2B2]'>
                    Direct
                  </p>
                </div>
                <div className='flex  items-center gap-2'>
                  <FaRegCircle size={12} className='text-[#6466E9]' />
                  <p className='text-[24px] font-[700]'>
                    $27.7k
                  </p>
                  <p className='text-[14px] text-[#B2B2B2]'>
                    Indirect
                  </p>
                </div>


              </div>

            </div>
            <BarChart />

          </div>
        </div>
        <div className='w-full md:w-1/2 p-5 border rounded-lg text-white border-[#B2B2B2] bg-[#20293A]'>
          <p className='text-[20px] font-[600] pb-5'>
            Users And Managers
          </p>
          <div className='border-b w-full border  border-[#B2B2B2]/50 '>

          </div>
          <div className='flex items-start gap-2 py-3'>
            <p className='text-[24px] font-[700]'>
              $57.71
            </p>
            <div className='bg-[#55B685]  rounded-full text-[12px] px-5 flex items-center justify-center h-[23px] text-white'>
              <p>
                +3.81%

              </p>

            </div>

          </div>
          <LineChart />
        </div>
      </div>
      <div className='flex md:flex-row flex-col items-center gap-3 text-white w-full'>
        <div className='w-full  md:w-1/2'>
          <div className='p-3 overflow-x-scroll overflow-y-hidden md:overflow-hidden  border rounded-lg border-[#B2B2B2] bg-[#20293A]'>
            <p className='text-[20px] font-[600] pb-5'>
              Customers
            </p>
            <div className='border-b w-full border  border-[#B2B2B2]/50 '>

            </div>
            <div className='pt-3'>
              <CustomerTable />

            </div>


          </div>
        </div>
        <div className='w-full overflow-x-scroll overflow-y-hidden md:overflow-hidden md:w-1/2 p-3 border rounded-lg  border-[#B2B2B2] bg-[#20293A]'>
          <p className='text-[20px] font-[600] pb-5'>
            Customers
          </p>
          <div className='border-b w-full border  border-[#B2B2B2]/50 '>

          </div>
          <div className='pt-3'>
            <CustomerTable />

          </div>

        </div>
      </div>

    </div>

  )
}

export default AdminHome