import { Card } from "components";
import { Api } from "libs";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Result from "./Result";
import { Content } from "./styles";

interface SearchResultScreenProps {}

const SearchResultScreen: React.FC<SearchResultScreenProps> = () => {
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<any>();
	const [error, setError] = useState();
	const router = useRouter();

	const search = useCallback(async ({ route, passengers, date }: any) => {
		try {
			setLoading(true);
			const paths = await Api.getPaths(route);
			setResult({
				paths,
				passengers,
				date,
			});
		} catch (error: any) {
			setError(error.response?.data.message || error.message || "Error");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		if (router.isReady) {
			search({
				date: typeof router.query.date === "string" ? router.query.date : "",
				passengers: Number(router.query.passengers) || 0,
				route: Array.isArray(router.query.cities)
					? router.query.cities.filter((city) => city)
					: typeof router.query.cities === "string"
					? [router.query.cities]
					: [],
			});
		}
	}, [router, search]);

	return (
		<Card style={{ maxWidth: 750, margin: "auto" }}>
			<Content visible={!loading && !!error}>
				<ErrorMessage
					message={error!}
					onClose={() => {
						router.push("/");
					}}
				/>
			</Content>

			<Content visible={result && !error}>
				{!loading && result && !error && (
					<Result
						paths={result.paths || []}
						passengers={result.passengers || 0}
						date={result.date || ""}
						onClose={() => {
							router.push("/");
						}}
					/>
				)}
			</Content>

			<Content visible={loading}>Loading...</Content>
		</Card>
	);
};

export default SearchResultScreen;
