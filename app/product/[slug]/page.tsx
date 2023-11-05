import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/SingleProduct/Header/Header'
import ProductContainer from '@/components/SingleProduct/ProductContainer/ProductContainer'
import ProductDesc from '@/components/SingleProduct/ProductDesc/ProductDesc'
import React from 'react'

const SingleProduct = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <ProductContainer/>
    <ProductDesc/>
    <Footer/>
    </>
  )
}

export default SingleProduct