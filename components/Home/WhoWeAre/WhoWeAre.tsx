import React from 'react'
import GridContainer from './GridContainer/GridContainer'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const WhoWeAre = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:px-20 xl:px-20 px-3 md:py-20 py-10 2xl:px-[364px]'>
        <GridContainer image='/enviromen.jpg' link='/compnay-profile' title="Who we are"  text='A pioneer in manufacturing products, providing solutions and services.'/>
        <GridContainer image='/EPC.jpg' title="What we do"  text='We design and manufacture customised products and provide reliable solutions and services. We provide solutions for modernisation of old designs and technologies.'/>
        <div className="bg-[url('/globe2.jpg')] bg-cover p-10 min-h-[270px] relative md:col-span-2 mt-5 mx-3">
          <div className="bg-black/50 absolute rounded-md top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center h-full w-full">
          <Link href="/quality">
            <button className='text-white font-bold rounded-lg p-5 text-3xl md:text-4xl flex items-center'><span className='pr-3'>OUR QUALITY STATEMENT</span><ExternalLink height={35}/> </button>
          </Link>
          </div>
          
        </div>
    </div>
  )
}

export default WhoWeAre