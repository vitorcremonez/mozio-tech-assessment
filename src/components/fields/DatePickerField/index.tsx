import { DatePickerInput } from "components/inputs";
import { Field, useField } from "formik";
import React from "react";

interface DatePickerFieldProps {
	name: string;
	value?: string;
	label: string;
	validate?: (value: string) => string | undefined;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
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
			component={DatePickerInput}
			onChange={(value: any) => helpers.setValue(value)}
		/>
	);
};

export default DatePickerField;
