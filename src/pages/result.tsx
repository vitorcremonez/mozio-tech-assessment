import { useRouter } from "next/router";
import ResultScreen from "screens/ResultScreen";
import Path from "types/Path";

export default function ResultPage() {
	const router = useRouter();
	const passengers = Number(router.query.passengers);
	const date = router.query.date as string;
	const paths: Path[] = router.query.paths
		? JSON.parse(router.query.paths as string)
		: [];

	if (!paths || !passengers || !date) {
		return "Loading...";
	}

	return <ResultScreen passengers={passengers} date={date} paths={paths} />;
}
