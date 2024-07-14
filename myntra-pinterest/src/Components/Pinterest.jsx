import React from 'react'
import Header, {  } from "./Header";
import ScrollEffectComponent from './ScrollEffectComponent';
import Grid from './Grid';
import Footer from './Footer';

function Pinterest() {
  return (
    <>
    <div className='flex-col'>
    <Header />
    <div className='effect'><ScrollEffectComponent/></div>
    
    <div className='bg-rose-50 h-full pt-96'>
        <Grid/>
    </div>
    <Footer/>
    </div>
    
    </>
  )
}

export default Pinterest