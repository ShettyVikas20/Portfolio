import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0d1b29] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/87fd37e4-92f4-4ac1-a188-49e55bfc8344" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or mail me at shettyvikas03@gmail.com</p>
            </div>
            <input className='py-2 bg-[#e0e1e6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 py-2 bg-[#e0e1e6]' type="email" placeholder='Email' name='email' />
            <textarea className='py-2 bg-[#e0e1e6]' placeholder='Message' name='message' rows='10' />
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
    
    </div>
  )
}

export default Contact 