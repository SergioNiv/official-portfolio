import React from 'react';

const Aside = () => {
	return (
		<aside className="aside">
			<p className="aside__description">
				Soy desarrollador de software especializado en Frontend con experiencia
				en el ecosistema de <span className="strong"> React</span> y conocedor
				de metodologías ágiles <span className="strong">Scrum</span>, Kanban
				para la construcción de productos. Busco trabajar en proyectos
				desafiantes ofreciendo mi experiencia y compromiso.
			</p>
			<div className="aside__contact">
				<p className="aside__subtitle">Encuentrame en</p>
				<a
					href="https://www.linkedin.com/in/sergio-nivin"
					className="aside-link"
					target="_blank"
				>
					<i className="fab fa-linkedin"></i> Linkedin
				</a>
				<a
					href="https://github.com/SergioNiv"
					className="aside-link"
					target="_blank"
				>
					<i className="fab fa-github"></i> GitHub
				</a>
				<a
					href="https://api.whatsapp.com/send?phone=51961441869&text=Hola!%20un%20gusto%20conocerte,%20"
					className="aside-link"
				>
					<i className="fab fa-whatsapp"></i> WhatsApp
				</a>
				<a href="/sergionivin-cv.pdf" download className="aside-link">
					<i className="fas fa-download"></i> Descargar CV
				</a>
			</div>
		</aside>
	);
};

export default Aside;
