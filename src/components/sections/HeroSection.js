import React from 'react'
import * as styles from '../../styles/hero.module.css'

export default function HeroSection() {
  return (
    <section className={styles.header} >
      <div class="xl:container mx-auto w-full md:w-2/3 text-center md:text-left">
        <div class="leading-relaxed mb-5">
          <h1 class="py-5 text-3xl text-white md:text-7xl font-semibold">Inventories simplified,<br/> success amplified</h1>
          <p class="py-5 md:text-2xl font-light text-white ">Seamlessly manage your business inventory with a single application.</p>
        </div>
        <div class="py-5">
          <a href="#" class="py-3 px-7 font-semibold text-white bg-[#ec5f4d] hover:bg-[#ff7c67] rounded-full cursor-pointer">Get started</a>
        </div>
      </div>   
    </section>
  )
}