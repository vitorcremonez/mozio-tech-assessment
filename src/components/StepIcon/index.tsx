import React from "react";
import { BiCircle } from "react-icons/bi";
import { useTheme } from "styled-components";

interface StepIconProps {}

const StepIcon: React.FC<StepIconProps> = () => {
	const theme = useTheme();

	return <BiCircle size={16} color={theme.colors.font} />;
};

export default StepIcon;
