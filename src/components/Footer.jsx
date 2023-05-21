import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='absolute w-2/3 bg-[#ecfeff]'>
			{/*contenido: */}
			<div className='justify-center py-16'>
				<div className='py-8 md:flex md:flex-wrap md:-mx-4 md:justify-center md:text-center'>
					<div className='md:w-1/3 md:px-4'>
						<h3 className='mb-4 text-xl font-bold text-white'>
							Redes sociales
						</h3>
						<div className='flex justify-center'>
							<a
								href='https://web.facebook.com/esliveandres'
								className='mr-4 text-gray-300 hover:text-white'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='sr-only'>Facebook</span>
								<FaFacebook size={24} color='#1877F2' />
							</a>

							<a
								href='https://www.instagram.com/andresbusinessman/'
								className='text-gray-300 hover:text-white'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='sr-only'>Instagram</span>
								<FaInstagram size={24} color='#f97316' />
							</a>
							<a
								href='https://www.linkedin.com/in/camacho-rodriguez/'
								className='text-gray-300 hover:text-white'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='sr-only'>Linkedin</span>
								<FaLinkedin size={24} color='#1e3a8a' />
							</a>
							<a
								href='https://github.com/Andres1410'
								className='text-gray-300 hover:text-white'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='sr-only'>Linkedin</span>
								<FaGithub size={24} color='#0a0a0a' />
							</a>
						</div>
					</div>
					{/* Contenedor Politicas */}
					<div className='mt-4 md:w-1/3 md:px-4 md:mt-0 '>
						<h3 className='mb-4 text-xl font-bold'>Politicas</h3>
						<ul>
							<li>
								<a
									href='http://localhost:5173/terminos'
									className='block mb-2 text-gray-300 hover:text-white '
								>
									Términos y condiciones
								</a>
							</li>
							<li>
								<a
									href='http://localhost:5173/politica'
									className='block mb-2 text-gray-300 hover:text-white'
								>
									Política de privacidad
								</a>
							</li>
						</ul>
					</div>
					{/* Contenedor Contactanos */}
					<div className='md:w-1/3 md:px-4 md:mt-0 '>
						<h3 className='mb-4 text-xl font-bold'>Contáctanos</h3>
						<ul>
							<li>
								<a
									href='mailto:andrescamcho6@gmail.com'
									className='block mb-2 text-gray-300 hover:text-white'
								>
									andrescamcho6@gmail.com
								</a>
							</li>
							<li>
								<a
									href='tel:+573028126908'
									className='block mb-2 text-gray-300 hover:text-white'
								>
									👉🏻llamame ahora👈🏻
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/*Contenedor derechos reservados */}
				<div className='flex items-center justify-center text-center'>
					<p className='text-gray-500'>
						© 2023 Andrés Felipe. Todos los derechos reservados.
					</p>
				</div>
				{/*espacio */}
			</div>
		</footer>
	);
};

export default Footer;
