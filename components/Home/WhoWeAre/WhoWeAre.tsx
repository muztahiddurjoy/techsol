import React from 'react'
import GridContainer from './GridContainer/GridContainer'

const WhoWeAre = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:px-20 xl:px-60 px-3 md:py-20 py-10 2xl:px-[564px]'>
        <GridContainer image='/enviromen.jpg' link='/compnay-profile' title="Who we are"  text='A pioneer in manufacturing products, providing solutions and services.'/>
        <GridContainer image='/EPC.jpg' title="What we do"  text='We design and manufacture customised products and provide reliable solutions and services. We provide solutions for modernisation of old designs and technologies.'/>
    </div>
  )
}

export default WhoWeAre