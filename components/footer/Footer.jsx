import React from 'react';

const Footer = () => {
	return (
		<footer>
			<hr />
			<ul className="footer__list">
				<li className="link">SOBRE MI</li>
				<li className="link">PROYECTOS</li>
				<li className="link">MI STACK</li>

				<div className="footer__socials">
					<span className="socials__container">
						<i className="fab fa-linkedin"></i>
					</span>
					<span className="socials__container">
						<i className="fab fa-github"></i>
					</span>
				</div>
			</ul>
		</footer>
	);
};

export default Footer;
