import React from 'react';
import slika from '../assets/slika.png';
import slika2 from '../assets/slika2.png';
import { Link } from 'react-router-dom';

function ServiceComponent() {
  return (
    <div>
      <div className="container mx-auto mt-36 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:w-1/2 mt-16">
          <h2 className="text-[#FF6F29] text-lg sm:text-xl font-semibold">
            Who is Imoodev?
          </h2>
          <h1 className="dark:text-white md:text-[24px] text-mainBlue mt-4 text-3xl sm:text-4xl font-bold">
            We are a service engaged in digital marketing
          </h1>
          <p className="text-lightGray mt-4 text-sm sm:text-base mb-12">
            Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.
          </p>
          <Link
            to="/contact"
            className="bg-mainBlue font-bold mt-10 text-white w-44 h-14 flex items-center justify-center p-4 dark:bg-white dark:border dark:border-white dark:text-mainBlue rounded"
          >
            Consult Now
          </Link>
        </div>
        <div className="md:w-1/2 w-full">
          <img className="w-full rounded" src={slika} alt="Who is Imoodev?" />
        </div>
      </div>

      <div className="container mx-auto mt-36 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center md:items-start gap-8 pb-36">
        <div className="md:w-[50%] mt-16 md:mt-0">
          <h1 className="dark:text-white text-mainBlue mt-4 md:text-[24px] text-3xl md:text- sm:text-4xl font-bold">
            Expand your business by building a website online
          </h1>
          <p className="text-lightGray mt-4 text-sm sm:text-base mb-12">
            Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.
          </p>
          <Link
            to="/contact"
            className="bg-mainBlue font-bold mt-10 text-white w-44 h-14 flex items-center justify-center p-4 dark:bg-white dark:border dark:border-white dark:text-mainBlue rounded"
          >
            Consult Now
          </Link>
        </div>
        <div className="md:w-1/2 w-full">
          <img className="w-full rounded" src={slika2} alt="Expand your business" />
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;
