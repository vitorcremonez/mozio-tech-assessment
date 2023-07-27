import { LocationPickerField } from "components/fields";
import React, { useState } from "react";
import { BiCircle as CircleIcon } from "react-icons/bi";
import { CgCloseO as CloseIcon } from "react-icons/cg";
import { RiMapPin2Line as PinIcon } from "react-icons/ri";
import {
	LeftColumn,
	MiddleColumn,
	RightColumn,
	Row,
	Table,
	VerticalLine,
} from "./styles";

interface RouteFieldsProps {}

const RouteFields: React.FC<RouteFieldsProps> = () => {
	const [destinations, setDestinations] = useState(["aaa"]);

	return (
		<Table border={1} cellSpacing={0} cellPadding={0}>
			<tbody>
				<Row>
					<LeftColumn>
						<CircleIcon size={16} color={"#374151"} />
						<VerticalLine />
					</LeftColumn>
					<MiddleColumn>
						<LocationPickerField
							defaultValue={""}
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
				{destinations.map((destination, index) => {
					const isLast = index === destinations.length - 1;
					return (
						<Row key={index}>
							<LeftColumn>
								{isLast ? (
									<PinIcon size={16} style={{ color: "#FF0000" }} />
								) : (
									<>
										<CircleIcon size={16} color={"#374151"} />
										<VerticalLine />
									</>
								)}
							</LeftColumn>
							<MiddleColumn>
								<LocationPickerField
									defaultValue={""}
									name={`destinations["${destination}"]`}
									label={"City of destination"}
									validate={(value) => {
										if (!value) {
											return "You must choose the city of destination";
										}
									}}
								/>
							</MiddleColumn>
							<RightColumn>
								<CloseIcon
									size={16}
									onClick={() => {
										setDestinations(
											destinations.filter((x) => destination !== x)
										);
									}}
								/>
							</RightColumn>
						</Row>
					);
				})}
				<Row>
					<td>+</td>
					<MiddleColumn>
						<a
							href="#"
							onClick={() => {
								setDestinations([...destinations, Math.random().toString()]);
							}}
						>
							Add destination
						</a>
					</MiddleColumn>
					<RightColumn></RightColumn>
				</Row>
			</tbody>
		</Table>
	);
};

export default RouteFields;
