import React from 'react';
import Footer from '../footer/Footer';
import Description from '../main/Description';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<Description />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
