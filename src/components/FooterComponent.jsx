import React from 'react'

function FooterComponent() {
  return (
      <footer className=" bg-white dark:bg-[#0D1B39] text-gray-800 dark:text-white py-10 px-6">
      <div className="mt-[140px] mx-auto container max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        
        <div>
          <h2 className="text-xl font-bold mb-4">Imoodev</h2>
          <div className="text-sm flex items-start gap-2 mb-2">
            526 Melrose Street, New York
          </div>
          <div className="text-sm flex items-start gap-2 mb-2">
            imoodev@gmail.com
          </div>
          <div className="text-sm flex items-start gap-2">
             +123 4567 8910
          </div>
        </div>

        {/* Our Feature */}
        <div>
          <h3 className="text-md font-semibold mb-3">Our Feature</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>Playing With Code</li>
            <li>Promoting tools</li>
            <li>Our Portfolio</li>
            <li>Employee Benefits</li>
          </ul>
        </div>

        {/* Our Service */}
        <div>
          <h3 className="text-md font-semibold mb-3">Our Service</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>Digital Service</li>
            <li>Marketing Service</li>
          </ul>
        </div>

        {/* Email prijava */}
        <div>
          <h3 className="text-md font-semibold mb-3">Join our email</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Enter your email address for updated news from us
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 w-[360px] h-[60px] px-4 py-2 text-sm border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent dark:border-gray-600 dark:text-white"
            />
            <button className="bg-mainBlue h-[60px] w-[60px] text-white p-2 rounded-[5px] transition">
             ->
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-10 pt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        <p className='mt-[23px]'>Copyright © imoodev 2025 | All right reserved</p>
      </div>
    </footer>
  )
}

export default FooterComponent