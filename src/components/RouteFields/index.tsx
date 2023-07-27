import { LocationPickerField } from "components/fields";
import React, { useEffect, useState } from "react";
import { BiCircle as CircleIcon } from "react-icons/bi";
import { CgCloseO as CloseIcon } from "react-icons/cg";
import { RiMapPin2Line as PinIcon } from "react-icons/ri";
import { v4 as generateUuid } from "uuid";
import {
	LeftColumn,
	MiddleColumn,
	RightColumn,
	Row,
	Table,
	VerticalLine,
} from "./styles";

const INITIAL_KEY = "d239c487-5a34-4dc4-b084-991cb71208c1";

interface RouteFieldsProps {
	onChangeDestinations: (keys: string[]) => any;
}

const RouteFields: React.FC<RouteFieldsProps> = ({ onChangeDestinations }) => {
	const [keys, setKeys] = useState([INITIAL_KEY]);

	useEffect(() => {
		onChangeDestinations(keys);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keys]);

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
				{keys.map((key, index) => {
					const isLast = index === keys.length - 1;
					const isUnique = keys.length === 1;
					return (
						<Row key={key}>
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
										size={16}
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
					<td>+</td>
					<MiddleColumn>
						<a
							href={"#"}
							onClick={() => {
								setKeys([...keys, generateUuid()]);
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
