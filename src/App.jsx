import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Experiencia from './pages/Experiencia';

import Form from './pages/Form';

import Habilidades from './pages/Habilidades';

import Politica from './pages/Politica';

import Terminos from './pages/Terminos';

//Pagina no encontrada:
// import Notfound from './pages/Notfound'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					{/* <Route path="*" element={<Notfound/>}/> */}

					{/* Pagina Principal */}
					<Route path='/' element={<Home />} />

					{/* Portafolio */}
					<Route path='/experiencia' element={<Experiencia />} />

					{/* Pagina formulario */}
					<Route path='/form' element={<Form />} />

					{/* Pagina de Habilidades */}
					<Route path='/habilidades' element={<Habilidades />} />

					{/* Pagina de Politica */}
					<Route path='/politica' element={<Politica />} />

					{/* Pagina de Terminos */}
					<Route path='/terminos' element={<Terminos />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
