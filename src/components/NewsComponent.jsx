import React from 'react';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';

function NewsComponent() {
  return (
    <div className='mx-auto bg-white dark:bg-mainBlue'>
      <div className='mx-auto container mt-[204px] text-center'>
        <h1 className='text-[32px] sm:text-[36px] md:text-[42px] dark:text-white text-mainBlue font-bold mt-[64px]'>
          Latest News From Imoodev
        </h1>
      </div>

      <div className='container mx-auto flex flex-col sm:flex-row items-center justify-between mt-[48px] pb-[30px] gap-5 px-4'>
        {/* Card 1 */}
        <div className='dark:border border rounded-3xl border-lightGray dark:bg-white bg-white w-full sm:w-[405px] h-auto hover:shadow-xl hover:-translate-y-1 duration-700'>
          <img className='w-full h-[270px] rounded-t-3xl' src={news1} alt='News 1' />
          <div className='flex gap-10 pl-5 pt-5'>
            <p className='text-xs sm:text-sm md:text-base text-lightGray'>September 9, 2020</p>
            <p className='text-xs sm:text-sm md:text-base text-lightGray'>Posted By Admin</p>
          </div>
          <h1 className='text-sm sm:text-base md:text-lg lg:text-xl text-mainBlue pl-5 mt-2 pr-5'>
            Introducing Uncode 2.3.0 and the WooCommerce Builder
          </h1>
          <p className='text-xs sm:text-sm md:text-base text-lightGray pl-5 pr-5 mt-2 pb-5'>
            We are pleased to bring you Uncode 2.3.0 — the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress theme.
          </p>
        </div>

        {/* Card 2 */}
        <div className='dark:border border rounded-3xl border-lightGray dark:bg-white bg-white w-full sm:w-[405px] h-auto hover:shadow-xl hover:-translate-y-1 duration-700'>
          <img className='w-full h-[270px] rounded-t-3xl' src={news2} alt='News 2' />
          <div className='flex gap-10 pl-5 pt-5'>
            <p className='text-xs sm:text-sm md:text-base text-lightGray'>September 9, 2020</p>
            <p className='text-xs sm:text-sm md:text-base text-lightGray'>Posted By Admin</p>
          </div>
          <h1 className='text-sm sm:text-base md:text-lg lg:text-xl text-mainBlue pl-5 mt-2 pr-5'>
            Introducing Uncode 2.3.0 and the WooCommerce Builder
          </h1>
          <p className='text-xs sm:text-sm md:text-base text-lightGray pl-5 pr-5 mt-2 pb-5'>
            We are pleased to bring you Uncode 2.3.0 — the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress theme.
          </p>
        </div>

        {/* Card 3 */}
        <div className='dark:border border rounded-3xl border-lightGray dark:bg-white bg-white w-full sm:w-[405px] h-auto hover:shadow-xl hover:-translate-y-1 duration-700'>
          <img className='w-full h-[270px] rounded-t-3xl' src={news3} alt='News 3' />
          <div className='flex gap-10 pl-5 pt-5'>
            <p className='text-xs sm:text-sm md:text-base text-lightGray'>September 9, 2020</p>
            <p className='text-xs sm:text-sm md:text-base text-lightGray'>Posted By Admin</p>
          </div>
          <h1 className='text-sm sm:text-base md:text-lg lg:text-xl text-mainBlue pl-5 mt-2 pr-5'>
            Introducing Uncode 2.3.0 and the WooCommerce Builder
          </h1>
          <p className='text-xs sm:text-sm md:text-base text-lightGray pl-5 pr-5 mt-2 pb-5'>
            We are pleased to bring you Uncode 2.3.0 — the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress theme.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
