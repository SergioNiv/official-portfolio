import Head from 'next/head';

import '../styles/globals.scss';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Sergio Nivin</title>
				<meta
					name="description"
					content="Sergio Daniel Nivin Huari | 
					Portafolio | Desarrollador de Software | Frontend Developer | Mobile Developer | Desarrollo Web "
				/>
				<link rel="icon" href="/1b.png" />
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
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
