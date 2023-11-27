import React from 'react'
import ProductCarousel from './ProductCarousel/ProductCarousel'

const AllProductsCarousel = () => {
  return (
    <div className='mt-20'>
        <p className='text-center text-primary text-2xl md:text-3xl font-bold uppercase 2xl:text-4xl'>ALL PRODUCTS</p>
        <p className='text-center text-gray-500 mt-6 text-sm md:px-32 px-5 lg:px-44 2xl:px-[482px]'>Techsol offers solutions to meet any need with transformers and generators with high or low voltage options ranging from residential to industrial usage which are available in its standard product portfolio.</p>
        <div className="mt-5 md:px-10 px-3 lg:px-20">
            <ProductCarousel/>
        </div>
    </div>
  )
}

export default AllProductsCarousel