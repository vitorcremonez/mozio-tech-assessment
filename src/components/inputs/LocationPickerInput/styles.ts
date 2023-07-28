import styled from "styled-components";

export const Input = styled.input`
	background-color: ${({ theme }) => theme.colors.backgroundInput};
	border: 1px solid ${({ theme }) => theme.colors.muted};
	padding: 8px 12px;
	border-radius: 6px;
	font-size: 12px;
	outline: none;
	width: 100%;
	box-sizing: border-box;
`;
