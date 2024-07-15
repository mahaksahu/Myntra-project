import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Wishlist() {
  return (
    <>
    <Header/>
    <div className="main-container-wishlist bg-rose-50 min-h-screen p-4 grid grid-col-4">
      <div className=' white-box-wishlist w-96 h-56'>
      <h1 className=' wishlist-empty text-bold mt-10'>YOUR WISHLIST IS EMPTY</h1>
      <h3 className='add-items'>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</h3>
      <img src="llist.png" alt="list" className='list-image h-20 '/>
      
      <button className='continue-shopping-button mb-10 '><a href="/">CONTINUE SHOPPING</a></button>
      
      </div>
        
    </div>
    <Footer/>
    </>
    
  )
}

export default Wishlist