import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isUser, setIsUser] = useState(true); // Default as a user
  const [isManager, setIsManager] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUserChange = () => {
    setIsUser(!isUser);
    setIsManager(false);
  };

  const handleManagerChange = () => {
    setIsManager(!isManager);
    setIsUser(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };
  return (
    <div>
      <Navbar />
      <div className='  justify-center flex items-center bg-[#EFF6F9] w-full p-5 md:p-20'>
        <div className='max-w-screen-xl mx-auto mb-10 md:mb-0 mt-32 md:mt-0'>
          <div className='bg-white md:w-[1240px] w-[320px] p-5 md:p-10 shadow-xl '>
            <form onSubmit={handleSubmit} className="">
              <div className="w-full md:mr-2">
                <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="firstName">
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                  id="firstName"
                  type="text"
                  placeholder="Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="my-5 md:my-12">
                <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="my-5 md:my-12">
                <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="email">
                  Message
                </label>
                
                <textarea  placeholder='Type your message' name="" id="" cols="30" rows="5" className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline" />
              </div>



              <div className="text-center md:text-left mt-10 md:mt-28">
                <button
                  className="w-[216px] h-[50px] text-[18px] md:text-[20px] font-[500] flex-shrink-0 rounded-md bg-[#012B6D] text-white hover:bg-blue-800 focus:outline-none focus:-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact