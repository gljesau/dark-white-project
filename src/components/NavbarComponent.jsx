import React from 'react';

import { NavLink } from 'react-router-dom';

import { FaRegSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
//dodavanje slika
import Imoodev from '../assets/Imoodev.png';
import ImoodevBlue from '../assets/ImoodevBlue.png';
function NavbarComponent({ activeDark, setActiveDark }) {
	function toggleDarkMode() {
		setActiveDark(!activeDark);
	}

	return (
		<div className='container mx-auto flex justify-between items-center h-[100px] px-[20px]'>
			{activeDark ? (
				<img src={Imoodev} alt='1' />
			) : (
				<img src={ImoodevBlue} alt='2' />
			)}
			<div className='flex items-center gap-[20px]'>
				<ul className='dark:text-white text-mainBlue flex gap-[10px]'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/about'>About</NavLink>
					</li>
					<li>
						<NavLink to='/contact'>Contact</NavLink>
					</li>
					<li>
						<NavLink to='/register'>Register</NavLink>
					</li>
				</ul>

				{activeDark ? (
					<FaRegSun
						color='white'
						size={25}
						onClick={toggleDarkMode}
					/>
				) : (
					<FaMoon size={25} onClick={toggleDarkMode} />
				)}
			</div>
		</div>
	);
}

export default NavbarComponent;
