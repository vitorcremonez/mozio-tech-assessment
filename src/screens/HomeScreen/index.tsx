import { Card } from "components";
import { Api } from "libs";
import { useCallback, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Result from "./Result";
import RouteForm from "./RouteForm";

const HomeScreen: React.FC = () => {
	const [result, setResult] = useState<any>();
	const [error, setError] = useState();

	const handleSubmit = useCallback(async ({ route, passengers, date }: any) => {
		try {
			const paths = await Api.getPaths(route);
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
