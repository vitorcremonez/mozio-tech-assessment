import StepperInput from "components/inputs/StepperInput";
import { Field, useField } from "formik";
import React from "react";

export interface StepperFieldProps {
	name: string;
	value?: number;
	label: string;
	validate?: (value: number) => string | undefined;
}

const StepperField: React.FC<StepperFieldProps> = ({
	name,
	value = 0,
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
			component={StepperInput}
			onChange={(value: any) => helpers.setValue(value)}
		/>
	);
};

export default StepperField;
