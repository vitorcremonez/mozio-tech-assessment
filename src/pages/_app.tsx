import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo description={`TODO:`} />
			<Component {...pageProps} />
		</>
	);
}
