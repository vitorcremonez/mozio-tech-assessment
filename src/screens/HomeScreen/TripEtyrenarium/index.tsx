import { Button } from "components";
import React from "react";
import Etyrenarium from "./Etyrenarium";
import { Info } from "./styles";

const TripEtyrenarium: React.FC = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<Etyrenarium
				steps={[
					{
						from: "Paris",
						to: "Aix-en-Proence",
						distance: 638.3,
					},
					{
						from: "Aix-en-Proence",
						to: "Montpellier",
						distance: 126.86,
					},
					{
						from: "Aix-en-Proence",
						to: "Montpellier",
						distance: 126.86,
					},
					{
						from: "Aix-en-Proence",
						to: "Montpellier",
						distance: 126.86,
					},
					{
						from: "Aix-en-Proence",
						to: "Montpellier",
						distance: 126.86,
					},
					{
						from: "Aix-en-Proence",
						to: "Montpellier",
						distance: 126.86,
					},
				]}
			/>
			<Info>
				<p>
					<b>100.00 km</b> is total distance
				</p>
				<p>
					<b>10</b> passengers
				</p>
				<p>
					<b>Feb 1, 2023</b>
				</p>
			</Info>
			<Button>Back</Button>
		</div>
	);
};

export default TripEtyrenarium;
