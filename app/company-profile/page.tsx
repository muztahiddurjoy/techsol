import CompanyBody from '@/components/CompanyProfile/CompanyBody/CompanyBody'
import Header from '@/components/CompanyProfile/Header/Header'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const CompanyProfile = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <CompanyBody/>
    <Footer/>
    </>
  )
}

export default CompanyProfile