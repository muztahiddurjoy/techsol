import { generatorsets } from '@/components/Navbar/genetatorSets'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductContainer = ({link}:{link:string}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 md:px-20 px-5 mt-10'>
      <div className="hidden md:block">
            <p className='font-bold text-gray-600 uppercase'>PRODUCTS</p>
            <div className="w-16 my-3 h-[3px] bg-gray-300"></div>
            <ul>
                {generatorsets.map((v,i)=> <li className={`my-3 text-sm ${v.link.includes(link)&&'font-bold text-black'} hover:text-black text-primary`}><Link href={v.link}>{v.title}</Link></li>)}
            </ul>
        </div>
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
          <Image src="/gen.jpg" height={500} width={600} alt=''/>
          </div>
          <div className="flex justify-end items-center pl-10">
            <div className="rounded-lg bg-gray-200 p-5 flex items-end justify-center flex-col h-full w-full">
              <Link className='text-sm text-gray-500 uppercase text-right' href="/">Doosan</Link>
              <p className='text-3xl text-gray-800 font-bold text-right'>EN170D</p>
              <div className="h-[2px] w-10 bg-gray-400 my-5"></div>
              <p className='font-bold text-lg text-gray-700 text-right'>Datasheet</p>
              <Link href="/"><Button className='rounded-none mt-5' size="lg">EN170D</Button></Link>
              <div className="flex items-center justify-end text-xs mt-4 ">
                <p className='text-gray-500'>Category: </p>
                <Link href="/" className='text-primary ml-2'> Doosan</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductContainer 