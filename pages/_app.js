import Head from 'next/head';

import '../styles/globals.scss';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />

			<Head>
				{/* 	<title>Sergio Nivin</title>
				<meta
					name="description"
					content="Sergio Daniel Nivin Huari | 
					Portafolio | Desarrollador de Software | Front-End Developer | Mobile Developer | Desarrollo Web | JavaScript | TypeScript | React | Web | sergionivin.website"
				/>
				<link rel="icon" href="/1b.png" /> */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
					integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
				<script
					src="https://platform.linkedin.com/badges/js/profile.js"
					async
					defer
					type="text/javascript"
				></script>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
