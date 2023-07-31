import { DottedLine, PinIcon, StepIcon } from "components";
import { LocationPickerField } from "components/fields";
import React, { useEffect, useState } from "react";
import { v4 as generateUuid } from "uuid";
import {
	ButtonColumn,
	CloseIcon,
	LeftColumn,
	MiddleColumn,
	PlusIcon,
	PlusLinkButton,
	RightColumn,
	Row,
	Table,
} from "./styles";

interface RouteFieldsProps {
	cities: string[];
	onChangeDestinations: (keys: string[]) => any;
}

const RouteFields: React.FC<RouteFieldsProps> = ({
	cities,
	onChangeDestinations,
}) => {
	const [keys, setKeys] = useState(
		Array.from(
			{
				length: cities.length <= 1 ? 1 : cities.length - 1,
			},
			() => generateUuid()
		)
	);

	useEffect(() => {
		onChangeDestinations(keys);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keys]);

	return (
		<Table>
			<tbody>
				<Row>
					<LeftColumn>
						<StepIcon />
						<DottedLine size={57} />
					</LeftColumn>
					<MiddleColumn>
						<LocationPickerField
							defaultValue={cities[0] || ""}
							name={"origin"}
							label={"City of origin"}
							validate={(value) => {
								if (!value) {
									return "You must choose the city of origin";
								}
							}}
						/>
					</MiddleColumn>
					<RightColumn></RightColumn>
				</Row>
				{keys.map((key, index) => {
					const isLast = index === keys.length - 1;
					const isUnique = keys.length === 1;
					return (
						<Row key={key}>
							<LeftColumn>
								{isLast ? (
									<PinIcon />
								) : (
									<>
										<StepIcon />
										<DottedLine size={57} />
									</>
								)}
							</LeftColumn>
							<MiddleColumn>
								<LocationPickerField
									defaultValue={cities[index + 1] || ""}
									name={`destinations[${key}]`}
									label={"City of destination"}
									validate={(value) => {
										if (!value) {
											return "You must choose the city of destination";
										}
									}}
								/>
							</MiddleColumn>
							<RightColumn>
								{!isUnique && (
									<CloseIcon
										onClick={() => {
											setKeys(keys.filter((x) => key !== x));
										}}
									/>
								)}
							</RightColumn>
						</Row>
					);
				})}
				<Row>
					<ButtonColumn>
						<PlusLinkButton
							onClick={() => {
								setKeys([...keys, generateUuid()]);
							}}
						>
							<PlusIcon
								style={{
									marginRight: 25,
									transform: "translateY(4px)",
								}}
							/>
							{"Add destination"}
						</PlusLinkButton>
					</ButtonColumn>
				</Row>
			</tbody>
		</Table>
	);
};

export default RouteFields;
