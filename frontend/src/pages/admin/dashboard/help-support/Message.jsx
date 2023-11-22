import React, { useState } from 'react';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="mt-5 w-full gap-5  rounded-md  flex flex-col">
      <p className="text-[20px] font-[600] text-black">Message System</p>


      <div className="flex flex-col w-full ">
       <textarea name="" id="" cols="10" rows="4" placeholder='Type your message' className='p-5 focus:outline-none border rounded-md border-[#D9D9D9]'>

       </textarea>
        <button
          onClick={handleSendMessage}
          className="px-4 mt-5 py-2 font-semibold text-white bg-[#FF5FC0] rounded-md w-[216px] focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Message;
