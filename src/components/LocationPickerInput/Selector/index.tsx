import React from "react";
import { Option } from "./styles";

interface SelectorProps {
	options: string[];
	onSelect: (option: string) => any;
}

const Selector: React.FC<SelectorProps> = ({ options, onSelect }) => {
	return (
		<div
			style={{
				border: "1px solid #C7D1F4",
				padding: 5,
				borderRadius: 6,
				boxShadow: "0px 2px 4px -2px #00000022",
			}}
		>
			{options.map((option, key) => (
				<Option key={key}>{option}</Option>
			))}
		</div>
	);
};

export default Selector;
