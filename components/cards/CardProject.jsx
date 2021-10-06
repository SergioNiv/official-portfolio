import React from 'react';

const CardProject = () => {
	return (
		<div className="card__project">
			<figure className="card__project-img">
				<img className="project__img" src="/technologies/project1.jpg" alt="" />
			</figure>

			<h3 className="card__project-name">E - COMMERCE MODA</h3>

			<p className="description__project">
				Proyecto personal de apoyo a un enprendimiento dónde se resolvieron las
				necesidades de incrementar visitas, ventas, posicionamiento de la marca
				y administración de ventas online.
			</p>

			<p className="cad__project-subtitle">Tecnologías e implementación</p>

			<ul className="container__project-list">
				<li className="project-link">
					Desarrollo de la interfaz con HTML5, Sass /SCSS y React Hooks con
					funcional components, incluye validación de formularios, paginación,
					protección de rutas, Query String.
				</li>

				<li className="project-link">
					Estilos basados en componenetes con Sass, incluí la parte responsive
					aplicando Mobile First como técnica de maquetación y la ayuda de Media
					Querys, Flexbox, Grid, LightHouse para buenos resultados en
					accesibilidad y performance.
				</li>

				<li className="project-link">
					Para el manejo del estado global y la comunicación de componentes
					utilicé el patrón Redux además de Redux-Thunk como middleware.
				</li>

				<li className="project-link">
					Como servicio serverless implementé Firebase / Firestore para la
					autenticación de usuarios utilizando FetchAPI, incluye persistencia de
					datos en LocalStorage.
				</li>

				<li className="project-link">
					Integración de pasarela de pagos con Paypal Developer y protección de
					datos con Dotenv para las variables de entorno.
				</li>

				<li className="project-link mb-8">
					Deploy de la aplicación en Netlify.
				</li>
			</ul>

			<div className="buttons__project">
				<a
					href="https://mayra-app.netlify.app/"
					target="_blank"
					className="show-project"
				>
					Ir al proyecto <i className="fas fa-external-link-alt"></i>
				</a>

				<a
					href="https://github.com/SergioNiv/store-app-development"
					target="_blank"
					className="show-respositorio"
				>
					Repositorio <i className="fab fa-github"></i>
				</a>
			</div>
		</div>
	);
};

export default CardProject;
