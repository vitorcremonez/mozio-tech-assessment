import React, { useCallback } from "react";

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
		<>
			<label>{label}</label>
			<div style={{ display: "flex" }}>
				<div>
					<button onClick={() => decrease()}>-</button>
				</div>
				<div>{value}</div>
				<div>
					<button onClick={() => increase()}>+</button>
				</div>
			</div>
			{error && <div>{error}</div>}
		</>
	);
};

export default StepperInput;
