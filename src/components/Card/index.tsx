import React from "react";
import { useTheme } from "styled-components";

interface CardProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
	const theme = useTheme();

	return (
		<div
			style={{
				backgroundColor: theme.colors.card,
				borderRadius: 16,
				padding: 40,
				boxShadow: "0px 5px 25px -15px #00000099",
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Card;
