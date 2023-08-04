import { Card } from "components";
import { useRouter } from "next/router";
import { useCallback } from "react";
import RouteForm from "./RouteForm";

const HomeScreen: React.FC = () => {
	const router = useRouter();

	const handleSubmit = useCallback(
		(values: any) => {
			router.push(
				`/result?${values.route
					.map((city: string) => `cities=${city}`)
					.join("&")}&passengers=${values.passengers}&date=${values.date}`
			);
		},
		[router]
	);

	return (
		<Card style={{ maxWidth: 750, margin: "auto" }}>
			<RouteForm onSubmit={handleSubmit} />
		</Card>
	);
};

export default HomeScreen;
