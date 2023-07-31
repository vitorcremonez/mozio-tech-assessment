import { Button } from "components";
import React from "react";
import { Container, Message } from "./styles";

interface ErrorMessageProps {
	message: string;
	onClose: () => any;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
	return (
		<Container>
			<Message>{message}</Message>
			<Button onClick={() => onClose()}>Back</Button>
		</Container>
	);
};

export default ErrorMessage;
