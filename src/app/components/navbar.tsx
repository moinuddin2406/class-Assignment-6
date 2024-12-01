"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 import {faBars} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const[isMenuOpen,setIsMenuOpen] =useState(false);

  return (
  <div className=' w-full h-16  border border-[#676767] bg-[#F7F7F7] 
    flex justify-between items-center px-4'>
        {/* Logo  */}
        <div className='flex items-center'>
         <Image
         src="/image/logo.png"
         alt="logo"
         width={90}
         height={30}
         />
      </div>
     {/*Dekstop Navigation & Button */}
      <div className='hidden lg:flex items-center gap-8'>
        <ul className='flex gap-8'>
          <li className='cursor-pointer hover:text-gray-600'>Home</li>
          <li className='cursor-pointer hover:text-gray-600'>Courses</li>
          <li className='cursor-pointer hover:text-gray-600'>Services</li>
          <li className='cursor-pointer hover:text-gray-600'>Achivements</li>
          <li className='cursor-pointer hover:text-gray-600'>AboutUs</li>
          <li className='cursor-pointer hover:text-gray-600'>Testimonial</li>
        </ul>
      <div className='flex gap-4'>
        <button className='py-2 px-5 rounded-[5px] border-[1px] border-[#000000]'>Login</button>
        <button className='h-10 py-2 px-5 flex gap-2 rounded-[5px] bg-[#000000] text-[#FFFFFF] border-[1px] text-base leading-6 '>Sign Up</button>
      </div>
  </div>
      {/* Hamburger Icon for mobile */}
      <button 
      className='lg:hidden text-2xl'
      onClick={()=>setIsMenuOpen(!isMenuOpen)}
       >
      <FontAwesomeIcon icon ={faBars}/>
      </button>
      {/* Mobile-Menu */}
      {isMenuOpen && (
        <div className='absolute top-16 left-0 w-full bg-gray-100 border-t border-gray-300 flex flex-col items-start p-4'>
        <ul className='flex flex-col gap-4 w-full '>
          <li className='cursor-pointer hover:text-gray-600'>Home</li>
          <li className='cursor-pointer hover:text-gray-600'>Courses</li>
          <li className='cursor-pointer hover:text-gray-600'>Services</li>
          <li className='cursor-pointer hover:text-gray-600'>Achivements</li>
          <li className='cursor-pointer hover:text-gray-600'>AboutUs</li>
          <li className='cursor-pointer hover:text-gray-600'>Testimonial</li>
        </ul>
      
      <div className='flex flex-col gap-4 w-full mt-4'>
        <button className='w-full py-2 px-5 rounded-[5px] border-[1px] border-[#000000]'>Login
        </button>
        <button className='w-full h-10 py-2 px-5 flex gap-2 rounded-[5px] bg-[#000000] text-[#FFFFFF] border-[1px] text-base leading-6 '>
          Sign Up
        </button>
      </div>
      </div>
      )}
    </div>
   
  )
}

export default Navbar
