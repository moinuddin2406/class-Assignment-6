import React from 'react'
import Image from 'next/image'
const Achivement = () => {
  return (
    <div>
      <div className='text-center px-4 lg:px-16 py-8 lg:py-16 '>
        <h1 className='font-bold text-3xl lg:text-5xl leading-tight mb-4 '>Our Achivements</h1>
        <p className='text-base lg:text-lg font-normal  leading-[27px] mb-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <ul className='flex flex-wrap justify-center items-center gap-4 lg:gap-8'>
            <li><Image src="/image/a-1.png" alt='a-1' width={296} height={80}/></li>
            <li><Image src="/image/a-2.png" alt='a-2' width={296} height={80}/></li>
            <li><Image src="/image/a-3.png" alt='a-3' width={296} height={80}/></li>
            <li><Image src="/image/a-4.png" alt='a-4' width={296} height={80}/></li>
        </ul>
      </div>
{/* Achivement-2 */}
<div className='text-center px-4 lg:px-16 py-8 lg-py-16 '>
        <h1 className='font-bold text-3xl lg:text-5xl leading-tight mb-4 '>Our Achivements</h1>
        <p className='text-base lg:text-lg font-normal  leading-[27px] mb-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <ul className='flex flex-wrap justify-center items-center gap-4 lg:gap-8'>
            <li><Image src="/image/a-1.png" alt='a-1' width={296} height={80}/></li>
            <li><Image src="/image/a-2.png" alt='a-2' width={296} height={80}/></li>
            <li><Image src="/image/a-3.png" alt='a-3' width={296} height={80}/></li>
            <li><Image src="/image/a-4.png" alt='a-4' width={296} height={80}/></li>
        </ul>
      </div> 
    </div>
  )
}

export default Achivement
