import React from 'react';
import felipe from '../assets/img/felipe.jpg';

export default function componentNabar() {
	return (
		<>
			<nav className='flex flex-wrap items-center justify-between p-6 bg-white '>
				<div className='flex items-center flex-shrink-0 mr-6 text-white'>
					{/* Aqui esta la imagen */}
					<img
						src={felipe}
						alt='felipe.jpg'
						className='mr-2 transition duration-300 transform rounded-full fill-current h-14 w-14 hover:scale-150'
						w-14
						h-14
						viewBox='0 0 54 54'
					/>
					<div className='mb-4 mr-4'>&nbsp;</div>
					<a href='http://localhost:5173/'>
						<span
							className=' font-semibold text-black text-xl tracking-tight 
					animate-[wiggle_5s_ease-in-out_infinite]'
						>
							Andrés Felipe
						</span>
					</a>
				</div>
				<div className='block lg:hidden'>
					<button className='flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white'>
						<svg
							className='w-3 h-3 fill-current'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
				<div className='flex-grow block w-full lg:flex lg:items-center lg:w-auto'>
					<div className='text-sm lg:flex-grow'>
						<a
							href='/portafolio'
							className='block mt-4 mr-4 text-blue-800 lg:inline-block lg:mt-0 hover:text-white'
						>
							Portafolio
						</a>
						<a
							href='/form'
							className='block mt-4 mr-4 text-blue-800 lg:inline-block lg:mt-0 hover:text-white'
						>
							Contactenos
						</a>
						<a
							href='#responsive-header'
							className='block mt-4 text-blue-800 lg:inline-block lg:mt-0 hover:text-white'
						>
							Blog
						</a>
					</div>
					<div>
						<a
							href='./cv.pdf'
							download
							className='inline-block px-4 py-2 mt-4 text-sm leading-none text-white transition duration-75 border border-white rounded animate-bounce hover:border-transparent hover:text-black hover:bg-white lg:mt-0'
						>
							Descargar CV
						</a>
					</div>
				</div>
			</nav>
		</>
	);
}
