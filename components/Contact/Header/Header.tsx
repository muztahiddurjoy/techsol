"use client"
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
    <div className={`min-h-[60vh] bg-[url('/bggen.jpg')] relative bg-cover w-full`} style={{backgroundPositionY:scroll*0.5}}>
        <div className="flex items-center justify-center flex-col bg-black/60 absolute top-0 left-0 bottom-0 right-0">
            <p className='text-center text-white text-xl md:text-4xl md:font-bold uppercase font-semibold'>Contact Us</p>
            <p className='text-white text-center text-sm mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt.</p>
        </div>
    </div>
  )
}

export default Header