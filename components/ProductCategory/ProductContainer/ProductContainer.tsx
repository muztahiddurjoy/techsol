import ProductCard from '@/components/Home/AllProductsCarousel/ProductCarousel/ProductCard/ProductCard'
import { generatorsets } from '@/components/Navbar/genetatorSets'
import { products } from '@/demo/products'
import { GeneratorSets } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const ProductContainer = ({link}:{link:string}) => {
    
      
  return (
    <div className='grid grid-cols-1 md:grid-cols-8 my-10 md:px-32 lg:px-40 px-5'>
        <div className="">
            <p className='font-bold text-gray-600 uppercase'>PRODUCTS</p>
            <div className="w-16 my-3 h-[3px] bg-gray-300"></div>
            <ul>
                {generatorsets.map((v,i)=> <li className={`my-3 text-sm ${v.link.includes(link)&&'font-bold text-black'} hover:text-black text-primary`}><Link href={v.link}>{v.title}</Link></li>)}
            </ul>
        </div>
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-3">
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
          <ProductCard link='/product/random' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
        </div>
    </div>
  )
}

export default ProductContainer