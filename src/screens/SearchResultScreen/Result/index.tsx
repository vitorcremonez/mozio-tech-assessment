import { Button } from "components";
import moment from "moment";
import React from "react";
import { Path } from "types";
import Etyrenarium from "./Etyrenarium";
import { Info } from "./styles";

interface ResultProps {
	paths: Path[];
	passengers: number;
	date: string;
	onClose: () => any;
}

const Result: React.FC<ResultProps> = ({
	paths,
	passengers,
	date,
	onClose,
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
			<Button onClick={() => onClose()}>Back</Button>
		</div>
	);
};

export default Result;
