//Tipo de componente funcional:

//Importar Hooks:
import React, { useState } from 'react';

//Prop types:
import PropTypes from 'prop-types';

//desde componente props funcional:
const GreetingF = props => {
	// Breve introducciòn a useState una funcion que nos permite crear u  stado Hook useState:
	//const [variable, metodo para actualizarlo] = useState(valor inicial);
	const [age, setage] = useState(29);

	//age es el nombre de la variable

	//Metodo:
	const birthay = () => {
		// actualizar el State
		//metodo igual a valor:
		setage(age + 1);
	};

	return (
		<div>
			<h1>¡Hola {props.name} desde componente funcional!</h1>
			<h2>Tu edad es de: {age}</h2>
			<div onClick={birthay}>
				<button>Cumplir Años</button>
			</div>
		</div>
	);
};

//pasar los props:
GreetingF.propTypes = {
	name: PropTypes.string,
};

export default GreetingF;
