import * as React from "react"
import Layout from "../components/layout/Layout"
import HeroSection from "../components/sections/HeroSection"

export default function IndexPage() {
  return (
    <Layout>
      <HeroSection></HeroSection>
      <section>
        <div>
          <h1>Home page</h1>
          <p>Lorem ipsum</p>
        </div>
      </section>
    </Layout>
  )
}
