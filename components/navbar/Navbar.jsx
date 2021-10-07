import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Navbar = () => {
	const { pathname } = useRouter();

	const [collapseMenu, setCollapseMenu] = useState(false);

	const handleCollapseMenu = () => setCollapseMenu(!collapseMenu);

	return (
		<header>
			<div className="header__container">
				<div
					className={`content-opacity ${collapseMenu && 'opacity-show'}`}
					onClick={() => setCollapseMenu(false)}
				></div>

				<nav className={`nav__container  ${collapseMenu && 'collapse'}`}>
					<figure
						className={`bakcground__img ${
							collapseMenu && 'bakcground__active'
						}`}
					>
						<img src="/react-optimizado.jpg" alt="" className="b-img" />
					</figure>

					<div className="navbar">
						<figure className="logo">
							<Link href="/">
								<a onClick={() => setCollapseMenu(false)}>
									<img src="/View-opti.png" alt="" className="img" />
								</a>
							</Link>
						</figure>

						<ul className="menu__desktop">
							<li>
								<Link href="/">
									<a
										className={`menu__desktop-link ${
											pathname == '/' && 'menu__desktop-active'
										}`}
									>
										MI STACK
									</a>
								</Link>
							</li>
							<li>
								<Link href="/projects">
									<a
										className={`menu__desktop-link ${
											pathname == '/projects' && 'menu__desktop-active'
										}`}
									>
										PROYECTOS
									</a>
								</Link>
							</li>
							<li>
								<Link href="/about">
									<a
										className={`menu__desktop-link ${
											pathname == '/about' && 'menu__desktop-active'
										}`}
									>
										SOBRE MI
									</a>
								</Link>
							</li>
						</ul>
						<div className="menu" onClick={handleCollapseMenu}>
							<i className="fas fa-bars"></i>
							<span className="title">Menu</span>
						</div>
					</div>
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
				</nav>
			</div>
			<div className="content-null"></div>
		</header>
	);
};

export default Navbar;
