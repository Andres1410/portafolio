import React from 'react';

//Navbar:
import Navbar from '../components/Navbar';

//Formulario de contacto:
import Formulario from '../components/Formulario';

//Boton flotante watsapp:
import FloatingButton from '../components/FloatingButton';

export default function componentForm() {
	return (
		<>
			<div class='col-start-auto col-span-6'>
				{/* Component Navbar */}
				<Navbar />
			</div>
			<Formulario />

			<div>
				{/*Componente url Api watsapp: */}
				<FloatingButton />
			</div>
		</>
	);
}
