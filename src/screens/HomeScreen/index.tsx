import axios from "axios";
import Card from "components/Card";
import { useState } from "react";
import Path from "types/Path";
import RouteForm from "./RouteForm";
import TripEtyrenarium from "./TripEtyrenarium";

// TODO: isolate this
async function getPaths(cities: string[]) {
	const response = await axios.request({
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		method: "POST",
		url: "/api/distance-measurer",
		data: {
			cities,
		},
	});
	const distances = response.data.data;
	return distances;
}

const HomeScreen: React.FC = () => {
	const [result, setResult] = useState<
		| {
				paths: Path[];
				passengers: number;
				date: string;
		  }
		| undefined
	>(undefined);

	if (result) {
		return (
			<Card style={{ maxWidth: 750, margin: "auto" }}>
				<TripEtyrenarium
					passengers={result.passengers}
					date={result.date}
					paths={result.paths}
				/>
			</Card>
		);
	}

	return (
		<>
			<Card style={{ maxWidth: 750, margin: "auto" }}>
				<RouteForm
					onSubmit={async ({ route, passengers, date }) => {
						const paths = await getPaths(route);
						setResult({
							paths,
							passengers,
							date,
						});
					}}
				/>
			</Card>
		</>
	);
};

export default HomeScreen;
