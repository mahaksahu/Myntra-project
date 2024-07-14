import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Wishlist() {
  return (
    <>
    <Header/>
    <div className="main-container bg-rose-50 min-h-screen p-4 grid grid-col-4">
        <h1 className='text-bold'>My Wishlist</h1>
        <img src="pinterest-hi-image.jpeg" className='w-60 h-80' />
    </div>
    <Footer/>
    </>
    
  )
}

export default Wishlist