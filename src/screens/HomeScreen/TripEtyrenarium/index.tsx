import { Button } from "components";
import moment from "moment";
import React from "react";
import Path from "types/Path";
import Etyrenarium from "./Etyrenarium";
import { Info } from "./styles";

interface TripEtyrenariumProps {
	paths: Path[];
	passengers: number;
	date: string;
}

const TripEtyrenarium: React.FC<TripEtyrenariumProps> = ({
	passengers,
	date,
	paths,
}) => {
	const totalDistance = paths.reduce((acc, path) => acc + path.distance, 0);

	return (
		<div style={{ textAlign: "center" }}>
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
			<Button>Back</Button>
		</div>
	);
};

export default TripEtyrenarium;
