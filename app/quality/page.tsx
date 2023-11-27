
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/Quality/Header/Header'
import NoteFromDirector from '@/components/Quality/NoteFromDirector/NoteFromDirector'
import QualityOfTechsol from '@/components/Quality/QualityOfTechsol/QualityOfTechsol'
import React from 'react'

const Quality = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <QualityOfTechsol/>
    <NoteFromDirector/>
    <Footer/>
    </>
  )
}

export default Quality