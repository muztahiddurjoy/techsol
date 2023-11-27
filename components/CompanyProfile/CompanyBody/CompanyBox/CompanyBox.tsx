import Image from 'next/image'
import React from 'react'

const CompanyBox = ({align,image,text}:{align:'left'|'right',image?:string,text:string}) => {
  return (
    <div className={`flex py-10 md:flex-row ${align=="left"&&'flex-col'} ${align=="right"&&'flex-col-reverse items-center md:items-start'}`}>
        {(image&&align=="left")&&<Image width={500} height={500} src={image} alt='Techsol BD'/>}
        <p className='px-5 py-5 md:py-0 text-gray-700' dangerouslySetInnerHTML={{__html:text}}></p>
        {(image&&align=="right")&&<Image width={500} height={500} src={image} alt='Techsol BD'/>}
    </div>
  )
}

export default CompanyBox