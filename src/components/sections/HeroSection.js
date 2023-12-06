import React from 'react'
import * as styles from '../../styles/hero.module.css'

export default function HeroSection() {
  return (
    <section className={styles.header} >
      <div class="w-full md:w-2/3 text-center md:text-left">
        <div class="py-5 md:py-10 leading-relaxed">
          <h1 class="py-5 md:py-7 text-3xl text-white md:text-6xl">Inventories simplified, success amplified</h1>
          <p class="md:text-2xl font-light text-white ">Seamless inventory management for your business</p>
        </div>
        <div>
          <a href="#" class="py-3 px-12 font-bold text-white bg-[#ec5f4d] hover:bg-[#ff7c67] rounded-full cursor-pointer">Get started for free</a>
        </div>
      </div>   
    </section>
  )
}