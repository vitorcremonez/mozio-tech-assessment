import React from "react";
import { Error, Input, Label } from "./styles";

interface LocationPickerInputProps {
	label: string;
	error?: string;
	onChange: () => any;
}

const LocationPickerInput: React.FC<LocationPickerInputProps> = ({
	label,
	error,
	onChange,
}) => {
	return (
		<>
			<Label>{label}</Label>
			<Input onChange={() => onChange()} />
			{error && <Error>Danger message</Error>}
		</>
	);
};

export default LocationPickerInput;
