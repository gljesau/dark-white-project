import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function EmailComponent() {
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
		formik.errors[name] && formik.touched[name] && formik.errors[name];

	return (
		<div className="mx-auto container text-center justify-center mt-[100px] sm:mt-[140px] md:mt-[168px] dark:bg-white bg-orange-200 border rounded-[30px] dark:border-none w-full h-auto md:h-[366px] px-4">
			<h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-mainBlue pt-[40px] sm:pt-[48px] md:pt-[56px]">
				Subs Our Newsletter for Daily Update
			</h2>
      
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col sm:flex-row mx-auto w-full sm:w-[500px] md:w-[590px] items-center h-auto sm:h-[82px] mt-[40px] sm:mt-[60px] md:mt-[80px] mb-[40px] sm:mb-[48px] md:mb-[56px] bg-mainBlue rounded-[10px] gap-3 px-4 py-4"
			>
        
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Your email address here"
					value={formik.values.email}
					onChange={formik.handleChange}
					className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none bg-mainBlue dark:text-white text-white placeholder-white rounded-[8px]"
				/>
				<button
					type="submit"
					className="bg-white w-full sm:w-[183px] h-[50px] sm:h-[63px] text-mainBlue font-bold rounded-[8px]"
				>
					Subscribe
				</button>
			</form>
      
		</div>
	);
}

export default EmailComponent;
