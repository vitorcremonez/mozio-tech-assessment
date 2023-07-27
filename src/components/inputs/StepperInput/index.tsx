import React, { useCallback } from "react";
import { Container, Error, Label } from "../styles";
import { InputProps } from "../types";

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
			<div style={{ display: "flex" }}>
				<div>
					<button type={"button"} onClick={() => decrease()}>
						-
					</button>
				</div>
				<div>{value}</div>
				<div>
					<button type={"button"} onClick={() => increase()}>
						+
					</button>
				</div>
			</div>
			{error && <Error>{error}</Error>}
		</Container>
	);
};

export default StepperInput;
