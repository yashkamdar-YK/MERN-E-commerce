import React from 'react'
import TopBanner from './component/TopBanner'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Product from './component/Product'
import About from './component/About'
import Offer from './component/Offer'
import Footer from './component/Footer'

function App() {
  return (
    <div className='w-full h-screen m-0 p-0 box-border font-roboto bg-white overflow-auto scrollbar-hide'>
      <TopBanner/>
      <Navbar/>
      <Hero/>
      <Product/>
      <About/>
      <Offer/>
      <Footer/>  
    </div>
    
  )
}

export default App