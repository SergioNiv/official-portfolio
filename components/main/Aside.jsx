import React from 'react';

const Aside = () => {
	return (
		<>
			<aside className="aside">
				<p className="aside__description">
					Desarrollador de software especialista en Frontend con experiencia en
					el ecosistema de <span className="strong"> React</span> y conocedor de
					metodologías ágiles <span className="strong">Scrum</span>,{' '}
					<span className="strong">Kanban</span> para la construcción de
					productos. Busco proyectos desafiantes ofreciendo mi experiencia y
					compromiso.
				</p>
				<div className="aside__contact">
					<p className="aside__subtitle">Encuentrame en</p>

					<div className="linkedin collaps">
						<div className="linkedin__title">
							Linked <i className="fab fa-linkedin"></i>
						</div>
						<figure className="linkedin__photo">
							<img src="/linkedin.jpg" alt="" className="photo" />
						</figure>
						<span className="linkedin-name">
							<a
								href="https://www.linkedin.com/in/sergio-nivin"
								target="_blank"
							>
								Sergio Daniel Nivin Huari
							</a>
						</span>
						<p className="linkedin-titular">
							Desarrollo Web | Frontend Developer
						</p>
						<span className="study">
							<a href="https://www.linkedin.com/school/senati/" target="_blank">
								SENATI
							</a>
						</span>
						<a
							href="https://www.linkedin.com/in/sergio-nivin"
							target="_blank"
							className="button-profile"
						>
							Ver Perfil
						</a>
					</div>

					<div className="link-container">
						<span className="aside-link collaps-link">
							<i className="fab fa-linkedin"></i>
							<a
								href="https://www.linkedin.com/in/sergio-nivin"
								target="_blank"
							>
								Linkedin
							</a>
						</span>
						<span className="aside-link">
							<i className="fab fa-whatsapp"></i>{' '}
							<a
								href="https://api.whatsapp.com/send?phone=51961441869&text=Hola!%20un%20gusto%20conocerte,%20"
								target="_blank"
							>
								WhatsApp
							</a>
						</span>

						<span className="aside-link">
							<i className="fab fa-github"></i>
							<a href="https://github.com/SergioNiv" target="_blank">
								GitHub
							</a>
						</span>

						<span className="aside-link mb-1">
							<i className="fas fa-download"></i>
							<a href="/sergionivin-cv.pdf" download>
								Descargar CV
							</a>
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};

export default Aside;
