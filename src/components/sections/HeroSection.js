import React from 'react'
import * as styles from '../../styles/hero.module.css'

export default function HeroSection() {
  return (
    <section className={styles.header} >
      <div class="w-full md:w-2/3 text-center md:text-left">
        <div class="py-10">
          <h1 class="py-10 font-bold text-3xl md:text-6xl text-white leading-relaxed">Inventories simplified, success amplified</h1>
          <p class="md:text-2xl text-white ">Seamless inventory management for your business success</p>
        </div>
        <div class="py-10">
          <a class="py-3 px-12 font-bold bg-white rounded-full cursor-pointer">Sign up</a>
        </div>
      </div>   
    </section>
  )
}