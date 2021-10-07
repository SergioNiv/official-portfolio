import React from 'react';

const About = () => {
	return (
		<main className="about">
			<h2 className="about__title">SOBRE MÍ 💻</h2>

			<p className="about__text-content">
				Creo que cuando una persona desea con todas sus fuerzas crecer
				profesionalmente no es suficiente, realmente te tiene que apasionar lo
				que haces, lograr adquirir ese sentimiento no es fácil, pero si lo
				consigues solo se vendrán cosas buenas.
			</p>

			<p className="about__text-content">
				Desde pequeño siempre me gustó la técnología, las computadoras, los
				celulares, los videojuegos, fueron la motivación para elegir mi
				vocación. Cuando llegué al instituto inició mi búsqueda por lo que me
				apasionaba, pasando por muchas ramas de la informática encontré la{' '}
				<span className="strong">programación</span>.
			</p>

			<p className="about__text-content">
				Mi elección se dió por diversos factores, los principales fueron la
				creatividad, el diseño, y mi gusto por los dispositivos digitales. Así
				empecé a crecer profesionalmente, desarrollandome en lo que me apasiona.
			</p>

			<p className="about__text-content">
				Mi nombre es Sergio Daniel Nivin Huari y soy egresado de tecnologías de
				la información y comunicaciones en{' '}
				<span className="strong">Senati</span>, actualmente estudiante en{' '}
				<span className="strong">Platzi</span> siguiendo una ruta de aprendizaje
				constante con grandes habilidades entre ellas una que adquirí con el
				tiempo, ser <span className="strong">autodidacta</span>.
			</p>

			<div className="buttons__cv">
				<a className="show__cv" href="/sergionivin-cv.pdf" target="_blank">
					<span className="text">Ver CV</span>

					<i className="far fa-eye"></i>
				</a>
				<a className="download__cv" href="/sergionivin-cv.pdf" download>
					<span className="text">Descargar CV</span>

					<i className="fas fa-download"></i>
				</a>
			</div>

			<figure className="main__logo">
				<img src="/View-opti.png" alt="" className="img" />
			</figure>
		</main>
	);
};

export default About;
