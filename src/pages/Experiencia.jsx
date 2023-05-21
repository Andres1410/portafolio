import React from 'react';

import { FaGithub } from 'react-icons/fa';

//Navbar:
import Navbar from '../components/Navbar';

//logo fortunators
import fortunators from '../assets/img/fortunators.png';

//logo massamia:
import massamia from '../assets/img/massamia.jpg';

export default function componentPortafolio() {
	return (
		<>
			<div class='col-start-auto col-span-6'>
				{/* Component Navbar */}
				<Navbar />
			</div>

			{/*Fortunators div experience*/}

			<div class='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
				<div class='md:flex'>
					<div class='md:shrink-0'>
						<img
							class='rounded-full h-48 w-full object-cover md:h-full md:w-48'
							src={fortunators}
							alt='Modern building architecture'
						/>
					</div>

					<div class='p-8'>
						<div class='uppercase tracking-wide text-sm text-indigo-500 font-semibold'></div>
						<a
							href='#'
							class='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
						>
							Fortunators
						</a>
						<p class='mt-2 text-slate-500'>
							Somos una app de juegos de entretenimiento donde combinamos la
							recreación con la oportunidad de ganar.
						</p>
						<a
							href='https://github.com/Andres1410/fortunators/tree/flutterflow'
							className='text-gray-300 hover:text-white'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='sr-only'>Linkedin</span>
							<FaGithub size={24} color='#0a0a0a' />
						</a>
					</div>
				</div>
			</div>

			<br />

			{/*Masamia div experience*/}

			<div class='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
				<div class='md:flex'>
					<div class='md:shrink-0'>
						<img
							class='rounded-full h-48 w-full object-cover md:h-full md:w-48'
							src={massamia}
							alt='Modern building architecture'
						/>
					</div>

					<div class='p-8'>
						<div class='uppercase tracking-wide text-sm text-indigo-500 font-semibold'></div>
						<a
							href='#'
							class='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
						>
							Masamia
						</a>
						<p class='mt-2 text-slate-500'>
							Armamos y freímos al momento 🥟 Puedes pedir tus empanada fritas o
							para freir Contamos con reparto a domicilio 🛵.
						</p>
						<a
							href='https://github.com/Hunteando/ecommerce-s1-g2'
							className='text-gray-300 hover:text-white'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='sr-only'>Linkedin</span>
							<FaGithub size={24} color='#0a0a0a' />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
