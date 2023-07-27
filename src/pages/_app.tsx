import "globals.css";
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
			<main className={font.className}>
				<DefaultSeo description={`TODO:`} />
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
