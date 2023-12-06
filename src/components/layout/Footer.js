import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../../styles/footer.module.css'
import logoSVG from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class="w-full py-8">
        <div class="container mx-auto flex flex-wrap justify-between text-white">
          <div class="flex md:flex-col px-4 mb-6 md:mb-0 items-center md:items-baseline gap-x-8">
            <Link class="font-bold flex py-2 whitespace-nowrap items-center">
              <img class="mr-3" src={logoSVG} alt="logo" width="40" height="40"/>
              <h1 class="text-xl italic">SmartStock</h1>
            </Link>

            <div>
              <div class="container flex md:mt-4">
                <a href="#" class="text-gray-500 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="#" class="text-gray-500 hover:text-white ms-5">
                  <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="#" class="text-gray-500 hover:text-white ms-5">
                  <FontAwesomeIcon icon={faInstagram}/>
                </a>
              </div>
            </div>
          </div>

          <div class="flex justify-center gap-10 px-5">
            <div>
              <h2 class="mb-6 font-bold text-white">Get started</h2>
              <ul class="text-gray-400">
                <li class="mb-4">
                  <a href="#" class="text-sm hover:underline cursor-pointer">Login</a>
                </li>
                <li class="mb-4">
                  <a href="#" class="text-sm hover:underline cursor-pointer">Sign up</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 font-bold text-white">Legal</h2>
              <ul class="text-gray-400">
                <li class="mb-4">
                  <a href="#" class="text-sm hover:underline cursor-pointer">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" class="text-sm hover:underline cursor-pointer">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 font-bold text-white">Need help?</h2>
              <ul class="text-gray-400">
                  <li class="mb-4">
                    <a href="#" class="text-sm hover:underline cursor-pointer">Contact us</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm hover:underline cursor-pointer">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}
