"use client"
import React from 'react'
import Image from 'next/image';

export default function Bus() {
  return (
    <div className='w-full absolute top-[-2rem]'>
    <div className='w-[40px] h-[40px] '>
	 <Image src='/icons/bus-sketch.svg' fill alt='bus' className='object-contain'/>
    </div>
    </div>
  )
}
