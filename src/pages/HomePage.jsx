import React from 'react'
import HeroComponent from '../components/HeroComponent'
import FeaturesComponent from '../components/FeaturesComponent'
import ServiceComponent from '../components/ServiceComponent'
import CustomerComponent from '../components/CustomerComponent'
import NewsComponent from '../components/NewsComponent'
import EmailComponent from '../components/EmailComponent'
import FooterComponent from '../components/FooterComponent'


function HomePage() {
  return (
    <div>
      <HeroComponent />
      <FeaturesComponent />
      <ServiceComponent />
      <CustomerComponent />
      <NewsComponent />
      <EmailComponent />
      <FooterComponent />
    </div>
  )
}

export default HomePage