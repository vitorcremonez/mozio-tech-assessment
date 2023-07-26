import React, { useEffect, useState } from "react";
import { Container, Error, Label } from "../styles";
import { InputProps } from "../types";
import Selector from "./Selector";
import { Input } from "./styles";

const LocationPickerInput: React.FC<InputProps<string>> = ({
	value,
	label,
	error,
	onChange = () => {},
}) => {
	const [term, setTerm] = useState(value);
	const [focused, setFocused] = useState(false);
	const [options, setOptions] = useState([
		"Paris",
		"Montpellier",
		"Aix-en-Provence",
	]);

	useEffect(() => {
		setOptions(["Paris", "Aix-en-Provence"]);
	}, [term]);

	return (
		<Container>
			<Label>{label}</Label>
			<Input
				value={term}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				onChange={({ target }) => setTerm(target.value)}
			/>
			{focused && (
				<Selector options={options} onSelect={(option) => onChange(option)} />
			)}
			{error && <Error>{error}</Error>}
		</Container>
	);
};

export default LocationPickerInput;
