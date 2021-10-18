import React from 'react';
import Image from 'next/image';

const CardProject = ({
	id,
	title,
	description,
	listImplement,
	img,
	urlProject,
	urlRepo,
}) => {
	return (
		<div className="card__project">
			<a href={urlProject} target="_blank">
				<figure className="card__project-img">
					<Image
						className="project__img"
						src={img}
						alt={title}
						width={400}
						height={230}
					/>
				</figure>
			</a>

			<h3 className="card__project-name">{title}</h3>

			<p className="description__project">{description}</p>

			<p className="cad__project-subtitle">Tecnologías e implementación</p>

			<ul className="container__project-list">
				{listImplement.map((list) => (
					<li key={list.name} className="project-link">
						{list.item}
					</li>
				))}
			</ul>

			<div className="buttons__project">
				<a href={urlProject} target="_blank" className="show-project">
					Visitar sitio <i className="fas fa-external-link-alt"></i>
				</a>

				<a href={urlRepo} target="_blank" className="show-respositorio">
					Repositorio <i className="fab fa-github"></i>
				</a>
			</div>
		</div>
	);
};

export default CardProject;
