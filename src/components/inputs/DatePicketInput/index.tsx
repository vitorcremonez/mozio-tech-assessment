import React from "react";
import { Container, Error, Label } from "../styles";
import { InputProps } from "../types";

const DatePicketInput: React.FC<InputProps<string>> = ({
	label,
	error,
	onChange = () => {},
}) => {
	return (
		<Container>
			<Label>{label}</Label>
			{error && <Error>{error}</Error>}
		</Container>
	);
};

export default DatePicketInput;
