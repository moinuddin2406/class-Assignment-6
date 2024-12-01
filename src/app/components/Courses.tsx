import React from 'react'
import Image from 'next/image'
const Courses = () => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
      
      <Image 
      src="/image/cor1.png" 
      alt='img' 
      width={400}
       height={300}
      className='object-cover w-full'/>
       <Image 
      src="/image/cor6.png" 
      alt='img' 
      width={400}
       height={300}
      className='object-cover w-full'/>
       <Image 
      src="/image/cor3.png" 
      alt='img' 
      width={400}
       height={300}
      className='object-cover w-full'/>
     
       <Image 
      src="/image/cor4.png" 
      alt='img' 
      width={400}
       height={300}
      className='object-cover w-full'/>
       <Image 
      src="/image/cor7.png" 
      alt='img' 
      width={400}
       height={300}
      className='object-cover w-full'/>
          <Image 
      src="/image/cor6.png" 
      alt='img' 
      width={400}
       height={300}
      className='object-cover w-full'/>
      </div>
      
      
    
  )
}

export default Courses
