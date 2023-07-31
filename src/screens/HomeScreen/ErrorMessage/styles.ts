import styled from "styled-components";

export const Container = styled.div`
	text-align: center;
`;

export const Message = styled.p`
	margin-top: 100px;
	margin-bottom: 100px;
	font-weight: bold;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.secondary};
`;
