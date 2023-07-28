import styled from "styled-components";

export const Container = styled.button`
	background-color: ${({ theme }) => theme.colors.button};
	border: 1px solid ${({ theme }) => theme.colors.muted};
	color: ${({ theme }) => theme.colors.buttonFont};
	border-radius: 4px;
	font-size: 14px;
	padding: 8px 12px;
	cursor: pointer;
	transition: opacity 100ms ease-in-out;

	&:hover {
		opacity: 0.8;
	}
	&:active {
		opacity: 0.9;
	}
	:disabled {
		background-color: ${({ theme }) => theme.colors.muted};
	}
`;
