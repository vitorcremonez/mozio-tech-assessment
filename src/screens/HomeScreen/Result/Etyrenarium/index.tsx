import { DottedLine, PinIcon, StepIcon } from "components";
import React from "react";
import Path from "types/Path";
import { Balloon, LeftCol, MiddleCol, RightCol, Row } from "./styles";

interface EtyrenariumProps {
	paths: Path[];
}

const Etyrenarium: React.FC<EtyrenariumProps> = ({ paths }) => {
	const lastPath = paths[paths.length - 1];

	return (
		<>
			{paths.map((path, index) => {
				return (
					<Row key={index}>
						<LeftCol>
							<Balloon>{path.distance.toFixed(2)} km</Balloon>
						</LeftCol>
						<MiddleCol>
							<StepIcon />
							<DottedLine size={36} />
						</MiddleCol>
						<RightCol>{path.from}</RightCol>
					</Row>
				);
			})}
			<Row>
				<LeftCol />
				<MiddleCol>
					<PinIcon />
				</MiddleCol>
				<RightCol>{lastPath.to}</RightCol>
			</Row>
		</>
	);
};

export default Etyrenarium;
