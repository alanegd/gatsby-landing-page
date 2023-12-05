import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../../styles/navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav class="flex flex-wrap justify-between py-6 sticky z-100 top-0">
        <div class="container flex flex-wrap items-center justify-between mx-auto text-white">
          <Link class="font-bold flex items-center">
            <img class="mr-3" src="../../images/hero.jpg" alt="logo" width="30" height="30"/>
            <h1>SmartStock</h1>
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
    </div>
  )
}
