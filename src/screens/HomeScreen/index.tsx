import axios from "axios";
import Card from "components/Card";
import { useRouter } from "next/router";
import RouteForm from "./RouteForm";

// TODO: isolate this
async function getPaths(cities: string[]) {
	const response = await axios.request({
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		method: "POST",
		url: "/api/distances",
		data: {
			cities,
		},
	});
	const distances = response.data.data;
	return distances;
}

const HomeScreen: React.FC = () => {
	const router = useRouter();

	return (
		<Card style={{ maxWidth: 750, margin: "auto" }}>
			<RouteForm
				onSubmit={async ({ route, passengers, date }) => {
					const paths = await getPaths(route);
					router.push({
						pathname: "/result",
						query: {
							paths: JSON.stringify(paths),
							passengers,
							date,
						},
					});
				}}
			/>
		</Card>
	);
};

export default HomeScreen;
