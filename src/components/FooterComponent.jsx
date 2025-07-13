import React from 'react';
import { PiArrowCircleRightFill } from 'react-icons/pi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function FooterComponent() {
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email format!')
				.matches(/^(?!.*@[^,]*,)/, 'Email must not contain commas')
				.required('You must insert email correctly!'),
		}),
		onSubmit: (values) => {
			console.log(values);
			formik.resetForm();
		},
	});

	const showError = (name) =>
		formik.errors[name] &&
		formik.touched[name] &&
		formik.errors[name];
	return (
		<footer className='bg-white dark:bg-mainBlue text-gray-800 dark:text-white py-10 px-6'>
			<div className='container mx-auto mt-36 flex flex-col md:flex-row justify-between gap-10 md:gap-0'>
				<div className='md:flex-1'>
					<h2 className='text-xl font-bold mb-4'>Imoodev</h2>
					<div className='text-sm mb-2'>
						526 Melrose Street, New York
					</div>
					<div className='text-sm mb-2'>imoodev@gmail.com</div>
					<div className='text-sm'>+123 4567 8910</div>
				</div>

				<div className='md:flex-1'>
					<h3 className='text-md font-semibold mb-3'>Our Feature</h3>
					<ul className='space-y-2 text-sm text-gray-600 dark:text-gray-300'>
						<li className='hover:underline cursor-pointer'>
							Playing With Code
						</li>
						<li className='hover:underline cursor-pointer'>
							Promoting tools
						</li>
						<li className='hover:underline cursor-pointer'>
							Our Portfolio
						</li>
						<li className='hover:underline cursor-pointer'>
							Employee Benefits
						</li>
					</ul>
				</div>

				<div className='md:flex-1'>
					<h3 className='text-md font-semibold mb-3'>Our Service</h3>
					<ul className='space-y-2 text-sm text-gray-600 dark:text-gray-300'>
						<li className='hover:underline cursor-pointer'>
							Digital Service
						</li>
						<li className='hover:underline cursor-pointer'>
							Marketing Service
						</li>
					</ul>
				</div>

				<div className='md:flex-1'>
					<h3 className='text-md font-semibold mb-3'>
						Join our email
					</h3>
					<p className='text-sm text-gray-600 dark:text-gray-300 mb-3'>
						Enter your email address for updated news from us
					</p>
					<div className='flex flex-col sm:flex-row items-center gap-3'>
            <form
				onSubmit={formik.handleSubmit}
				className="flex flex-col sm:flex-row">
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Email address'
							value={formik.values.email}
							onChange={formik.handleChange}
							className='flex-1 w-full sm:w-auto max-w-md h-14 px-4 text-sm dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 dark:bg-transparent dark:border-gray-600 dark:text-mainBlue'
						/>
						<button
							type="submit"
							className='flex items-center justify-center dark:bg-white dark:text-mainBlue bg-mainBlue h-14 w-14 text-white p-2 rounded-md transition'>
							<PiArrowCircleRightFill size={25} />
						</button>
         </form>

					</div>
				</div>
			</div>

			<div className='border-t mt-10 pt-4 text-center text-xs text-gray-500 dark:text-gray-400'>
				<p className='mt-6'>
					Copyright © imoodev 2025 | All rights reserved
				</p>
			</div>
		</footer>
	);
}

export default FooterComponent;
