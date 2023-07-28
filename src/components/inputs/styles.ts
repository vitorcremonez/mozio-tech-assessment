import styled from "styled-components";

export const Container = styled.div`
	margin-bottom: 10px;
`;

export const Label = styled.label`
	display: block;
`;

export const Error = styled.div`
	color: ${({ theme }) => theme.colors.danger};
`;
