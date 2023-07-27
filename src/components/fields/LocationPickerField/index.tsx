import { LocationPickerInput } from "components/inputs";
import { Field, useField } from "formik";
import React from "react";

export interface LocationPickerFieldProps {
	name: string;
	value?: string;
	label: string;
	validate?: (value: string) => string | undefined;
}

const LocationPickerField: React.FC<LocationPickerFieldProps> = ({
	name,
	value = "",
	label,
	validate = () => undefined,
}) => {
	const [_field, meta, helpers] = useField({ name, value, validate });

	return (
		<Field
			name={name}
			value={meta.value}
			label={label}
			error={meta.touched && meta.error ? meta.error : undefined}
			component={LocationPickerInput}
			onChange={(value: any) => helpers.setValue(value)}
		/>
	);
};

export default LocationPickerField;
