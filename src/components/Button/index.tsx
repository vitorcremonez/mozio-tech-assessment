import React from "react";
import Loader from "./Loader";
import { Container, Visible } from "./styles";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	children: React.ReactNode;
	disabled?: boolean;
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ loading, children, ...props }) => {
	return (
		<Container {...props}>
			{loading && <Loader />}
			<Visible visible={!loading}>{children}</Visible>
		</Container>
	);
};

export default Button;
