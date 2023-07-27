import React from "react";
import { Background, Option } from "./styles";

interface SelectorProps {
	options: string[];
	onSelect: (option: string) => any;
}

const Selector: React.FC<SelectorProps> = ({ options, onSelect }) => {
	return (
		<div style={{ position: "relative", zIndex: 1000 }}>
			<Background>
				{options.map((option, key) => (
					<Option key={key} onMouseDown={() => onSelect(option)}>
						{option}
					</Option>
				))}
			</Background>
		</div>
	);
};

export default Selector;
