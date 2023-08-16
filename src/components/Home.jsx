import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { scroller } from 'react-scroll';

const Home = () => {
  const scrollToWork = () => {
    scroller.scrollTo('work', {
        smooth: true,
        duration: 500,
    });
};

  return (
    <div name='home' className='w-full h-screen bg-[#0d1b29]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ea33aa] text-xl'>Hello! My name is,</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Vikas R Shetty</h1>
        <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>Welcome to my portfolio!</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Delve into my portfolio to explore a treasure trove of creative projects. 
        Watch ideas bloom into powerful solutions, driven by relentless pursuit of excellence and boundless creativity. 
        🚀 Let's team up and craft a lasting impact together! 🤝</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e00b96] hover:border-[#e00b96]' onClick={scrollToWork}>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
          </div>

      </div>

    </div>
  )
}

export default Home