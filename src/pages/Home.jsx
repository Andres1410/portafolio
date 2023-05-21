//Estado:
import React, { useState, useEffect } from 'react';

//preloader recarga Spiner:
import Spinner from '../components/Spinner';

//Navbar:
import Navbar from '../components/Navbar';

//video componente:
import { VideoPlayer } from '../components/VideoPlayer';

//archivo .video
import code from '../assets/interaction/code.mp4';

//Boton flotante watsapp:
import FloatingButton from '../components/FloatingButton';

//page pagina:
import Section from '../components/Section';

//footer:
import Footer from '../components/Footer';

function Home() {
	// movimiento spiner loader:
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000); // simulating a 3 second loading time
	}, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className='Home'>{/* Your app content goes here */}</div>
			)}

			<div class='grid grid-cols-6 gap-4'>
				<div class='col-start-auto col-span-6'>
					{/* Component Navbar */}
					<Navbar />
				</div>
				<div class='col-start-auto col-span-6'>&nbsp;</div>
				<br />
				<div class='col-start-2 col-span-4 min-[320px]:text-center max-[600px]:bg-sky-300'>
					{/* component VideoPlayer */}
					<VideoPlayer src={code} />

					<div>
						<p className='no-underline'>&nbsp;</p>
					</div>
				</div>

				<br />

				<div class='col-start-1 col-end-7'>
					<p class='font-sans text-2xl font-semibold hover:text-sky-400'>
						Página web hecha con estas Tecnologías:
					</p>
				</div>

				<br />

				<div class='col-start-2 col-span-4 text-center mb-16'>
					{/* Div section iconos tecnologias: */}
					<Section />
					<br />
					<div>
						<a href='http://localhost:5173/habilidades'>
							<h5>👉🏻 Habilidades ingrese Aqui 🌐</h5>
						</a>
					</div>
				</div>

				<br />

				<div>
					{/*Componente url Api watsapp: */}
					<FloatingButton />
				</div>

				<div className=''>
					{/* Componente Footer pie de pagina: */}
					<Footer />
				</div>
			</div>
		</>
	);
}

export default Home;
