import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header className='hidden lg:flex w-full h-[54px]  pr-16 pl-[62px] bg-[#F7F7F7]  justify-between items-center '>
        <div className=' flex justify-between items-center w-[386px] h-[30px] space-x py-2'>
            <span className='font-Roboto font-normal text-sm leading-[21px]  '>Phone Number: 956 742 455 678</span>
            <span><Image src="/image/slash.png" alt='slash' width={1} height={1}/></span>
            <span className='font-Roboto font-normal text-sm leading-[21px]   ' >Email:info@ddsgnr.com</span>
        </div>
        <div>
          <ul className='flex justify-end items-center gap-4'>
            <li><Image src="/image/fb.png" alt='facebook' width={10} height={18}/></li>
            <li><Image src="/image/Insta.png" alt='Instagram' width={18} height={18}/></li>
            <li><Image src="/image/twitter.png" alt='twitter' width={18} height={18}/></li>
            <li><Image src="/image/Linkedin.png" alt='Linkedin' width={18} height={18}/></li>
            
          </ul>
        </div>
    </header>
  )
}

export default Header
