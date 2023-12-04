import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav class="flex mb-4">
      <h1>Esketit</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
