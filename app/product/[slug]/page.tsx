"use client"
import { PageProps } from '@/.next/types/app/page'
import { apiurl } from '@/apiurl'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/SingleProduct/Header/Header'
import ProductContainer from '@/components/SingleProduct/ProductContainer/ProductContainer'
import ProductDesc from '@/components/SingleProduct/ProductDesc/ProductDesc'
import { ProductType } from '@/types/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SingleProduct = ({params}:PageProps) => {
  const [productData, setproductData] = useState<ProductType>()
  useEffect(() => {
    axios.get(`${apiurl}/products/single/${params.slug}`).then((res)=>{
      if(res.status==200){
        setproductData(res.data[0])
      }
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  return (
    <>
    <Navbar/>
    <Header name={productData?.name}/>
    <ProductContainer 
    brand={productData?.brand}
    dataSheet={productData?.dataSheet}
    image={productData?.image?productData.image:'/test.png'}
    name={productData?.name}
    brandCode={productData?.brandCode}
    />
    <ProductDesc id={productData?.id}/>
    <Footer/>
    </>
  )
}

export default SingleProduct