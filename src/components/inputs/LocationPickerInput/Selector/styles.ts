import styled from "styled-components";

export const Background = styled.div`
	width: 100%;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.backgroundInput};
	border: 1px solid ${({ theme }) => theme.colors.primary};
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
		background-color: ${({ theme }) => theme.colors.primary};
		cursor: pointer;
	}
`;
