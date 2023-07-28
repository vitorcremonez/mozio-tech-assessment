import React from "react";
import { useTheme } from "styled-components";

interface DottedLineProps {
	size: number;
}

const DottedLine: React.FC<DottedLineProps> = ({ size }) => {
	const theme = useTheme();

	return (
		<div
			style={{
				borderLeft: `2px dotted ${theme.colors.font}`,
				left: "calc(50% - 1px)",
				position: "absolute",
				height: size,
			}}
		/>
	);
};

export default DottedLine;
