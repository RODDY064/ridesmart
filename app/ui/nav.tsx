import React from 'react'
import Image from 'next/image'
import Button from './button'

export default function Nav() {
  return (
    <div className='w-full absolute z-[60] p-[16px] md:p-[24px] xl:px-[48px] text-white flex justify-between'>
     {/* logo  */}
     <div className='flex items-baseline gap-1'>
       <div className='relative size-[24px] md:size-[36px] lg:size-[40px]'> <Image src='/icons/logo.svg' fill alt='logo'/></div>
        <span className='font-lato text-[20px] md:text-[30px] lg:text-[32px] font-semibold md:font-bold'>ideSmart</span>
     </div>
     <div className='flex flex-none gap-4'>
        <Button word='Register' isLink={true} href='/'/>
        <Button word='Sign in' style='md:flex hidden' isLink={true} href='/'/>
     </div>
    </div>
  )
}
