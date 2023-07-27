import { Formik, Form as FormikForm } from "formik";
import React, { useCallback } from "react";

interface FormProps {
	children: React.ReactNode;
	onSubmit: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
	const handleSubmit = useCallback(
		(values: any) => {
			onSubmit(values);
		},
		[onSubmit]
	);

	return (
		<Formik
			initialValues={{}}
			onSubmit={handleSubmit}
			validateOnBlur
			validateOnChange
		>
			<FormikForm>{children}</FormikForm>
		</Formik>
	);
};

export default Form;
