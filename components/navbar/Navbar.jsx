import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
	const [collapseMenu, setCollapseMenu] = useState(false);

	const handleCollapseMenu = () => setCollapseMenu(!collapseMenu);

	return (
		<header className={`nav__container  ${collapseMenu && 'collapse'}`}>
			<figure
				className={`bakcground__img ${collapseMenu && 'bakcground__active'}`}
			>
				<img src="/react-optimizado.jpg" alt="" className="b-img" />
			</figure>

			<nav className="navbar">
				<figure className="logo">
					<Link href="/">
						<a onClick={() => setCollapseMenu(false)}>
							<img src="/View-opti.png" alt="" className="img" />
						</a>
					</Link>
				</figure>
				<div className="menu" onClick={handleCollapseMenu}>
					<i className="fas fa-bars"></i>
					<span className="title">Menu</span>
				</div>
			</nav>
			<ul className={`sub__menu ${collapseMenu && 'active-opacity'}`}>
				<li className={`link ${collapseMenu && 'link-show'}`}>
					<Link href="/about">
						<a onClick={handleCollapseMenu}>SOBRE MI</a>
					</Link>
				</li>
				<li className={`link ${collapseMenu && 'link-show2'}`}>PROYECTOS</li>
				<li className={`link ${collapseMenu && 'link-show3'}`}>MI STACK</li>

				<div className="icon__socials">
					<span className="socials__container">
						<i className="fab fa-linkedin"></i>
					</span>
					<span className="socials__container">
						<i className="fab fa-github"></i>
					</span>
				</div>
			</ul>
		</header>
	);
};

export default Navbar;
