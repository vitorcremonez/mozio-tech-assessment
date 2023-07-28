import axios from "axios";
import Card from "components/Card";
import { useState } from "react";
import RouteForm from "./RouteForm";

// TODO: isolate this
async function calculateDistances(cities: string[]) {
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
	const [result, setResult] = useState<{
		distances: number[];
		passengers: number;
		date: string;
	}>();

	return (
		<>
			<Card style={{ maxWidth: 750, margin: "auto" }}>
				{!result && (
					<RouteForm
						onSubmit={async ({ route, passengers, date }) => {
							const distances = await calculateDistances(route);
							setResult({
								distances,
								passengers,
								date,
							});
						}}
					/>
				)}
				{result && (
					<>
						<h1>Result</h1>
						<pre>{JSON.stringify(result, null, 2)}</pre>
					</>
				)}
			</Card>
		</>
	);
};

export default HomeScreen;
