import React from 'react'
import Image from 'next/image'
export default function Logo() {
  return (
    <div className='bg-[#F7F7F7] py-14 px-4'>
      <div className='max-w-screen-xl mx-auto grid grid-col-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center'>
        <div className='col-span-2 sm:col-span-3 lg:col-span-6 text-center mb-6 lg:mb-0'>
      <h2 className='text-lg lg:text-lg font-bold text-[#000000]'>
      Trusted by 2000+ companies <br />worldwide.
      </h2>
        
      </div>
        <Image
        src="/image/Sec-Logo-1.png"
        alt='SecLogo-1'
        width={123.8}
        height={38.52}
        />
        
        
        <Image
        src="/image/Sec-Logo-2.png"
        alt='SecLogo-2'
        width={123.8}
        height={38.52}
        />

          
        <Image
        src="/image/Sec-Logo-3.png"
        alt='SecLogo-3'
        width={123.8}
        height={38.52}
        />
       
        <Image
        src="/image/Sec-Logo-4.png"
        alt='SecLogo-4'
        width={123.8}
        height={38.52}
        />
         
        <Image
        src="/image/Sec-Logo-5.png"
        alt='SecLogo-5'
        width={123.8}
        height={38.52}
        />
       
        <Image
        src="/image/Sec-Logo-6.png"
        alt='SecLogo-'
        width={123.8}
        height={38.52}
        />
        
        </div>
    </div>
    
  )
}
