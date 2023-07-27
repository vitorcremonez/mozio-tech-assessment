import React, { useCallback } from "react";
import { Container, Error, Label } from "../styles";
import { InputProps } from "../types";
import { Button, Quantity, Wrapper } from "./styles";

export type StepperInputProps = InputProps<number>;

const StepperInput: React.FC<StepperInputProps> = ({
	value,
	label,
	error,
	onChange = () => {},
}) => {
	const decrease = useCallback(() => {
		if (value > 0) {
			onChange(value - 1);
		}
	}, [value, onChange]);

	const increase = useCallback(() => {
		onChange(value + 1);
	}, [value, onChange]);

	return (
		<Container>
			<Label>{label}</Label>
			<Wrapper>
				<Button type={"button"} onClick={() => decrease()}>
					-
				</Button>
				<Quantity>{value}</Quantity>
				<Button type={"button"} onClick={() => increase()}>
					+
				</Button>
			</Wrapper>
			{error && <Error>{error}</Error>}
		</Container>
	);
};

export default StepperInput;
