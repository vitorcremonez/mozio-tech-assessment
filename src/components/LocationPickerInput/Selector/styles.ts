import styled from "styled-components";

export const Background = styled.div`
	background-color: #ffffff;
	border: 1px solid #c7d1f4;
	box-shadow: 0px 2px 4px -2px #00000022;
	position: absolute;
	top: 5px;
	padding: 5px;
	border-radius: 6px;
`;

export const Option = styled.div`
	padding: 10px;
	border-radius: 4px;
	transition: background-color 0.2s ease-in-out;
	&:hover {
		background-color: #c7d1f4;
		cursor: pointer;
	}
`;
