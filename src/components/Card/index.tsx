import React from "react";

interface CardProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
	return (
		<div
			style={{
				backgroundColor: "white",
				borderRadius: 16,
				padding: 40,
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Card;
