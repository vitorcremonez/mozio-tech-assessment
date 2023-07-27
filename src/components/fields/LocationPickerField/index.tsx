import { LocationPickerInput } from "components/inputs";
import { Field } from "formik";
import React from "react";
import useField from "../useField";

export interface LocationPickerFieldProps {
	name: string;
	defaultValue: string;
	label: string;
	validate?: (value: string) => string | undefined;
}

const LocationPickerField: React.FC<LocationPickerFieldProps> = ({
	name,
	defaultValue,
	label,
	validate = () => undefined,
}) => {
	const { value, touched, error, setValue } = useField({
		name,
		defaultValue,
		validate,
	});

	return (
		<Field
			name={name}
			value={value}
			label={label}
			error={error && touched ? error : undefined}
			component={LocationPickerInput}
			onChange={(newValue: any) => setValue(newValue)}
		/>
	);
};

export default LocationPickerField;
