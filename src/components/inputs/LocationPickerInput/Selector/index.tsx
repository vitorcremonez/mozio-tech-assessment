import React from "react";
import Loader from "./Loader";
import { Background, Option } from "./styles";

interface SelectorProps {
	options: string[];
	onSelect: (option: string) => any;
	loading: boolean;
}

const Selector: React.FC<SelectorProps> = ({ options, onSelect, loading }) => {
	return (
		<div style={{ position: "relative", zIndex: 1000 }}>
			<Background>
				{options.map((option, key) => (
					<Option key={key} onMouseDown={() => onSelect(option)}>
						{option}
					</Option>
				))}
				{loading && <Loader />}
			</Background>
		</div>
	);
};

export default Selector;
