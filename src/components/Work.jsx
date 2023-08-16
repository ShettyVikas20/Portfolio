import React from 'react'
import dataImg from '../assets/Analyst2.jpeg'
import MLImg from '../assets/ML2.jpeg'
import DLImg from '../assets/DL2.jpeg'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0d1b29]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
           
            <div style={{backgroundImage:`url(${dataImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
                {/*Hover effect*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Data Analytics Project</span>
                        <div className="text-center">
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/ShettyVikas20/Hypothesis_Testing_With_cricketData">    
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${MLImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
                {/*Hover effect*/}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-wider'>Machine Learning Project</span>
                        <div className="text-center">
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/ShettyVikas20/DA_P2_Student_Data">    
                                <button className='align-center text-center rounded-lg px-6 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${DLImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
                {/*Hover effect*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Deep Learning Project</span>
                        <div className="text-center">
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="/">    
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                </div>
            </div>

        </div>



    </div> 
</div>
  )
}

export default Work