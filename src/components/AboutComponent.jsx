import React from 'react'

function AboutComponent() {
  return (
    <div className='container mx-auto mt-[100px]'>
        <div className='flex flex-col align-center text-center justify-center'>
            <h1 className='text-[48px] pb-[50px] border-b dark:text-white'>About Us</h1>
            <p className='text-[22px] dark:text-white text-mainBlue mt-[100px]'>Imoodev je mali, ali posvećen tim zaljubljenika u tehnologiju, dizajn i razvoj softvera. Naša misija je da stvaramo jednostavna, moderna i efikasna rešenja – bilo da se radi o web aplikacijama, mobilnim projektima ili kreativnim digitalnim alatima.</p>
            <h2 className='text-[48px] dark:text-white  mt-[100px]'>Naše vrednosti</h2>
            <div className=''>
            <ul className='text-[22px] dark:text-white  mt-[100px]'>
                <li>
                    ✅Jednostavnost i efikasnost
               </li>
                <li>
                    💡Kreativnost i inovacija
                </li>
                <li>
                    🔒Sigurnost i pouzdanost
                </li>
                <li>
                    🤝Transparentna saradnja sa klijentima
                </li>
               </ul>
               </div>
               <div className='mt-[130px]'></div>
        </div>
    </div>
  )
}

export default AboutComponent