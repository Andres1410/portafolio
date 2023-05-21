import React from 'react';

//img react:
import react from '../assets/img/react.png';

//img tailwind:
import tailwind from '../assets/img/tailwind.png';

//img js:
import js from '../assets/img/js.png';

//img css:
import css from '../assets/img/css.png';

//img python:
import python from '../assets/img/python.png';

//img vitejs:
import vitejs from '../assets/img/vitejs.png';

export default function componentSection() {
	return (
		<>
			<div class='grid grid-cols-3 gap-4 place-items-center'>
				<div>
					{/* Icono React: */}
					<a href={react}>
						<img src='/src/assets/img/react.png' alt='react' />
					</a>
				</div>
				<div>
					{/* Icono tailwind: */}
					<a href='https://tailwindcss.com/'>
						<img src={tailwind} alt='tailwindcss' className='w-16 h-16' />
					</a>
				</div>
				<div>
					{/* Icono Javascript: */}
					<a href='https://devdocs.io/javascript/global_objects/array/@@species'>
						<img src={js} />
					</a>
				</div>
				<div>
					{/* Icono css */}
					<a href='https://developer.mozilla.org/es/docs/Web/CSS'>
						<img src={css} />
					</a>
				</div>
				<div>
					{/* Icono Python */}
					<a href='https://www.python.org/'>
						<img src={python} />
					</a>
				</div>
				<div>
					{/* Icono Vite: */}
					<a href='https://vitejs.dev/'>
						<img src={vitejs} alt='vite' className='w-11' />
					</a>
				</div>
			</div>
		</>
	);
}
