import { useFormikContext, useField as useFormikField } from "formik";
import { useEffect } from "react";

const useField = (params: {
	name: string;
	defaultValue: any;
	validate: any;
}) => {
	const [_field, meta, helpers] = useFormikField({
		name: params.name,
		validate: params.validate,
	});
	const { setFieldValue } = useFormikContext();

	useEffect(() => {
		if (meta.value === undefined) {
			helpers.setValue(params.defaultValue);
		}
	}, [params.defaultValue, setFieldValue, meta.value, helpers]);

	return {
		value: meta.value || params.defaultValue,
		touched: meta.touched,
		error: meta.error,
		setValue: helpers.setValue,
	};
};

export default useField;
