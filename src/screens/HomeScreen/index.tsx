import axios from "axios";
import Card from "components/Card";
import { useState } from "react";
import Step from "types/Step";
import RouteForm from "./RouteForm";
import TripEtyrenarium from "./TripEtyrenarium";

// TODO: isolate this
async function getSteps(cities: string[]) {
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
				steps: Step[];
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
					steps={result.steps}
					onCancel={() => setResult(undefined)}
				/>
			</Card>
		);
	}

	return (
		<>
			<Card style={{ maxWidth: 750, margin: "auto" }}>
				<RouteForm
					onSubmit={async ({ route, passengers, date }) => {
						const steps = await getSteps(route);
						setResult({
							steps,
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
