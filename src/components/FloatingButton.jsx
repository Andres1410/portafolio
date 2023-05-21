import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButton = () => {
	const handleClick = () => {
		window.open('https://wa.link/y3wbvv', '_blank');
	};

	return (
		<div
			className='fixed bottom-5 right-5 bg-green-600 rounded-full w-9 h-9 flex items-center  justify-center bg-[#ffffff] cursor-grab z-20 '
			onClick={handleClick}
		>
			<FaWhatsapp
				size={50}
				color='#16f929'
				className='  from-cyan-500 to-blue-500 rounded-bl-3xl '
			/>
		</div>
	);
};

export default FloatingButton;
