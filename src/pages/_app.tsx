import "globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const font = Inter({
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={font.className}>
			<DefaultSeo description={`TODO:`} />
			<Component {...pageProps} />
		</main>
	);
}
