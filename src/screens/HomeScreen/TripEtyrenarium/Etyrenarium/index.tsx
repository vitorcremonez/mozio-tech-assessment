import { DottedLine, PinIcon, StepIcon } from "components";
import React from "react";
import { Balloon, LeftCol, MiddleCol, RightCol, Row } from "./styles";

interface EtyrenariumProps {
	steps: {
		from: string;
		to: string;
		distance: number;
	}[];
}

const Etyrenarium: React.FC<EtyrenariumProps> = ({ steps }) => {
	const lastStep = steps[steps.length - 1];

	return (
		<>
			{steps.map((step, index) => {
				return (
					<Row key={index}>
						<LeftCol>
							<Balloon>{step.distance} km</Balloon>
						</LeftCol>
						<MiddleCol>
							<StepIcon />
							<DottedLine size={36} />
						</MiddleCol>
						<RightCol>{step.from}</RightCol>
					</Row>
				);
			})}
			<Row>
				<LeftCol />
				<MiddleCol>
					<PinIcon />
				</MiddleCol>
				<RightCol>{lastStep.to}</RightCol>
			</Row>
		</>
	);
};

export default Etyrenarium;
