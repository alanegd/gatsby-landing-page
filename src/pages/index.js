import * as React from "react"
import Layout from "../components/layout/Layout"
import HeroSection from "../components/sections/HeroSection"
import BenefitsSection from "../components/sections/BenefitsSection"
import PricingSection from "../components/sections/PricingSection"

export default function IndexPage() {
  return (
    <Layout>
      <HeroSection/>
      <BenefitsSection/>
      <PricingSection/>
    </Layout>
  )
}
