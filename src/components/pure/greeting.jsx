//Componente puros no tienen mucha lojica y complejidad:
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
	myAge = 29;

	constructor(props) {
		super(props);
		this.state = {
			age: this.myAge, ///this.myage  29
		};
	}

	render() {
		return (
			<div>
				<h1>¡Hola {this.props.name}!</h1>
				<h2>Tu edad es de: {this.state.age}</h2>
				{/* metodo onClick */}
				<div onClick={this.birthay}>
					<button>Cumplir Años</button>
				</div>
			</div>
		);
	}

	// {/* Generar estado es importante: para que se vea en la pantalla: */}
	birthay = () => {
		this.setState(prevState => ({
			age: prevState.age + 1,
		}));
	};
}

Greeting.propTypes = {
	name: PropTypes.string,
};

export default Greeting;
