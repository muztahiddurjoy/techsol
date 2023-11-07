"use client"
import { apiurl } from '@/apiurl'
import ProductCard from '@/components/Home/AllProductsCarousel/ProductCarousel/ProductCard/ProductCard'
import { generatorsets } from '@/components/Navbar/genetatorSets'
import { products } from '@/demo/products'
import { CategoryType, GeneratorSets, ProductType } from '@/types/types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const ProductContainer = ({id}:{id:string}) => {
  const [products, setproducts] = useState<Array<ProductType>>([])
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
  
  useEffect(() => {
    if(id){
      axios.get(`${apiurl}/products/category/${id}`).then((res)=>{
        setproducts(res.data.result)
      }).catch((err)=>{
        console.log(err)
      })
    }
  }, [id])
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-8 my-10 md:px-32 lg:px-40 px-5'>
        <div className="">
            <p className='font-bold text-gray-600 uppercase'>PRODUCTS</p>
            <div className="w-16 my-3 h-[3px] bg-gray-300"></div>
            <ul>
                {categories.map((v,i)=> <li className={`my-3 text-sm ${v.id.includes(id)&&'font-bold text-black'} hover:text-black text-primary`}><Link href={`/product-category/${v.id}`}>{v.name}</Link></li>)}
            </ul>
        </div>
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-3">
          {products.map((v,i)=><ProductCard link={`/product/${v.id}`} image={v.image} brand={v.brand} title={v.name}/>)} 
        </div>
    </div>
  )
}

export default ProductContainer