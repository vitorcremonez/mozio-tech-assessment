import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import { Error, Input, Label } from "./styles";

interface LocationPickerInputProps {
	value?: string;
	label: string;
	error?: string;
	onChange: (option: string) => any;
}

const LocationPickerInput: React.FC<LocationPickerInputProps> = ({
	value,
	label,
	error,
	onChange,
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
		<>
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
		</>
	);
};

export default LocationPickerInput;
