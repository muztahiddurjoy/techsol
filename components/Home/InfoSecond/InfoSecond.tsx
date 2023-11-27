import React from 'react'
import BrandCarousel from './BrandCarousel/BrandCarousel'
import Image from 'next/image'

const InfoSecond = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 md:px-20 px-3 md:py-20 py-10 2xl:px-[364px] mt-20'>
        <div className="col-span-7 md:pr-5 2xl:pr-10">
            <p className='text-primary font-bold text-3xl lg:text-4xl uppercase'>who we are,</p>
            <p className='text-slate-600 font-bold text-3xl lg:text-4xl uppercase'>what we do?</p>
            <p className="mt-5 text-gray-600">Techsol stands at the forefront of the industry, delivering innovative and dependable solutions in power generation and management. As a recognized leader in addressing power outages and energy needs, we are unwavering in our commitment to ensuring uninterrupted energy supply for our customers. Our dedication to sustainable energy practices sets us apart in the industry, reinforcing our reputation as a trusted and responsible provider of power solutions.</p>
            <div className="mt-3">
                <BrandCarousel/>
            </div>
        </div>
        <div className="col-span-5 relative flex items-center justify-center">
          <p className='z-30 text-white font-extrabold text-2xl md:text-3xl text-center uppercase 2xl:text-3xl'>Export All Over The <br /> <span className='text-primary'>World</span></p>
          <div className="top-0 bottom-0 right-0 left-0 h-full w-full absolute z-20 bg-black/60"></div>
            <Image height={600} width={1000} src="/globe.jpg" alt='' className='top-0 left-0 h-full w-full object-cover right-0 bottom-0 absolute'/>
            <Image height={600} width={1000} src="/sync.png" alt='' className='object-cover right-0 w-[200px] -bottom-10 mr-10 absolute z-30'/>
        </div>
    </div>
  )
}

export default InfoSecond