import { useField as useFormikField } from "formik";
import { useEffect } from "react";

const useField = ({
	name,
	defaultValue,
	validate = () => undefined,
}: {
	name: string;
	defaultValue: any;
	validate: any;
}) => {
	const [_field, meta, helpers] = useFormikField({
		name: name,
		validate: validate,
	});

	useEffect(() => {
		if (meta.value === undefined) {
			helpers.setValue(defaultValue);
		}
	}, [defaultValue, meta.value, helpers]);

	useEffect(() => {
		return () => {
			helpers.setValue(undefined);
		};
	}, [helpers]);

	return {
		value: meta.value || defaultValue,
		touched: meta.touched,
		error: meta.error,
		setValue: helpers.setValue,
	};
};

export default useField;
