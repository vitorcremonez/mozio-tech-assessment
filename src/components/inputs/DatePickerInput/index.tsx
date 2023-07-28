import moment from "moment";
import React, { useMemo, useState } from "react";
import { Container, Error, Label } from "../styles";
import { InputProps } from "../types";
import CalendarPicker from "./CalenderPicker";
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
				<CalendarPicker
					date={value}
					onChoose={(date) => {
						onChange(date);
						setFocused(false);
					}}
				/>
			)}
			{error && <Error>{error}</Error>}
		</Container>
	);
};

export default DatePickerInput;
