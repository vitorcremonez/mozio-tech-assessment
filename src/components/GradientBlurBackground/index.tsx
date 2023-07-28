import React from "react";
import { useTheme } from "styled-components";

const GradientBlurBackground: React.FC = () => {
	const theme = useTheme();
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				position: "absolute",
				overflow: "hidden",
				top: 0,
				bottom: 0,
				zIndex: -1,
				opacity: theme.backgroundOpacity,
				backgroundImage: `url('/gradient.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		/>
	);
};

export default GradientBlurBackground;
