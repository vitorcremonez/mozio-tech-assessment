import React, { useCallback } from "react";
import { Container, Error, Label } from "../styles";

interface StepperInputProps {
	value: number;
	label: string;
	error?: string;
	onChange: (option: number) => any;
}

const StepperInput: React.FC<StepperInputProps> = ({
	value,
	label,
	error,
	onChange,
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
					<button onClick={() => decrease()}>-</button>
				</div>
				<div>{value}</div>
				<div>
					<button onClick={() => increase()}>+</button>
				</div>
			</div>
			{error && <Error>{error}</Error>}
		</Container>
	);
};

export default StepperInput;
