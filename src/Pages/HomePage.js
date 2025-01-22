import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import BelowTrustedBy from '../Components/BelowTrustedBy'
import Section from '../Components/Section'
import CoreFeatures from '../Components/CoreFeatures'
import RevenueModel from '../Components/RevenueModel'
import MarketingStrategy from '../Components/MarketingStrategy'
import FuturePlans from '../Components/FuturePlans'
import BrandingAndDesign from '../Components/BrandingAndDesign'

const HomePage = () => {
  return (
    <>
    <Header />
    <Banner />
    <CoreFeatures />
    <Section /> 
    <RevenueModel />
    <BelowTrustedBy />
    <MarketingStrategy />
    <BrandingAndDesign />
    <FuturePlans />
    <Footer />
    </>
  )
}

export default HomePage