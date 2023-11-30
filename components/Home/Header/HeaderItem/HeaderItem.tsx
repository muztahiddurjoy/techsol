"use client"
import Image from 'next/image'
import React from 'react'

const HeaderItem = ({anim,bg,image,red,white}:{anim:boolean,white:string,bg:string,red:string,image:string}) => {
  return (
    <div className='relative h-[100vh] xl:h-[100vh] 2xl:h-[90vh] w-full top-0 left-0 right-0 bottom-0'>
        <Image src={bg} height={600} width={1000} alt='' className='absolute top-0 right-0 bottom-0 left-0 h-full object-cover w-full'/>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start pt-32 md:pt-0 md:items-center px-5 md:px-10 z-30">
            <p className={`text-4xl md:text-5xl 2xl:text-6xl md:w-[500px] xl:w-[600px] 2xl:w-[700px] uppercase font-bold transition-all ease-in-out duration-1500 ${anim?'ml-5 2xl:ml-64 opacity-100':'-ml-10 opacity-0'} text-white`}>{white} <br /> <span className='text-primary'>{red}</span></p>
        </div>
        
        <div className={`absolute h-[33vh] left-0 2xl:-bottom-2 bottom-0 right-0 bg-gradient-to-t 2xl:bg-gradient-to-t from-white to-transparent`}>
        <Image src={image} height={1000} width={1000} alt='' className={`z-40 absolute transition-all ease-in-out duration-1500 2xl:w-[650px] xl:w-[550px] w-[350px] bottom-0 2xl:bottom-10 ${anim?'lg:right-20 md:right-10 right-0 2xl:right-64 2xl:bottom-10 opacity-100':'-right-5 opacity-0'}`}/>
        </div>
    </div>
  )
}

export default HeaderItem