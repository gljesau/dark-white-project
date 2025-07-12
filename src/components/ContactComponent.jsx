import React from 'react'

function ContactComponent() {

    let allContact = [
        {
            title: 'Adress',
            description: 'Pere Perica 25'
        },
        {
            title: 'Number',
            description: '+3788727188'
        },
        {
            title: 'Gmail',
            description: 'tralala@gmail.com'
        },
        {
            title: 'Instagram',
            description: '@tralala'
        }
    ]

  return (
    <div className='container mx-auto mt-[100px] pb-[100px] px-[20px]'>
        <div className='flex flex-col justify-center text-center'>
            <h1 className='text-[64px] dark:text-white text-mainBlue font-extrabold'>Contact Us</h1>
            <h2 className='text-[32px] dark:text-white text-mainBlue mt-[30px]'>U can contact us here and get all information
            </h2>
        </div>
        <div>
            {allContact.map((contact, index) => {
                return <div key={index} className='border mx-auto w-[30%] text-center items-center flex-col border-lightGray mt-[50px] rounded-[10px] p-[20px] hover:dark:bg-white hover:dark:text-mainBlue dark:text-white text-mainBlue hover:bg-mainBlue hover:text-white transition-all duration-222 cursor-pointer'>
                    <h3 className='text-[24px]'>{contact.title}:</h3>
                    <p className='text-[18px] '>{contact.description}</p>
                </div>
            })}
        </div>

    </div>
  )
}

export default ContactComponent