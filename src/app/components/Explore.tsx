import React from 'react'
import Image from 'next/image'
const Explore = () => {
  return (
    <div className='px-4 lg:px-16'>
      <div className='text-centre py-8 lg:py-16'>
       <div>
            <h1 className='text-3xl lg:text-5xl font-bold text-black'>Explore Courses By Category</h1>
            <p className='mt-4 text-base lg:text-lg text-gray-600'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
       </div>
      </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8  '>
        <Image src="/image/c-1.png" alt='c-1' width={410.67} height={132} className='w-full h-auto'/>
        <Image src="/image/c-2.png" alt='c-2' width={410.67} height={132} className='w-full h-auto'/>
        <Image src="/image/c-3.png" alt='c-3' width={410.67} height={132} className='w-full h-auto'/>
        <Image src="/image/c-4.png" alt='c-4' width={410.67} height={132} className='w-full h-auto'/>
        <Image src="/image/c-5.png" alt='c-5' width={410.67} height={132} className='w-full h-auto'/>
        <Image src="/image/c-6.png" alt='c-6' width={410.67} height={132} className='w-full h-auto'/>
        <Image src="/image/c-7.png" alt='c-7' width={410.67} height={132} className='w-full h-auto'/>
        <Image src="/image/c-8.png" alt='c-8' width={410.67} height={132} className='w-full h-auto'/>
        <Image src="/image/c-9.png" alt='c-9' width={410.67} height={132} className='w-full h-auto'/>
       </div>
      
        <div className='flex justify-center items-center mt-6'>
        <Image src="/image/Button.png" alt='button' width={155} height={48}/>
        </div>   
    
      </div>
    
  )
}

export default Explore
