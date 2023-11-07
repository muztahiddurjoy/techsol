"use client"

import { PageProps } from '@/.next/types/app/page'
import { apiurl } from '@/apiurl'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { generatorsets } from '@/components/Navbar/genetatorSets'
import Header from '@/components/ProductCategory/Header/Header'
import ProductContainer from '@/components/ProductCategory/ProductContainer/ProductContainer'
import { CategoryType, GeneratorSets } from '@/types/types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductCategory = ({params}:PageProps) => {
  const [MainData, setMainData] = useState<CategoryType>({id:'',image:'',link:'',name:''})
  useEffect(() => {
    axios.get(`${apiurl}/category/${params.slug}`).then((res)=>{
      setMainData(res.data.result[0])
    }).catch((err)=> console.log(err))
  }, [])
  
  return (
    <>
    <Navbar/>
    <Header image={MainData.image} link={MainData.link} title={MainData.name}/>
    <ProductContainer id={MainData.id}/>
    <Footer/>
    </>
  )
}

export default ProductCategory
