import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


function RegisterPage() {

    const VALID_TYPE = ['image/jpg', 'image/png', 'image/jpeg'];
    let KB = 1024;
    let MB = KB * 1024;


	const [showPassword, setShowPassword] = useState(false);

	function handlePassword() {
		setShowPassword(!showPassword);
	}

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			gender: '',
			birthDate: '',
			image: '',
		},

		validationSchema: Yup.object({
			firstName: Yup.string().required('You must insert first name!'),
			lastName: Yup.string().required('You must insert last name!'),
			email: Yup.string()
				.email()
				.matches(/^(?!.*@[^,]*,)/)
				.required('You must insert email correctly!'),
			password: Yup.string()
				.required('Please Enter your password')
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
					'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
				),

            gender: Yup.string().required('Pick gender'),
            birthDate: Yup.string().required('You must pick a date'),
            image: Yup.mixed().required('You must insert image')
                .test('filesize', 'Wrong size max 2MB', (value) =>
                    value.size < MB * 2)
                .test('filetype', 'Nepozeljan format slike', value => value && VALID_TYPE.includes(value.type))
                
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
		<div className=''>
			<h2 className='mt-[15px] text-[60px] dark:text-white  extrabold text-center'>Register Form</h2>

			<form
				onSubmit={formik.handleSubmit}
				className='flex flex-col w-[500px] border border-lightGray p-[15px] rounded-3xl mx-auto mt-[60px] p-[30px]'>
				<label
					htmlFor='firstName'
					className='text-[16px] text-gray-500 mt-[10px]'>
					First Name{' '}
					<span className='ml-5 text-[12px] text-red-600'>
						{showError('firstName')}
					</span>
				</label>
				<input
					type='text'
					placeholder='Insert First Name'
					id='firstName'
					name='firstName'
					value={formik.values.firstName}
					onChange={formik.handleChange}
					className='border border-lightGray rounded-lg px-[10px] py-[5px]'
				/>

				<label
					htmlFor='lastName'
					className='text-[16px] text-gray-500 mt-[10px]'>
					Insert Last Name
					<span className='ml-5 text-[12px] text-red-600'>
						{showError('lastName')}
					</span>
				</label>
				<input
					type='text'
					placeholder='Insert Last Name'
					id='lastName'
					name='lastName'
					value={formik.values.lastName}
					onChange={formik.handleChange}
					className='border border-lightGray rounded-lg px-[10px] py-[5px]'
				/>

				<label
					htmlFor='email'
					className='text-[16px] text-gray-500 mt-[10px]'>
					Email
					<span className='ml-5 text-[12px] text-red-600'>
						{showError('email')}
					</span>
				</label>
				<input
					type='email'
					placeholder='Insert Email'
					id='email'
					name='email'
					value={formik.values.email}
					onChange={formik.handleChange}
					className='border border-lightGray rounded-lg px-[10px] py-[5px]'
				/>

				<label
					htmlFor='password'
					className='text-[16px] text-gray-500 mt-[10px]'>
					Password
					<span className='ml-5 text-[12px] text-red-600'>
						{showError('password')}
					</span>
				</label>

				<div className='relative'>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Insert Password'
						id='password'
						name='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						className='w-full border border-lightGray rounded-lg px-[10px] py-[5px] pr-[60px]'
					/>
					<button
						type='button'
						onClick={handlePassword}
						className='absolute right-3 top-1/4  text-black'>
						{showPassword ? <FaEyeSlash />
                                         : <FaEye />
}
					</button>
				</div>

				

				<label
					htmlFor='birthDate'
					className='text-[16px] text-gray-500 mt-[10px]'>
					Birthdate
					<span className='ml-5 text-[12px] text-red-600'>
						{showError('birthDate')}
					</span>
				</label>
				<input
					type='date'
					id='birthDate'
					name='birthDate'
					value={formik.values.birthDate}
					onChange={formik.handleChange}
					className='border border-lightGray rounded-lg px-[10px] py-[5px]'
				/>
                <label
					htmlFor='gender'
					className='text-[16px] text-gray-500 mt-[10px]'>
					Gender
					<span className='ml-5 text-[12px] text-red-600'>
						{showError('gender')}
					</span>
				</label>
				<select
					id='gender'
					name='gender'
					value={formik.values.gender}
					onChange={formik.handleChange}
					className='border border-lightGray rounded-lg px-[10px] py-[5px]'>
					<option value='' defaultChecked disabled>
						Select Gender
					</option>
					<option value='male'>Male</option>
					<option value='female'>Female</option>
				</select>

				<label
					htmlFor='image'
					className='text-[16px] text-gray-500 mt-[10px]'>
					Image
					<span className='ml-5 text-[12px] text-red-600'>
						{showError('image')}
					</span>
				</label>
				<input
					type='file'
					id='image'
					name='image'
					onChange={(e) => formik.setFieldValue('image', e.currentTarget.files[0])}
					className='border border-lightGray rounded-lg px-[10px] py-[5px] bg-white'
				/>

				<button
					type='submit'
					className='px-[10px]py-[5px] rounded-lg mt-[30px] bg-orange-500'>
					Register Me
				</button>
			</form>
            <div className='w-full h-[50px]'>
              
            </div>
		</div>
	);
}

export default RegisterPage;
