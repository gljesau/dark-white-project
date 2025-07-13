import React from 'react'
import { Link } from 'react-router-dom'

function HeroComponent() {
  return (
    <div className="container mx-auto mt-14 px-5 sm:px-8 lg:px-12">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl dark:text-white text-mainBlue text-center font-extrabold max-w-4xl mx-auto">
          We are creative agency capable of creating outstanding designs and websites
        </h2>
        <p className="text-lightGray text-center mt-4 max-w-xl mx-auto text-sm sm:text-base">
          with Immodev Reach more customers and grow your business potential online by building a website with us
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-4 mt-8 py-5 max-w-md mx-auto">
        <Link
          to="/contact"
          className="bg-mainBlue text-white px-10 py-4 dark:bg-white dark:border dark:border-white dark:text-mainBlue rounded text-center"
        >
          Consult Now
        </Link>
        <Link
          to="/about"
          className="bg-white text-mainBlue px-10 py-4 border border-mainBlue dark:bg-mainBlue dark:text-white dark:border dark:border-white rounded text-center"
        >
          About Us
        </Link>
      </div>
    </div>
  )
}

export default HeroComponent
