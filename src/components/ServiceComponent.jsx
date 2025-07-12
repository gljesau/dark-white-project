import React from 'react';
import slika from '../assets/slika.png';
import slika2 from '../assets/slika2.png';
import { Link } from 'react-router-dom';


function ServiceComponent() {


	return (
		<div>
			<div className='container mx-auto mt-[140px] flex'>
				<div className='w-[50%] mt-[68px] mr-[30px]'>
					<h2 className='text-[#FF6F29] text-[24px] '>
						Who is Imoodev?
					</h2>
					<h1 className='dark:text-white text-mainBlue mt-[16px] text-[42px] font-bold'>
						We are a service engaged in digital marketing
					</h1>
					<p className='text-lightGray mt-[16px] text-[16px] mb-[50px]'>
						Do not miss this opportunity. With our experience, Whello
						will find something unique in your brand. Analyze and try
						to follow what your audience really likes and is looking
						for, so that your customers will be more loyal to you.
					</p>
					<Link to="/contact" className='bg-mainBlue font-bold mt-[40px] text-white w-[174px] h-[58px] p-[20px] dark:bg-white dark:border dark:border-white dark:text-mainBlue'>
						Consult Now
					</Link>
				</div>
				<div className='w-[50%]'>
					<img className='w-full' src={slika} alt='' />
				</div>
			</div>
			<div className='container mx-auto mt-[140px] flex flex-row-reverse pb-[140px]'>
				<div className='w-[50%] ml-[30px]'>
					<h1 className='dark:text-white text-mainBlue mt-[16px] text-[42px] font-bold'>
						Expand your business by building a website online
					</h1>
					<p className='text-lightGray mt-[16px] text-[16px] mb-[50px]'>
						Do not miss this opportunity. With our experience, Whello
						will find something unique in your brand. Analyze and try
						to follow what your audience really likes and is looking
						for, so that your customers will be more loyal to you.
					</p>
					<Link to="/contact" className='bg-mainBlue font-bold mt-[40px] text-white w-[174px] h-[58px] p-[20px] dark:bg-white dark:border dark:border-white dark:text-mainBlue'>
						Consult Now
					</Link>
				</div>
				<div className='w-[50%]'>
					<img className='w-full' src={slika2} alt='' />
				</div>
			</div>
		</div>
	);
}

export default ServiceComponent;
