import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div  className="flex flex-col lg:flex-row w-full h-auto ">
        {/* LHS-content */}
      <div className=' flex flex-col  justify-centre items-start order-1 lg:order-1 mt-10 lg:mt-10 lg:pt-60 w-full lg:w-1/2 px-4 lg:px-20' >
       <h1 className='text-5xl lg:text-7xl  font-bold text-[#000000] '>Learn new skills online with ease</h1>
       <p className='mt-4 text-2xl text-center  lg:text-xl my-8  text-[#000000]
'>Discover a wide range of courses covering a variety of <br /> subjects, taught by expert instructors.</p>
       <div className='flex flex-col sm:flex-row justify-start items-center  py-6 gap-3 w-full'>
        <button className=' sm:w-auto h-12 py-2 px-4 rounded-[5px] flex justify-centre items-center gap-2 border-[1px]  text-[#FFFFFF] font-normal text-sm leading-5 bg-[#000000]'>Start learning now</button>
        <button className=' sm:w-auto font-normal text-sm h-12 py-2 px-4 rounded-md border-[1px] leading-5 border-[#000000] mt-3 md:mt-0'>
        Explore Courses
        </button>
       </div>
      </div>
      {/* RHS-image */}
      <div className=' w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-2'>
      <Image src="/image/image-1.png" alt='image-1'width={640} height={900}
      className='object-cover w-full h-auto'
      />
      </div>
    </div>
  )
}

export default Hero
