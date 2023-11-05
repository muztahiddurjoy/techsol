"use client"
import Triangle from '@/components/Footer/Triangle'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [scroll, setscroll] = useState(0)
    useEffect(() => {
    if(typeof window!=="undefined"){
        window.addEventListener('scroll',()=>{
            setscroll(window.scrollY)
        })
    }
  }, [])
  return (
    <div className={`h-[80vh] w-full relative bg-[url('/bggen.jpg')] bg-cover`} style={{backgroundPositionY:scroll*0.5}}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 flex flex-col items-center justify-center">
        <p className='text-center text-white text-2xl md:text-5xl font-bold uppercase'>EN170D</p>
        <div className="h-[3px] w-10 bg-gray-600 my-8"></div>
        <p className="text-white text-center text-sm uppercase">DIESEL GENERATOR SETS</p>
      </div>
      <div className="absolute -bottom-1 right-0 left-0 rotate-180">
        <Triangle/>
      </div>
    </div>
  )
}

export default Header