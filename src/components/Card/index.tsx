import React from "react";

interface CardProps {
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: "white",
				borderRadius: 16,
				padding: 40,
			}}
		>
			{children}
		</div>
	);
};

export default Card;
