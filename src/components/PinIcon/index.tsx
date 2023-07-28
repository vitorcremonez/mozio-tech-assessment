import React from "react";
import { RiMapPin2Line } from "react-icons/ri";
import { useTheme } from "styled-components";

interface PinIconProps {}

const PinIcon: React.FC<PinIconProps> = () => {
	const theme = useTheme();

	return (
		<RiMapPin2Line
			size={16}
			style={{
				color: theme.colors.danger,
			}}
		/>
	);
};

export default PinIcon;
