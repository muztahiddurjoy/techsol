import React from 'react'
import Triangle from './Triangle'
import Image from 'next/image'
import { generatorsets } from '../Navbar/genetatorSets'
import {ChevronRight, MapPin,Mail, Phone, Facebook, Instagram, Send} from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'

const Footer = () => {
  return (
    <div className='bg-primary mt-10 relative'>
      <Triangle/>
      <div className="absolute bg-primary px-5 md:top-44 lg:top-60 2xl:top-80 top-20 left-0 md:px-28 grid grid-cols-1 md:grid-cols-4 md:gap-6">
        <div className="">
          <Image src="/white.png" height={170} width={150} alt=''/>
          <p className="text-sm text-gray-300 mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eligendi fugiat voluptatem atque quis modi quae repudiandae sed. Consectetur minima dolores fuga iste dolor ad ut deleniti, est non suscipit.</p>
        </div>
        <div className="md:col-span-2 md:mt-0 mt-10">
          <div className="">
            <p className="font-semibold text-white">Diesel Generator Sets</p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <ul>
              {generatorsets.map((v,i)=> i<5&&<li className='text-white/80 transition-all ease-in-out hover:text-white text-sm flex items-center py-3 border-b border-gray-350' key={i}>
                <ChevronRight className='stroke-white' height={15}/>
                <Link href={v.link}>{v.title}</Link>
              </li>)}
            </ul>
            <ul>
            {generatorsets.map((v,i)=> i>5&&<li className='text-white/80 transition-all ease-in-out hover:text-white text-sm flex items-center py-3 border-b border-gray-350' key={i}>
                <ChevronRight className='stroke-white' height={15}/>
                <Link href={v.link}>{v.title}</Link>
              </li>)}
            </ul>
            </div>
          </div>
        
      </div>
      <div className="mt-8 md:mt-0">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-2 flex justify-start md:justify-end px-2">
            <MapPin height={20} className='stroke-white' />
          </div>
          <div className="col-span-10">
          <p className='text-sm text-white flex'>Ataturk Mah. Meric Cd. No:1/2B/84 Atasehir-ISTANBUL / TURKEY</p>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center mt-4">
          <div className="col-span-2 flex justify-start md:justify-end px-2">
            <Mail height={20} className='stroke-white' />
          </div>
          <div className="col-span-10">
          <a href="mailto:info@enmaksanpower.com" className='text-sm text-white flex'>info@enmaksanpower.com</a>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center mt-4">
          <div className="col-span-2 flex justify-start md:justify-end px-2">
            <Phone height={20} className='stroke-white' />
          </div>
          <div className="col-span-10">
          <a href="tel:+90 507 812 17 0911 " className='text-sm text-white flex'>+90 507 812 17 0911</a>
          </div>
        </div>
        <div className="flex items-center mt-10 md:mt-0 justify-center md:justify-start">
        <a href=''>
        <Facebook height={20} className='fill-white stroke-transparent ml-2 mt-5'/>
        </a>
        <a href=''>
        <Instagram height={20} className='stroke-white ml-4 mt-5'/>
        </a>
        <a href=''>
        <Mail height={20} className='stroke-white ml-4 mt-5'/>
        </a>
        <a href=''>
        <Phone height={20} className='stroke-white ml-4 mt-5'/>
        </a>
        <a href=''>
        <Send height={20} className='stroke-white ml-4 mt-5'/>
        </a>
        </div>
      </div>
      <div className="text-center md:col-span-4 text-sm text-white mt-10">Copyright © {new Date().getFullYear()} | <a href="">Thor Generator</a></div>
      <Separator orientation='horizontal' className='my-5 md:col-span-4'/>
      <div className="md:col-span-2 mb-10">
        <p className='text-xs text-white text-center md:text-left'>Copyrigt © {new Date().getFullYear()} All rights reserved | Enmaksan</p>
      </div>
      <div className="md:col-span-2 mb-10 flex md:justify-end justify-center">
        <a href="" className='md:text-right text-xs text-white'>web design</a>
      </div>
      </div>
     
    </div>
  )
}

export default Footer