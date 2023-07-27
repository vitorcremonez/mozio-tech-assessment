import moment from "moment";
import React, { useMemo, useState } from "react";
import { Container, Error, Label } from "../styles";
import { InputProps } from "../types";
import { Input } from "./styles";

const DatePickerInput: React.FC<InputProps<string>> = ({
	value,
	label,
	error,
	onChange = () => {},
}) => {
	const [focused, setFocused] = useState(false);
	const formattedDate = useMemo(() => {
		if (!value) return "";
		return moment(value).format("MM/DD/YYYY");
	}, [value]);

	return (
		<Container>
			<Label>{label}</Label>
			<Input onClick={() => setFocused(true)}>{formattedDate}</Input>
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
