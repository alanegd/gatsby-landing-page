import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import * as styles from '../../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import logoSVG from '../../images/logo.svg';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${scrolling ? styles.scrolled : ''}`}>
      <nav class="flex flex-wrap items-center justify-between align-middle">
        <div class="container mx-auto flex flex-wrap items-center justify-between text-white">
          <div class="w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start">
            <Link class="font-bold flex py-2 whitespace-nowrap items-center">
              <img class="mr-3" src={logoSVG} alt="logo" width="40" height="40"/>
              <h1 class="text-xl italic">SmartStock</h1>
            </Link>
            
            <button class="md:hidden" onClick={toggleMenu}>
              <FontAwesomeIcon icon={showMenu ? faClose : faBars}/>
            </button>
          </div>
          
          <div className={`md:flex md:flex-grow items-center ${showMenu ? 'flex w-full justify-end' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row list-none md:ml-auto gap-x-4 lg:gap-x-8">
              <li>
                <Link to="/">
                  <div className="px-3 py-2 flex">
                    <p class="hover:text-[#ec5f4d]">Home</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="px-3 py-2 flex">
                    <p class="hover:text-[#ec5f4d]">Features</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div class="px-3 py-2 flex">
                    <p class="hover:text-[#ec5f4d]">Pricing</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <div class="px-3 py-2 flex">
                    <p class="hover:text-[#ec5f4d]">About</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div class="px-3 py-2 flex">
                    <p class="hover:text-[#ec5f4d]">Login</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div class="px-3 py-2 flex">
                    <p class="font-bold hover:text-[#ec5f4d]">Sign up</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
