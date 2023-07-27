import StepperInput from "components/inputs/StepperInput";
import { Field } from "formik";
import React from "react";
import useField from "../useField";

export interface StepperFieldProps {
	name: string;
	defaultValue: number;
	label: string;
	validate?: (value: number) => string | undefined;
}

const StepperField: React.FC<StepperFieldProps> = ({
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
			error={touched && error ? error : undefined}
			component={StepperInput}
			onChange={(value: any) => setValue(value)}
		/>
	);
};

export default StepperField;
