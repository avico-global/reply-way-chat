import React from 'react'
import Navbar from '../../components/common/Navbar'
import Hero from '../../components/container/Home/Hero'

import Features from '../../components/container/Home/Features'
import Solutions from '../../components/container/Home/Solutions'
import ProductAndServices from '../../components/container/Home/ProductAndServices'

import Footer from '../../components/common/Footer'

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='relative'>
        <div className='sticky top-0 left-0 w-full z-50'>
         
        </div>
        <Features />
        <Solutions />
        <ProductAndServices />
      </div>
      <Footer />
    </>
  )
}
