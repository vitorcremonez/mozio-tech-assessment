import styled from "styled-components";

export const Container = styled.button`
	background-color: #374151;
	border: 1px solid #e5e7eb;
	border-radius: 4px;
	color: white;
	font-size: 14px;
	padding: 8px 12px;
	cursor: pointer;
	transition: background-color 100ms ease-in-out;

	&:hover {
		background-color: #4b5563;
	}
	&:active {
		background-color: #1f2937;
	}
	:disabled {
		background-color: #e5e7eb;
	}
`;
