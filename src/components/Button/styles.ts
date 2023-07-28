import styled from "styled-components";

export const Container = styled.button`
	background-color: ${({ theme }) => theme.colors.font};
	border: 1px solid ${({ theme }) => theme.colors.muted};
	border-radius: 4px;
	color: white;
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
