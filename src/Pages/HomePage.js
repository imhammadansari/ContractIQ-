import React from 'react'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import BelowTrustedBy from '../Components/BelowTrustedBy'
import Section from '../Components/Section'
import CoreFeatures from '../Components/CoreFeatures'
import RevenueModel from '../Components/RevenueModel'
import MarketingStrategy from '../Components/MarketingStrategy'
import FuturePlans from '../Components/FuturePlans'
import BrandingAndDesign from '../Components/BrandingAndDesign'
import HeaderForHome from '../Components/HeaderForHome'

const HomePage = () => {
  return (
    <>
    <HeaderForHome />
    {/* <BannerImage /> */}
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