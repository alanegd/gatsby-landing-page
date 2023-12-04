import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Navbar></Navbar>
      <div className='content'>
        { children }
      </div>
      <Footer></Footer>
    </div>
  )
}

//export const Head = () => <title>Landing Page</title>