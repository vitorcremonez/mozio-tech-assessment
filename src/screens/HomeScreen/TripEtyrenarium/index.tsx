import { Button } from "components";
import moment from "moment";
import React from "react";
import Step from "types/Step";
import Etyrenarium from "./Etyrenarium";
import { Info } from "./styles";

interface TripEtyrenariumProps {
	steps: Step[];
	passengers: number;
	date: string;
	onCancel: () => any;
}

const TripEtyrenarium: React.FC<TripEtyrenariumProps> = ({
	passengers,
	date,
	steps,
	onCancel,
}) => {
	const totalDistance = steps.reduce((acc, step) => acc + step.distance, 0);

	return (
		<div style={{ textAlign: "center" }}>
			<Etyrenarium steps={steps} />
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
