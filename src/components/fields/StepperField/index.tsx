import StepperInput, {
	StepperInputProps,
} from "components/inputs/StepperInput";
import { Field, useField } from "formik";
import React from "react";

export type StepperFieldProps = StepperInputProps & {
	name: string;
};

const StepperField: React.FC<StepperFieldProps> = ({ name, value, label }) => {
	const [_field, meta, helpers] = useField({ name, value });

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
