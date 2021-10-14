import React from 'react';
import CardProject from '../../components/cards/CardProject';

import data from '../../helpers/dataProject.json';

const Projects = () => {
	return (
		<section className="animate__animated animate__fadeIn animate__faster">
			<h2 className="project__title">PROYECTOS 💻</h2>

			<div className="project__container">
				{data.map((data) => (
					<CardProject key={data.id} {...data} />
				))}
			</div>
		</section>
	);
};

export default Projects;
