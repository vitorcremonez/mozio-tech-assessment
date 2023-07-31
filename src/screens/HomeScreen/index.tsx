import { Card } from "components";
import { Api } from "libs";
import { useCallback, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Result from "./Result";
import RouteForm from "./RouteForm";
import { Content } from "./styles";

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
			setError(error.response?.data.message || error.message || "Error");
		}
	}, []);

	return (
		<Card style={{ maxWidth: 750, margin: "auto" }}>
			<Content visible={!result && !error}>
				<RouteForm onSubmit={handleSubmit} />
			</Content>

			<Content visible={!!error}>
				<ErrorMessage
					message={error!}
					onClose={() => {
						setResult(undefined);
						setError(undefined);
					}}
				/>
			</Content>

			<Content visible={result && !error}>
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
			</Content>
		</Card>
	);
};

export default HomeScreen;
