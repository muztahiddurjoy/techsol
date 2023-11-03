import { ProductCard } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({brand,image,link,title}:ProductCard) => {
  return (
    <Link href={link}>
    <div className='p-3 my-2 transition-all ease-in-out duration-300 shadow-transparent shadow-lg hover:shadow-gray-400'>
        <Image height={200} width={300} src={image} alt='' className='w-full'/>
        <p className='mt-3 text-xs text-gray-500 text-center uppercase'>{brand}</p>
        <p className='text-lg mt-2 text-center transition-colors ease-in-out duration-150 text-primary hover:text-black font-semibold'>{title}</p>
    </div>
    </Link>
  )
}

export default ProductCard