import { Formik, Form as FormikForm } from "formik";
import React, { useCallback } from "react";
import Updater from "./Updater";

interface FormProps {
	children: React.ReactNode;
	onSubmit: (data: any) => any;
	onUpdate?: (data: any) => any;
}

const Form: React.FC<FormProps> = ({
	onSubmit,
	onUpdate = () => {},
	children,
}) => {
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
			<FormikForm>
				<Updater onUpdate={onUpdate} />
				{children}
			</FormikForm>
		</Formik>
	);
};

export default Form;
