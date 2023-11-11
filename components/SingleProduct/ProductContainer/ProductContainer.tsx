"use client"
import { apiurl } from '@/apiurl'
import { generatorsets } from '@/components/Navbar/genetatorSets'
import { Button } from '@/components/ui/button'
import { CategoryType, ProductType } from '@/types/types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ProductContainer = ({brand,dataSheet,image,name,brandCode}:ProductType) => {
  const [categories, setcategories] = useState<Array<CategoryType>>([])
  useEffect(() => {
    axios.get(`${apiurl}/category/`).then((res)=>{
      if(res.status==200){
        setcategories(res.data.result)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 md:px-20 px-5 mt-10'>
      <div className="hidden md:block">
            <p className='font-bold text-gray-600 uppercase'>PRODUCTS</p>
            <div className="w-16 my-3 h-[3px] bg-gray-300"></div> 
            <ul>
            {categories.map((v,i)=> <li className={`my-3 text-sm ${v.id.includes(String(brandCode))&&'font-bold text-black'} hover:text-black text-primary`}><Link href={`/product-category/${v.id}`}>{v.name}</Link></li>)}
            </ul>
        </div>
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
          <Image src={image} height={500} width={600} alt=''/>
          </div>
          <div className="flex justify-end items-center pl-10">
            <div className="rounded-lg bg-gray-200 p-5 flex items-end justify-center flex-col h-full w-full">
              <Link className='text-sm text-gray-500 uppercase text-right' href="/">{brand}</Link>
              <p className='text-3xl text-gray-800 font-bold text-right'>{name}</p>
              <div className="h-[2px] w-10 bg-gray-400 my-5"></div>
              <p className='font-bold text-lg text-gray-700 text-right'>Datasheet</p>
              <a href={dataSheet} target='_blank'><Button className='rounded-none mt-5' size="lg">{name}</Button></a>
              <div className="flex items-center justify-end text-xs mt-4 ">
                <p className='text-gray-500'>Category: </p>
                <Link href={`/product-category/${brandCode}`} className='text-primary ml-2'> {brand}</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductContainer 