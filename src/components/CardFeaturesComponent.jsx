import React from 'react'

function CardFeaturesComponent({card, index}) {
  return (
    <div
							key={index}
							className='border border-lightGray rounded-[10px] p-[20px] hover:dark:bg-white hover:dark:text-mainBlue dark:text-white text-mainBlue hover:bg-mainBlue hover:text-white transition-all duration-222 cursor-pointer'>
							<img
								src={card.imageUrl}
								alt=''
								style={{ backgroundColor: card.color }}
								className='p-[5px] rounded-full'
							/>
							<h3 className='text-[24px] mt-[30px]'>{card.title}</h3>
							<p className='mt-[20px]'>{card.descrioption}</p>
						</div>
  )
}

export default CardFeaturesComponent