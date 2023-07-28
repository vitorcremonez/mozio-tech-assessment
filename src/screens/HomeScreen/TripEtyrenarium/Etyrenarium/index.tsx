import { DottedLine, PinIcon, StepIcon } from "components";
import React from "react";
import Step from "types/Step";
import { Balloon, LeftCol, MiddleCol, RightCol, Row } from "./styles";

interface EtyrenariumProps {
	steps: Step[];
}

const Etyrenarium: React.FC<EtyrenariumProps> = ({ steps }) => {
	const lastStep = steps[steps.length - 1];

	return (
		<>
			{steps.map((step, index) => {
				return (
					<Row key={index}>
						<LeftCol>
							<Balloon>{step.distance.toFixed(2)} km</Balloon>
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
