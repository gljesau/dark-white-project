import React from 'react'

function AboutComponent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24"> 
      {/* padding x for spacing on smaller screens */}
      <div className="flex flex-col items-center text-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl pb-12 border-b dark:text-white">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl dark:text-white text-mainBlue mt-20 max-w-3xl">
          Imoodev je mali, ali posvećen tim zaljubljenika u tehnologiju, dizajn i razvoj softvera. 
          Naša misija je da stvaramo jednostavna, moderna i efikasna rešenja – bilo da se radi o web aplikacijama, mobilnim projektima ili kreativnim digitalnim alatima.
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl dark:text-white mt-20">
          Naše vrednosti
        </h2>
        <ul className="text-base sm:text-lg md:text-xl dark:text-white mt-12 space-y-4 max-w-md text-left">
          <li>✅ Jednostavnost i efikasnost</li>
          <li>💡 Kreativnost i inovacija</li>
          <li>🔒 Sigurnost i pouzdanost</li>
          <li>🤝 Transparentna saradnja sa klijentima</li>
        </ul>
        <div className="mt-32"></div>
      </div>
    </div>
  )
}

export default AboutComponent
