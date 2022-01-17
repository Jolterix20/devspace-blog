import Head from 'next/head'

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="keywords" content={keywords} />
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico"></link>
			</Head>

			<main className="container mx-auto my-7">{children}</main>
		</div>
	)
}

Layout.defaultProps = {
	title: 'DevSpace Blogs',
	keywords: 'development, coding, developers, programming, blog',
	description: 'The best articles regarding development and coding',
}
