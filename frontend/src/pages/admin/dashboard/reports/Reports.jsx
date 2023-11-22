import React from 'react'
import AdminLayout from '../../../../components/layout/AdminLayout'
import { Line } from 'react-chartjs-2'
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
const Reports = () => {

  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Cost',
        data: labels.map(() => getRandomNumber(296, 300)),
        borderColor: '#FF5FC0',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },

    ],
  };
  return (
    <div>
      <AdminLayout>
        <div className='bg-[#EFF6F9] px-5 py-10 md:py-20 w-full md:px-20'>
          <h1 className='text-black text-[25px] font-[500]'>
            Reporting and Analytics
          </h1>
          <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='bg-white w-full rounded-md p-5 mt-5'>
            <p className='text-[20px] text-black font-[600]'>
              Generate Customer Report
            </p>
            <form className='text-black'>
              <div className="my-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                  Start Date
                </label>
                <input
                  className="border rounded py-2 px-3 w-64 focus:outline-none"
                  type="date"
                  id="startDate"
                  name="startDate"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                  End Date
                </label>
                <input
                  className="border rounded py-2 px-3 w-64 focus:outline-none"
                  type="date"
                  id="endDate"
                  name="endDate"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userFilter">
                  User Filter
                </label>
                <input
                  className="border rounded py-2 px-3 w-64 focus:outline-none"
                  type="text"
                  id="userFilter"
                  name="userFilter"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postTypeFilter">
                  Post Type Filter
                </label>
                <input
                  className="border rounded py-2 px-3 w-64 focus:outline-none"
                  type="text"
                  id="postTypeFilter"
                  name="postTypeFilter"
                />
              </div>
              <div className="flex items-center justify-between">
                <button type='submit' className='bg-[#012B6D] my-4 px-10 py-3 text-white rounded-md text-[20px] font-[600]'>
                  Generate Report
                </button>
              </div>
            </form>

          </div>
          <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='bg-white w-full rounded-md p-5 mt-5'>
            <p className='text-[20px] text-black font-[600]'>
              Analytics Dashboard
            </p>
            <p className='text-[20px] pt-5 text-black font-[600]'>
              Social Reach Pro
            </p>
            <p className='text-[20px] text-[#B2B2B2] py-5'>
              Sales
            </p>
            <div className='flex items-center gap-3'>
              <p className='text-[36px] text-[#012B6D] font-[800]'>
                $24,780
              </p>
              <div className='bg-[#55B685] text-[14px] rounded-full px-5 flex items-center justify-center h-[23px] text-white'>
                <p>
                  +49%

                </p>

              </div>
            </div>
            <Line options={options} data={data}  />

          </div>

        </div>
      </AdminLayout>
    </div>
  )
}

export default Reports