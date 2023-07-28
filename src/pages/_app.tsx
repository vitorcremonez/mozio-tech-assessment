import GlobalStyles from "GlobalStyles";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import ThemeProvider from "providers/ThemeProvider";

const font = Inter({
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<main className={font.className}>
				<DefaultSeo
					description={
						"This project is an implementation of the Mozio Assessment Test by Vitor Cremonez. It demonstrates proficiency in a variety of web development skills and techniques."
					}
					additionalMetaTags={[
						{
							name: `viewport`,
							content: `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no`,
						},
					]}
				/>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
