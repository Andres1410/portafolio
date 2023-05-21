import React from 'react';

function Spinner() {
	return (
		<div className='max-w-md mx-auto border-indigo-500 rounded-lg'>
			<form
				action='https://formsubmit.co/andrescamcho6@gmail.com'
				method='POST'
				className='px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md'
			>
				<div className='mb-4'>
					<label className='block mb-2 text-sm font-bold' htmlFor='name'>
						Nombre
					</label>

					<input
						type='text'
						name='name'
						placeholder='Ingrese su Nombre'
						required
						className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
					/>
					<br />
					<br />
					<div className='mb-4'>
						<label
							className='block mb-2 text-sm font-bold text-gray-700'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
							name='email'
							type='email'
							placeholder='Ingrese su email'
							required
						/>
					</div>
					<br />

					<div className='flex items-center justify-between'>
						<button
							className='className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"'
							type='submit'
							required
						>
							enviar
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Spinner;
