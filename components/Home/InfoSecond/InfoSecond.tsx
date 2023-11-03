import React from 'react'
import BrandCarousel from './BrandCarousel/BrandCarousel'
import Image from 'next/image'

const InfoSecond = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-8 md:px-20 px-3 md:py-20 py-10'>
        <div className="col-span-5 md:pr-5">
            <p className='text-primary font-bold text-xl md:text-3xl lg:text-4xl'>DIFFERENT ENERGY SOLUTIONS</p>
            <p className='text-slate-600 font-bold text-xl md:text-3xl lg:text-4xl'>DIFFERENT ENGINE OPTIONS</p>
            <p className="mt-5 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam nemo voluptate dolor deserunt voluptates earum eligendi corporis rerum maiores sed deleniti, sequi est distinctio culpa necessitatibus sit aspernatur et.</p>
            <div className="mt-3">
                <BrandCarousel/>
            </div>
        </div>
        <div className="col-span-3">
            <Image height={400} width={600} src="/generator.jpg" alt=''/>
        </div>
    </div>
  )
}

export default InfoSecond