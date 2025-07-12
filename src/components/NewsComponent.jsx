import React from 'react'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'

function NewsComponent() {
  return (
    <div className='mx-auto bg-white dark:bg-mainBlue'>
        <div className='mx-auto container mt-[204px]'>
        <h1 className='text-[42px] dark:text-white text-mainBlue font-bold mt-[64px] '>Latest News From Imoodev</h1>
        </div>
        <div className='container mx-auto flex flex-row justify-between mt-[48px] pb-[30px]'>
            <div className='dark:border border rounded-3xl border-lightGray dark:bg-white bg-white w-[405px] h-[535px] hover:shadow-xl hover:-translate-y-1 duration-700'>
                <img className="w-full h-[270px] rounded-t-3xl" src={news1} alt="" />
              <div className='flex gap-10 pl-5 pt-5'>
                <p className='text-lightGray'>September 9, 2020</p>
                <p className='text-lightGray'>Posted By Admin</p>
                </div>
                <h1 className='text-[24px] text-mainBlue pl-5 mt-[16px]'>Introducing Uncode 2.3.0 and the WooCommerce Builder</h1>
                <p className='text-lightGray pl-5 mt-[16px]'>We are pleased to bring you Uncode 2.3.0 the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress . . . .</p>
            </div>
            <div className='dark:border border rounded-3xl border-lightGray dark:bg-white bg-white w-[405px] h-[535px] hover:shadow-xl hover:-translate-y-1 duration-700'>
               <img className="w-full h-[270px] rounded-t-3xl" src={news2} alt="" /> 
               <div className='flex gap-10 pl-5 pt-5'>
                <p className='text-lightGray'>September 9, 2020</p>
                <p className='text-lightGray'>Posted By Admin</p>
                </div>
                <h1 className='text-[24px] text-mainBlue pl-5 mt-[16px]'>Introducing Uncode 2.3.0 and the WooCommerce Builder</h1>
                <p className='text-lightGray pl-5 mt-[16px]'>We are pleased to bring you Uncode 2.3.0 the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress . . . .</p>
            </div>
            <div className='dark:border border rounded-3xl border-lightGray dark:bg-white bg-white w-[405px] h-[535px] hover:shadow-xl hover:-translate-y-1 duration-700'>
                <img className="w-full h-[270px] rounded-t-3xl"src={news3} alt="" />
              <div>
                <div className='flex gap-10 pl-5 pt-5'>
                <p className='text-lightGray'>September 9, 2020</p>
                <p className='text-lightGray'>Posted By Admin</p>
                </div>
                <h1 className='text-[24px] text-mainBlue pl-5 mt-[16px]'>Introducing Uncode 2.3.0 and the WooCommerce Builder</h1>
                <p className='text-lightGray pl-5 mt-[16px]'>We are pleased to bring you Uncode 2.3.0 the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress . . . .</p>
            </div>
        </div>
       
      
    </div>
    </div>
  )
}

export default NewsComponent