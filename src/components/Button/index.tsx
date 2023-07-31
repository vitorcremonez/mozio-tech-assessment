import React from "react";
import Loader from "./Loader";
import { Container, Visible } from "./styles";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	children: React.ReactNode;
	disabled?: boolean;
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<Container {...props}>
			{props.loading && <Loader />}
			<Visible visible={!props.loading}>{props.children}</Visible>
		</Container>
	);
};

export default Button;
