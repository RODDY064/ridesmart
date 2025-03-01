"use client";

import Image from 'next/image';
import React from 'react'


export default function Background() {
  return (
    <div className="absolute top-[-4rem] left-0 w-full h-[500px] md:h-[550px] lg:h-[640px] 
    rounded-br-[50px] rounded-bl-[50px] md:rounded-bl-[120px] md:rounded-br-[120px]   lg:rounded-bl-[200px] lg:rounded-br-[200px] bg-dark_green overflow-hidden">
       <Image src="/images/bg.svg" fill alt="home background" className="object-contain"/>
      </div>
  )
}
