import React from "react";
import { Container } from "./styles";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	children: React.ReactNode;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
	return <Container {...props} />;
};

export default Button;
