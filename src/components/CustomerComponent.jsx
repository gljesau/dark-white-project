import React from 'react'
import { Link } from 'react-router-dom'

function CustomerComponent() {
  return (
    <div className='mx-auto dark:bg-white bg-mainBlue'>
      <div className='container mx-auto flex justify-center text-center items-center px-4'>
        <h1 className='text-[28px] sm:text-[36px] md:text-[42px] text-white dark:text-mainBlue font-bold mt-[40px] sm:mt-[48px] md:mt-[64px]'>
          We always prioritize customer satisfaction
        </h1>
      </div>

      <div className='container mx-auto flex flex-col sm:flex-col md:flex-row gap-[24px] sm:gap-[30px] justify-between mt-[32px] sm:mt-[40px] md:mt-[48px] pb-[30px] px-4'>
        {/* Card 1 */}
        <div className='border border-lightGray dark:bg-white bg-white w-full md:w-[30.3%] h-auto md:h-auto md:pb-5 pl-[20px] sm:pl-[30px] md:pl-[40px] pr-[20px] sm:pr-[30px] md:pr-[40px] pt-[32px]'>
          <h1 className='text-[40px] sm:text-[56px] md:text-[64px] text-mainBlue font-extrabold'>01</h1>
          <h2 className='text-[18px] sm:text-[22px] md:text-[24px] text-mainBlue font-bold mt-[28px] sm:mt-[30px] md:mt-[32px] mb-[6px]'>
            Expand your business to the online realm
          </h2>
          <p className='text-[14px] sm:text-[15px] md:text-[16px] text-lightGray mb-[32px] md:mb-[64px]'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
          </p>
          <Link to="/register" className='text-[14px] sm:text-[15px] md:text-[16px] text-mainBlue font-bold hover:underline'>
            Learn more
          </Link>
        </div>

        {/* Card 2 */}
        <div className='border border-lightGray dark:bg-white bg-white w-full md:w-[30.3%] h-auto md:h-auto md:pb-5 pl-[20px] sm:pl-[30px] md:pl-[40px] pr-[20px] sm:pr-[30px] md:pr-[40px] pt-[32px]'>
          <h1 className='text-[40px] sm:text-[56px] md:text-[64px] text-mainBlue font-extrabold'>02</h1>
          <h2 className='text-[18px] sm:text-[22px] md:text-[24px] text-mainBlue font-bold mt-[28px] sm:mt-[30px] md:mt-[32px] mb-[6px]'>
            Expand your business to the online realm
          </h2>
          <p className='text-[14px] sm:text-[15px] md:text-[16px] text-lightGray mb-[32px] md:mb-[64px]'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
          </p>
          <Link to="/register" className='text-[14px] sm:text-[15px] md:text-[16px] text-mainBlue font-bold hover:underline'>
            Learn more
          </Link>
        </div>

        {/* Card 3 */}
        <div className='border border-lightGray dark:bg-white bg-white w-full md:w-[30.3%] h-auto md:h-auto md:pb-5 pl-[20px] sm:pl-[30px] md:pl-[40px] pr-[20px] sm:pr-[30px] md:pr-[40px] pt-[32px]'>
          <h1 className='text-[40px] sm:text-[56px] md:text-[64px] text-mainBlue font-extrabold'>03</h1>
          <h2 className='text-[18px] sm:text-[22px] md:text-[24px] text-mainBlue font-bold mt-[28px] sm:mt-[30px] md:mt-[32px] mb-[6px]'>
            Enjoy the results of selling online staff here
          </h2>
          <p className='text-[14px] sm:text-[15px] md:text-[16px] text-lightGray mb-[32px] md:mb-[64px]'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
          </p>
          <Link to="/register" className='text-[14px] sm:text-[15px] md:text-[16px] text-mainBlue font-bold hover:underline'>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CustomerComponent
