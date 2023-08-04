import { Footer, GradientBlurBackground } from "components";
import SearchResultScreen from "screens/SearchResultScreen";

export default function HomePage() {
	return (
		<>
			<GradientBlurBackground />
			<SearchResultScreen />
			<Footer />
		</>
	);
}
