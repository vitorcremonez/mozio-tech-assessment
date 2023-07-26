import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import { Error, Input, Label } from "./styles";

interface LocationPickerInputProps {
	label: string;
	error?: string;
	onChange: (option: string) => any;
}

const LocationPickerInput: React.FC<LocationPickerInputProps> = ({
	label,
	error,
	onChange,
}) => {
	const [term, setTerm] = useState("");
	const [focused, setFocused] = useState(false);

	useEffect(() => {
		console.log(term);
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
			<Selector
				options={["Paris", "Montpellier", "Aix-en-Provence"]}
				onSelect={(option) => onChange(option)}
			/>
			{error && <Error>{error}</Error>}
		</>
	);
};

export default LocationPickerInput;
