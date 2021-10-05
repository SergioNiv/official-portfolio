import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="footer">
			<figure className="footer__background">
				<img
					src="/react-optimizado.jpg"
					alt=""
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
					<a href="">
						<i className="fab fa-github"></i>
					</a>
				</span>
				<span className="socials__container">
					<a href="">
						<i className="fab fa-whatsapp-square"></i>
					</a>
				</span>
			</div>

			<p className="footer__reserved">
				@ 2021 Sergio Nivin - Todos los derechos reservados
			</p>
		</footer>
	);
};

export default Footer;
