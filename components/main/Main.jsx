import React from 'react';
import Technologies from '../technologies/Technologies';

const Main = () => {
	return (
		<>
			<div className="main__presentation">
				<figure className="container__img">
					<img src="/img.jpg" alt="Sergio-Nivin-Perfil" className="main__img" />
				</figure>

				<div className="main__introduction">
					<h1 className="main__title">Sergio Nivin 💻</h1>
					<p className="main__text">
						<span className="subtitle">Desarrollador frontend.</span>
						<span className="weight">Apasionado por la tecnología</span> con
						muchas ganas de aprender y compartir mis conocimientos contigo
					</p>
				</div>
			</div>

			<Technologies />
		</>
	);
};

export default Main;
