import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Navbar = () => {
	const { pathname } = useRouter();

	const [collapseMenu, setCollapseMenu] = useState(false);

	const handleCollapseMenu = () => setCollapseMenu(!collapseMenu);

	return (
		<>
			<div className="header__container">
				<div
					className={`content-opacity ${collapseMenu && 'opacity-show'}`}
					onClick={() => setCollapseMenu(false)}
				></div>

				<header className={`nav__container  ${collapseMenu && 'collapse'}`}>
					<figure
						className={`bakcground__img ${
							collapseMenu && 'bakcground__active'
						}`}
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
							<Link href="/">
								<a
									onClick={handleCollapseMenu}
									className={pathname === '/' ? 'link__color-select' : ''}
								>
									MI STACK
								</a>
							</Link>
						</li>

						<li className={`link ${collapseMenu && 'link-show2'}`}>
							<Link href="/projects">
								<a
									onClick={handleCollapseMenu}
									className={
										pathname === '/projects' ? 'link__color-select' : ''
									}
								>
									PROYECTOS
								</a>
							</Link>
						</li>

						<li className={`link ${collapseMenu && 'link-show3'}`}>
							<Link href="/about">
								<a
									onClick={handleCollapseMenu}
									className={pathname === '/about' ? 'link__color-select' : ''}
								>
									SOBRE MI
								</a>
							</Link>
						</li>

						<div className="icon__socials">
							<span className="socials__container">
								<a href="">
									<i className="fab fa-linkedin"></i>
								</a>
							</span>
							<span className="socials__container">
								<a href="">
									<i className="fab fa-github"></i>
								</a>
							</span>
						</div>
					</ul>
				</header>
			</div>
			<div className="content-null"></div>
		</>
	);
};

export default Navbar;
