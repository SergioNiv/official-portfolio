import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
	const [contactOn, setContactOn] = useState(false);

	return (
		<>
			<footer className="footer">
				<figure className="footer__background">
					<img
						src="/react-optimizado.jpg"
						alt="react"
						className="footer__background-img"
					/>
				</figure>

				<ul className="footer__list">
					<li className="link">
						<Link href="/">
							<a>MI STACK</a>
						</Link>
					</li>
					<li className="link">
						<Link href="/projects">
							<a>PROYECTOS</a>
						</Link>
					</li>
					<li className="link">
						<Link href="/about">
							<a>SOBRE MI</a>
						</Link>
					</li>
				</ul>

				<h3 className="footer__subtitle">Encuentrame en</h3>

				<div className="footer__socials">
					<span className="socials__container">
						<a href="https://www.linkedin.com/in/sergio-nivin" target="_blank">
							<i className="fab fa-linkedin"></i>
						</a>
					</span>
					<span className="socials__container">
						<a href="https://github.com/SergioNiv" target="_blank">
							<i className="fab fa-github"></i>
						</a>
					</span>
					<span className="socials__container">
						<a href="https://api.whatsapp.com/send?phone=51961441869&text=Hola!%20un%20gusto%20conocerte,%20">
							<i className="fab fa-whatsapp-square"></i>
						</a>
					</span>
				</div>

				<p className="footer__reserved">
					@ 2021 Sergio Nivin - Todos los derechos reservados
				</p>

				<div
					className={`btn-contact ${contactOn && 'collapsed-contact'}`}
					onClick={() => setContactOn(!contactOn)}
				>
					Contacto 💻
				</div>
			</footer>

			<div
				className={`contact ${contactOn && 'show-contact'}`}
				onClick={() => setContactOn(false)}
			>
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
			</div>
		</>
	);
};

export default Footer;
