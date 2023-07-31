import { DatePickerInput } from "components/inputs";
import { Field } from "formik";
import moment from "moment";
import React, { useMemo } from "react";
import useField from "../useField";

interface DatePickerFieldProps {
	name: string;
	defaultValue: string;
	label: string;
	validate?: (value: string) => string | undefined;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
	name,
	defaultValue,
	label,
	validate,
}) => {
	const { value, touched, error, setValue } = useField({
		name,
		defaultValue,
		validate,
	});
	const isValidDate = useMemo(() => {
		return moment(defaultValue).isValid();
	}, [defaultValue]);

	if (defaultValue !== "" && !isValidDate) {
		return <div>Invalid Date</div>;
	}

	return (
		<Field
			name={name}
			value={value}
			label={label}
			error={touched && error ? error : undefined}
			component={DatePickerInput}
			onChange={(value: any) => setValue(value)}
		/>
	);
};

export default DatePickerField;
