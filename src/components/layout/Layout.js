import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../../styles/global.css'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        { children }
      </div>
      <Footer></Footer>
    </div>
  )
}