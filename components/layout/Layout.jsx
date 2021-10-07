import React from 'react';
import Footer from '../footer/Footer';
import Aside from '../main/Aside';
import Description from '../main/Description';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="main">
				<Aside />

				<section className="section__content">
					<Description />
					{children}
				</section>
			</main>
			<Footer />

			<style jsx>{`
				.main {
					width: 100%;
					max-width: 110rem;
					margin: 0 auto;
					display: flex;
					justify-content: center
				}
				.section__content {
					width: 100%
					margin: 0 auto;
				}

				@media (min-width: 600px) {
					.section__content {
						width: 80%;
					}
				}
			`}</style>
		</>
	);
};

export default Layout;
