"use client"
import Image from 'next/image'
import React from 'react'

const HeaderItem = ({anim}:{anim:boolean}) => {
  return (
    <div className='relative  h-[100vh] w-full top-0 left-0 right-0 bottom-0'>
        <Image src="/generator.jpg" height={500} width={600} alt='' className='absolute top-0 right-0 bottom-0 left-0 h-full object-cover w-full'/>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center px-5 md:px-10 z-30">
            <p className={`text-5xl xl:text-6xl uppercase font-bold transition-all ease-in-out duration-1500 ${anim?'ml-20 opacity-100':'-ml-10 opacity-0'} text-white`}>The Reliable Address <br /> <span className='text-primary'>for energy solutions</span></p>
        </div>
        
        <div className={`absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-tl from-white to-transparent`}>
        <Image src="/solar.png" height={400} width={600} alt='' className={`z-40 absolute transition-all ease-in-out duration-1500 bottom-0 ${anim?'right-20 opacity-100':'-right-5 opacity-0'}`}/>
        </div>
    </div>
  )
}

export default HeaderItem