import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Image from 'next/image';

const Description = () => {
	const { pathname } = useRouter();

	return (
		<div className="main__description animate__animated animate__fadeIn animate__faster">
			<figure className={`container__img ${pathname === '/' && 'none-home'}`}>
				<Image
					src="/about.jpg"
					alt="Sergio Nivin Huari"
					className="main__img animate__animated animate__fadeIn animate__faster"
					width={312}
					height={416}
				/>
			</figure>

			<div className="main__introduction">
				<h1 className="main__title">Sergio Nivin 💻</h1>

				<p className="main__text">
					<span className="subtitle">Desarrollador frontend</span>
					<span className="weight">Apasionado por la programación 💚</span> con
					muchas ganas de aprender y compartir mis conocimientos contigo
				</p>
			</div>
		</div>
	);
};

export default Description;
