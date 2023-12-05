import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav class="flex flex-wrap justify-between py-6 relative">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link class="font-bold flex items-center">
          <img class="mr-3" src=".\images\icon.png" alt="logo" width="30" height="30"/>
          <h1>Title</h1>
        </Link>

        <div class="items-center">
          <ul class="flex flex-col md:flex-row list-none">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
