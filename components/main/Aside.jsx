import React from 'react';

const Aside = () => {
	return (
		<aside className="aside">
			<p className="aside__description">
				Soy desarrollador de software especializado en Frontend con experiencia
				en el ecosistema de React y conocedor de metodologías ágiles SCRUM,
				KANBAN para la construcción de productos. Busco trabajar en proyectos
				desafiantes ofreciendo mi experiencia y compromiso.
			</p>
			<div className="aside__contact">
				<p className="aside__subtitle">Encuentrame en</p>
				<a href="/" className="aside-link">
					<i className="fab fa-linkedin"></i> Linkedin
				</a>
				<a href="/" className="aside-link">
					<i className="fab fa-github"></i> GitHub
				</a>
				<a href="/" className="aside-link">
					<i className="fab fa-whatsapp"></i> WhatsApp
				</a>
			</div>
		</aside>
	);
};

export default Aside;
