import React from 'react';

function Spinner() {
	return (
		<div className='flex opacity-100 justify-center items-center h-screen z-40 hover:opacity-100'>
			<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-4  border-blue-500'></div>
		</div>
	);
}

export default Spinner;
