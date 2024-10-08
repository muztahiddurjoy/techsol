"use client"
import Triangle from '@/components/Footer/Triangle'
import Image from 'next/image'
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
    <div className="h-[90vh] 2xl:h-[65vh] w-full relative bg-[url('/solar.jpg')] bg-cover" style={{backgroundPositionY:scroll*0.5}}>
        <div className="bg-black/80 2xl:px-[384px] absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center md:justify-start px-5 md:px-20">
            <p className='text-white text-center md:text-left uppercase font-bold text-4xl lg:text-6xl'><span className='text-primary'>Solar</span> <br />Energy</p>
        </div>
        <div className="rotate-180 bottom-0 absolute left-0 right-0 -mb-0.5">
            <Triangle/>
        </div>
        <Image src="/solar.png" height={1000} width={1000} alt='' className='bottom-0 right-0 2xl:right-32 2xl:bottom-10 absolute w-full md:w-auto px-4 md:pr-10 2xl:pr-[246px] 2xl:w-[1000px] xl:w-[800px]  lg:w-[600px]'/>
    </div>
  )
}

export default Header