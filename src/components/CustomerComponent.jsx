import React from 'react'

function CustomerComponent() {
  return (
    <div className='mx-auto dark:bg-white bg-mainBlue'>
        <div className='container mx-auto flex justify-center text-center align-center'>
        <h1 className='text-[42px] text-white dark:text-mainBlue font-bold mt-[64px] '>We always prioritize customer satisfaction</h1>
        </div>
        <div className='container mx-auto flex flex-row gap-[30px] justify-between mt-[48px] pb-[30px]'>
            <div className='border border-lightGray dark:bg-white bg-white w-[30.3%] h-[465px] pl-[40px] pr-[40px] pt-[32px]'>
                <h1 className='text-[64px] text-mainBlue font-extrabold'>01</h1>
                <h2 className='text-[24px] text-mainBlue font-bold mt-[32px] mb-[6px]'>Expand your business to the online realm</h2>
                <p className='text-[16px] text-lightGray mb-[64px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat </p>
                <p className='text-[16px] text-mainBlue font-bold underline'>Learnmore</p>
            </div>
            <div className='border border-lightGray dark:bg-white bg-white w-[30.3%] h-[465px] pl-[40px] pr-[40px] pt-[32px]'>
                <h1 className='text-[64px] text-mainBlue font-extrabold'>02</h1>
                <h2 className='text-[24px] text-mainBlue font-bold mt-[32px] mb-[6px]'>Expand your business to the online realm</h2>
                <p className='text-[16px] text-lightGray mb-[64px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat </p>
                <p className='text-[16px] text-mainBlue font-bold underline'>Learnmore</p>
            </div>
            <div className='border border-lightGray dark:bg-white bg-white w-[30.3%] h-[465px] pl-[40px] pr-[40px] pt-[32px]'>
                <h1 className='text-[64px] text-mainBlue font-extrabold'>03</h1>
                <h2 className='text-[24px] text-mainBlue font-bold mt-[32px] mb-[6px]'>Enjoy the results of selling online</h2>
                <p className='text-[16px] text-lightGray mb-[64px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat </p>
                <p className='text-[16px] text-mainBlue font-bold underline'>Learnmore</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerComponent