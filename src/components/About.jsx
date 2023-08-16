import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300 bg-[#0d1b29]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e00b96]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi! I'm Vikas, glad to see you here, Please take a look around</p>
                    </div>
                    <div>
                        <p>"👋 I'm a creative Developer with a passion for diving into data analytics 📊, 
                            machine learning 🤖, and solving problems 🔍. Quality and leadership drive me to make real impacts 🚀. 
                            I thrive on coding challenges and turning them into something extraordinary ✨. 
                            Let's connect and make a meaningful difference together! 🤝"!
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About