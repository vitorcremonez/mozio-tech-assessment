import moment from "moment";
import React, { useMemo, useState } from "react";
import { Container, Error, Label } from "../styles";
import { InputProps } from "../types";

const DatePickerInput: React.FC<InputProps<string>> = ({
	value,
	label,
	error,
	onChange = () => {},
}) => {
	const [focused, setFocused] = useState(false);
	const formattedDate = useMemo(() => {
		return moment(value).format("MM/DD/YYYY");
	}, [value]);

	return (
		<Container>
			<Label>{label}</Label>
			<div
				style={{
					border: "1px solid orange",
					borderRadius: "4px",
					padding: "8px",
				}}
				onClick={() => setFocused(true)}
			>
				{formattedDate}
			</div>
			{focused && (
				<div
					onClick={() => {
						onChange("2022-01-01 00:00:00");
						setFocused(false);
					}}
				>
					date selector
				</div>
			)}
			{error && <Error>{error}</Error>}
		</Container>
	);
};

export default DatePickerInput;
