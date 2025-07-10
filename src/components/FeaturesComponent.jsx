import React from 'react';
import Edit from '../assets/Edit.png';
import Heart from '../assets/Heart.png';
import Image from '../assets/Image.png';
import Category from '../assets/Category.png';
import CardFeaturesComponent from './CardFeaturesComponent';
function FeaturesComponent() {
	let allCards = [
		{
			imageUrl: Edit,
			title: 'Web Development',
			descrioption:
				'Easy to modify from the provided template settings page without the need for complicated coding skills.',
			color: '#0D1337',
		},
		{
			imageUrl: Heart,
			title: 'UI Design',
			descrioption:
				'Equipped with basic SEO techniques such as H1 H2 H3 and breadcrumbs so that the website is liked by search engines like Google, Bing etc.',
			color: '#00B4D8',
		},
		{
			imageUrl: Image,
			title: 'Graphic Design',
			descrioption:
				'Elegant and professional design, your website will have more value & attractive in the eyes of your visitors or customers.',
			color: '#7400B8',
		},
		{
			imageUrl: Category,
			title: 'Invitations and gifts',
			descrioption:
				'Easy to use even for new people and comes with documentation to make it easier',
			color: '#FF4D6D',
		},
	];

	return (
		<div className='container mx-auto mt-[50px] px-[20px] lg:px-[0px]'>
			<div className='flex flex-col lg:flex-row'>
				<div className='w-[90%] lg:w-[50%]'>
					<h3 className='text-[#FF6F29] text-[24px]'>
						What Does Imoodev Do?
					</h3>
					<h2 className='dark:text-white text-mainBlue text-[42px] font-semibold'>
						Analyzing Target Customers with the Right!
					</h2>
				</div>
				<p className='w-[50%] dark:text-white text-mainBlue'>
					Do not miss this opportunity. With our experience, Whello
					will find something unique in your brand. Analyze and try to
					follow what your audience really likes and is looking for,
					so that your customers will be more loyal to you.
				</p>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 mt-[50px] gap-[20px] pb-[50px]'>
				{allCards.map((card, index) => {
					return (
						<CardFeaturesComponent card={card} index={index}/>
					);
				})}
			</div>
		</div>
	);
}

export default FeaturesComponent;
