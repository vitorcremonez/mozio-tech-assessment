import { Button } from "components";
import Card from "components/Card";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import Path from "types/Path";
import Etyrenarium from "./Etyrenarium";
import { Info } from "./styles";

interface ResultScreenProps {
	paths: Path[];
	passengers: number;
	date: string;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
	passengers,
	date,
	paths,
}) => {
	const router = useRouter();
	const totalDistance = paths.reduce((acc, path) => acc + path.distance, 0);

	return (
		<Card style={{ textAlign: "center", maxWidth: 750, margin: "auto" }}>
			<Etyrenarium paths={paths} />
			<Info>
				<p>
					<b>{totalDistance.toFixed(2)} km</b> is total distance
				</p>
				<p>
					<b>{passengers}</b> passengers
				</p>
				<p>
					<b>{moment(date).format("MMM D, YYYY")}</b>
				</p>
			</Info>
			<Button onClick={() => router.back()}>Back</Button>
		</Card>
	);
};

export default ResultScreen;
