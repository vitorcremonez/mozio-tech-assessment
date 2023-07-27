import { LocationPickerInput } from "components/inputs";
import { Field, useField } from "formik";
import React from "react";

export interface LocationPickerFieldProps {
	name: string;
	value?: string;
	label: string;
}

const LocationPickerField: React.FC<LocationPickerFieldProps> = ({
	name,
	value = "",
	label,
}) => {
	const [_field, meta, helpers] = useField({ name, value });

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
