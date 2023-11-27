import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GridContainer = ({image,text,link,title}:{image:string,text:string,link?:string,title:string}) => {
  return (
    <div className="p-3 h-full">
    <div className='bg-[#efefef] h-full p-3 rounded-lg'>
        {image&&<Image src={image} height={500} width={500} alt='Techsol BD' className='w-full rounded-lg'/>}
        <p className='mt-5 text-2xl font-medium text-primary'>{title}</p>
        <p className='mt-1 text-gray-600'>{text}</p>
        {link&&<Link href={link} className='text-sm mt-2 text-primary'>Know More</Link>}
    </div>
    </div>
  )
}

export default GridContainer