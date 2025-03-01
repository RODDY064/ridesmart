import React from 'react'
import Nav from '../ui/nav'
import Background from '../ui/background'

export default function Homelayout({ children}:{ children: React.ReactNode }) {
  return (
    <>
    <Background/>
    <Nav/>
   <div className='w-full absolute'>
   {children}
   </div>
    </>
  )
}
