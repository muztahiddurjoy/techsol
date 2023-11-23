import React from 'react'
import BrandCarousel from './BrandCarousel/BrandCarousel'
import Image from 'next/image'

const InfoSecond = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 md:px-20 px-3 md:py-20 py-10 2xl:px-[364px] mt-20'>
        <div className="col-span-7 md:pr-5 2xl:pr-10">
            <p className='text-primary font-bold text-3xl lg:text-4xl'>DIFFERENT ENERGY SOLUTIONS</p>
            <p className='text-slate-600 font-bold text-3xl lg:text-4xl'>DIFFERENT ENGINE OPTIONS</p>
            <p className="mt-5 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam nemo voluptate dolor deserunt voluptates earum eligendi corporis rerum maiores sed deleniti, sequi est distinctio culpa necessitatibus sit aspernatur et.</p>
            <div className="mt-3">
                <BrandCarousel/>
            </div>
        </div>
        <div className="col-span-5 relative flex items-center justify-center">
          <p className='z-30 text-white font-extrabold text-2xl md:text-3xl text-center uppercase 2xl:text-3xl'>Export More Than <br /> <span className='text-primary'>30</span> Countries</p>
          <div className="top-0 bottom-0 right-0 left-0 h-full w-full absolute z-20 bg-black/40"></div>
            <Image height={400} width={600} src="/generator.jpg" alt='' className='top-0 left-0 right-0 bottom-0 absolute'/>
        </div>
    </div>
  )
}

export default InfoSecond