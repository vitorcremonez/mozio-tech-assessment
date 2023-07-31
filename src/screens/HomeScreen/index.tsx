import axios from "axios";
import Card from "components/Card";
import { useCallback, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Result from "./Result";
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
	const [result, setResult] = useState<any>();
	const [error, setError] = useState();

	const handleSubmit = useCallback(async ({ route, passengers, date }: any) => {
		try {
			const paths = await getPaths(route);
			setResult({
				paths,
				passengers,
				date,
			});
		} catch (error: any) {
			setError(error.response?.data.message || error.message);
		}
	}, []);

	return (
		<Card style={{ maxWidth: 750, margin: "auto" }}>
			<div style={{ display: (result || error) && "none" }}>
				<RouteForm onSubmit={handleSubmit} />
			</div>

			<div style={{ display: !error && "none" }}>
				<ErrorMessage
					message={error!}
					onClose={() => {
						setResult(undefined);
						setError(undefined);
					}}
				/>
			</div>

			<div style={{ display: (!result || error) && "none" }}>
				{result && !error && (
					<Result
						paths={result.paths || []}
						passengers={result.passengers || 0}
						date={result.date || ""}
						onClose={() => {
							setResult(undefined);
							setError(undefined);
						}}
					/>
				)}
			</div>
		</Card>
	);
};

export default HomeScreen;
