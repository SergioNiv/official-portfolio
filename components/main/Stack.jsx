import React from 'react';
import Description from './Description';

const Stack = () => {
	return (
		<>
			<Description />
			<section className="container__technologies animate__animated animate__fadeIn animate__faster">
				<h2 className="main__subtitle">Stack de Técnologías</h2>
				<section className="grid__technologies">
					<figure className="grid__item">
						<i className="fab fa-html5"></i>
						<figcaption className="img-alt">Html</figcaption>
					</figure>
					<figure className="grid__item">
						<i className="fab fa-css3-alt"></i>
						<figcaption className="img-alt">Css</figcaption>
					</figure>
					<figure className="grid__item">
						<i className="fab fa-bootstrap"></i>
						<figcaption className="img-alt">Boostrap</figcaption>
					</figure>
					<figure className="grid__item">
						<i className="fab fa-sass"></i>
						<figcaption className="img-alt">Sass / scss</figcaption>
					</figure>
					<figure className="grid__item">
						<i className="fab fa-js"></i>
						<figcaption className="img-alt">Javascript</figcaption>
					</figure>
					<figure className="grid__item">
						<i className="fab fa-react"></i>
						<figcaption className="img-alt">React</figcaption>
					</figure>
					<figure className="grid__item">
						<img
							className="item-img"
							src="/technologies/patron.png"
							alt="Redux"
						/>
						<figcaption className="img-alt">Redux</figcaption>
					</figure>
					<figure className="grid__item">
						<img
							className="item-img"
							src="/technologies/typescript.png"
							alt="Typescript"
						/>
						<figcaption className="img-alt">Typescript</figcaption>
					</figure>
					<figure className="grid__item">
						<i className="fab fa-neos"></i>
						<figcaption className="img-alt">NextJs</figcaption>
					</figure>
				</section>
				<p className="technologies__text">
					Cuento con experiencia de integración con aplicaciones backend
					incluyendo el consumo de API REST y web services, además de manejar
					conceptos de principios SOLID, clean code, y patrones de diseño.
				</p>

				<h2 className="main__subtitle subtitle-sub">Testing Library</h2>

				<section className="testing">
					<figure className="jest">
						<img
							src="/technologies/jest.png"
							className="jest__img"
							alt="jest"
						/>
						<figcaption className="jest__title">Jest</figcaption>
					</figure>
					<figure className="enzyme">
						<img
							src="/technologies/enzyme.png"
							alt="enzyme"
							className="enzyme__img"
						/>
						<figcaption className="enzyme__title">Enzyme</figcaption>
					</figure>
				</section>

				<h2 className="main__subtitle subtitle-sub">Herramientas</h2>

				<section className="tools">
					<figure className="tools__item">
						<i className="fab fa-git-alt"></i>
						<figcaption className="tools-alt">Git | GitHub / GitLab</figcaption>
					</figure>
					<figure className="tools__item">
						<i className="fab fa-jira"></i>
						<figcaption className="tools-alt">Jira | Scrum / Kanban</figcaption>
					</figure>
					<figure className="tools__item">
						<div className="item-img">P</div>
						<figcaption className="tools-alt">Postman</figcaption>
					</figure>
					<figure className="tools__item">
						<i className="fab fa-linux"></i>
						<figcaption className="tools-alt">WSL2</figcaption>
					</figure>
				</section>

				<p className="technologies__text">
					Manejo conceptos solidos en metodologías ágiles ( Scrum, Kanban ), con
					flexibilidad de adaptación a nuevos equipos de desarrollo.
				</p>

				<h2 className="main__subtitle subtitle-sub">Infraestructura</h2>

				<section className="tools">
					<figure className="tools__item">
						<i className="fab fa-aws"></i>
						<figcaption className="tools-alt">Amazon Web Services</figcaption>
					</figure>
					<figure className="tools__item">
						<i className="fab fa-atlassian"></i>
						<figcaption className="tools-alt">Microsoft Azure</figcaption>
					</figure>
					<figure className="tools__item pb-5">
						<i className="fas fa-fire-alt"></i>
						<figcaption className="tools-alt">Firebase / Firestore</figcaption>
					</figure>
				</section>
			</section>
		</>
	);
};

export default Stack;
