import React, { useState } from 'react';

const Navbar = () => {
	const [collapseMenu, setCollapseMenu] = useState(false);

	return (
		<div className={`nav__container  ${collapseMenu && 'collapse'}`}>
			<figure className="bakcground__img">
				<img src="/react-optimizado.jpg" alt="" className="b-img" />
			</figure>
			<nav className="navbar">
				<figure className="logo">
					<img src="/favicon.ico" alt="" className="img" />
				</figure>
				<div className="menu" onClick={() => setCollapseMenu(!collapseMenu)}>
					<i className="fas fa-bars"></i>
					<span className="title">Menu</span>
				</div>
			</nav>
			<ul className={`sub__menu ${collapseMenu && 'active-opacity'}`}>
				<li className={`link ${collapseMenu && 'link-show'}`}>SOBRE MI</li>
				<li className={`link ${collapseMenu && 'link-show2'}`}>PROYECTOS</li>
				<li className={`link ${collapseMenu && 'link-show3'}`}>CONTACTO</li>

				<div className="icon__socials">
					<span className="socials__container">
						<i className="fab fa-linkedin"></i>
					</span>
					<span className="socials__container">
						<i className="fab fa-github"></i>
					</span>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
