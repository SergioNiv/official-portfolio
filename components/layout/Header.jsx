import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function Header() {
	const title = 'Sergio Nivin';
	const desc =
		'Sergio Daniel Nivin Huari | Portafolio | Desarrollador de Software | Front-End Developer | Mobile Developer | Desarrollo Web | JavaScript | TypeScript | React | Web | sergionivin.website';
	const ogImgRelativePath = '/2b.png';

	const siteURL = 'https://sergionivin.website';
	const ogImageURL = `${siteURL}${ogImgRelativePath}`;
	const pathName = useRouter().pathname;
	const pageURL = pathName === '/' ? siteURL : siteURL + pathName;
	const twitterHandle = '@SergioNivin';
	const siteName = 'sergionivin.website';

	return (
		<NextSeo
			title={title}
			description={desc}
			canonical={pageURL}
			openGraph={{
				type: 'website',
				locale: 'es_PE', //  Default is en_US
				url: pageURL,
				title,
				description: desc,
				images: [
					{
						url: ogImageURL,
						width: 630,
						height: 630,
						alt: 'SergioNivin.website - Mi portafolio',
					},
				],
				site_name: siteName,
			}}
			twitter={{
				handle: twitterHandle,
				site: twitterHandle,
				cardType: 'summary_large_image',
			}}
			additionalMetaTags={[
				{
					property: 'author',
					content: title,
				},
			]}
			additionalLinkTags={[
				{
					rel: 'icon',
					href: `${siteURL}/1b.png`,
				},
				// {
				//   rel: "manifest",
				//   href: "/site.manifest",
				// },
			]}
		/>
	);
}
