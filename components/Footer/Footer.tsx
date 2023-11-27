"use client"
import React, { useEffect, useState } from 'react'
import Triangle from './Triangle'
import Image from 'next/image'
import { generatorsets } from '../Navbar/genetatorSets'
import {ChevronRight, MapPin,Mail, Phone, Facebook, Instagram, Send} from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import { apiurl } from '@/apiurl'
import axios from 'axios'
import { CategoryType } from '@/types/types'

const Footer = () => {
  const [categories, setcategories] = useState<Array<CategoryType>>([])
  useEffect(() => {
    axios.get(`${apiurl}/category`).then((res)=>{
      setcategories(res.data.result)
    }).catch(err=> console.log(err))
  }, [])
  
  return (
    <div className="bg-[#646569] mt-10 relative bg-[url('/map.png')] bg-contain bg-no-repeat overflow-hidden" style={{backgroundPositionY:200}}>
      <Triangle/>
      
      <div className="absolute px-5 md:top-44 lg:top-[200px] 2xl:top-80 3xl:top-96 2xl:px-[260px] top-20 left-0 md:px-28  grid grid-cols-1 md:grid-cols-4 md:gap-6" >
        <div className="">
          <Image src="/white.png" height={170} width={150} alt=''/>
          <p className="text-sm text-gray-300 mt-5">Techsol is committed to fairness and honesty in all its dealings. To demonstrate our commitment to ensuring ethical behavior we have put in place industry standard measures.</p>
        </div>
        <div className="md:col-span-2 md:mt-0 mt-10">
          <div className="">
            <p className="font-semibold text-white">Diesel Generator Sets</p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <ul>
              {categories.map((v,i)=> i<5&&<li className='text-white/80 transition-all ease-in-out hover:text-white text-sm flex items-center py-3 border-b border-gray-350' key={i}>
                <ChevronRight className='stroke-white' height={15}/>
                <Link href={v.link}>{v.name}</Link>
              </li>)}
            </ul>
            <ul>
            {categories.map((v,i)=> (i>5&&i<11)&&<li className='text-white/80 transition-all ease-in-out hover:text-white text-sm flex items-center py-3 border-b border-gray-350' key={i}>
                <ChevronRight className='stroke-white' height={15}/>
                <Link href={v.link}>{v.name}</Link>
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
          <p className='text-sm text-white flex'>Ataturk Tower (7th Floor) <br />
22 Kamal Ataturk Avenue <br />
Banani, Dhaka-1213, Bangladesh.</p>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center mt-4">
          <div className="col-span-2 flex justify-start md:justify-end px-2">
            <Mail height={20} className='stroke-white' />
          </div>
          <div className="col-span-10">
          <a href="mailto:info@techsolbd.com" className='text-sm text-white flex'>info@techsolbd.com</a>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center mt-4">
          <div className="col-span-2 flex justify-start md:justify-end px-2">
            <Phone height={20} className='stroke-white' />
          </div>
          <div className="col-span-10">
          <a href="tel:+88 02 222274416 - 19" className='text-sm text-white flex'>+88 02 222274416 - 19</a>
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
      <div className="text-center md:col-span-4 text-sm text-white mt-10">Copyright © {new Date().getFullYear()} | <a href="">Techsol</a></div>
      <Separator orientation='horizontal' className='my-5 md:col-span-4'/>
      <div className="md:col-span-2 mb-10">
        <p className='text-xs text-white text-center md:text-left'>Copyrigt © {new Date().getFullYear()} All rights reserved | Techsol</p>
      </div>
      <div className="md:col-span-2 mb-10 flex md:justify-end justify-center">
        <a href="https://intredia.com/" className='md:text-right text-xs text-white'>Itredia</a>
      </div>
      </div>
     
    </div>
  )
}

export default Footer