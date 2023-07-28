import styled from "styled-components";

export const Input = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundInput};
	border: 1px solid ${({ theme }) => theme.colors.muted};
	padding: 8px 12px;
	border-radius: 6px;
	font-size: 12px;
	line-height: 18px;
	height: 18px;
`;
