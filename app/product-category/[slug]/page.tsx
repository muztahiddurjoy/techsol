"use client"

import { PageProps } from '@/.next/types/app/page'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { generatorsets } from '@/components/Navbar/genetatorSets'
import Header from '@/components/ProductCategory/Header/Header'
import ProductContainer from '@/components/ProductCategory/ProductContainer/ProductContainer'
import { GeneratorSets } from '@/types/types'
import React, { useEffect, useState } from 'react'

const ProductCategory = ({params}:PageProps) => {
  const [MainData, setMainData] = useState<GeneratorSets>({link:'',title:'',image:''})
  useEffect(() => {
    generatorsets.forEach((v)=> {
      if(v.link.includes(params.slug)){
          setMainData(v)
          return
      }
      }
      )
  }, [])
  
  return (
    <>
    <Navbar/>
    <Header image={MainData.image} link={MainData.link} title={MainData.title}/>
    <ProductContainer link={MainData.link}/>
    <Footer/>
    </>
  )
}

export default ProductCategory
