import { Formik, Form as FormikForm } from "formik";
import React, { useCallback } from "react";

interface FormProps {
	initialValues?: any;
	children: React.ReactNode;
	onSubmit: (data: any) => void;
}

const Form: React.FC<FormProps> = ({
	initialValues = {},
	onSubmit,
	children,
}) => {
	const handleSubmit = useCallback(
		(values: any) => {
			onSubmit(values);
		},
		[onSubmit]
	);

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			{() => <FormikForm>{children}</FormikForm>}
		</Formik>
	);
};

export default Form;
