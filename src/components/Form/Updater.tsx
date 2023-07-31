import { useFormikContext } from "formik";
import React, { useEffect } from "react";

interface UpdaterProps {
	onUpdate: (values: any) => any;
}

const Updater: React.FC<UpdaterProps> = ({ onUpdate }) => {
	const { values } = useFormikContext();

	useEffect(() => {
		onUpdate(values);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);

	return null;
};

export default Updater;
