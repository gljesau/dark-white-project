import React from 'react'

function EmailComponent() {
  return (
    <div className="mx-auto container text-center justify-center mt-[168px] dark:bg-white bg-orange-200 border rounded-[30px] dark:border-none w-full
    h-[366px] ">
      <h2 className="text-[42px] font-semibold text-mainBlue pt-[56px]">Subs Our Newsletter for Daily Update</h2>
     
      <div className="flex mx-auto w-[590px] items-center h-[82px] mt-[80px] mb-[56px] bg-mainBlue sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Your email address here"
          className="flex-1 px-4 py-2 ptborder border-gray-300 focus:outline-none  bg-mainBlue"
        />
        <button className="bg-white w-[183px] h-[63px] text-mainBlue mr-[10px]">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default EmailComponent