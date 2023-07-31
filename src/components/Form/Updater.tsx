import { useFormikContext } from "formik";
import React, { useEffect } from "react";

interface UpdaterProps {
	onUpdate: (values: any) => any;
}

const Updater: React.FC<UpdaterProps> = ({ onUpdate }) => {
	const { values } = useFormikContext();

	useEffect(() => {
		onUpdate(values);
	}, [values]);

	return null;
};

export default Updater;
