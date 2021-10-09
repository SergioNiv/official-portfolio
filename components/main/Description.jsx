import { useRouter } from 'next/dist/client/router';
import React from 'react';

const Description = () => {
	const { pathname } = useRouter();

	return (
		<div className="main__description animate__animated animate__fadeIn animate__faster">
			<figure className={`container__img ${pathname === '/' && 'none-home'}`}>
				<img src="/img.jpg" alt="Sergio-Nivin-Perfil" className="main__img" />
			</figure>

			<div className="main__introduction">
				<h1 className="main__title">Sergio Nivin 💻</h1>

				<p className="main__text">
					<span className="subtitle">Desarrollador frontend</span>
					<span className="weight">
						Apasionado por las tecnologías de la información
					</span>{' '}
					con muchas ganas de aprender y compartir mis conocimientos contigo
				</p>
			</div>
		</div>
	);
};

export default Description;
