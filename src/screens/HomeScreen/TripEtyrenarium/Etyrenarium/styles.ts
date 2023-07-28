import styled from "styled-components";

export const Row = styled.div`
	display: flex;
`;

export const Balloon = styled.div`
	border-radius: 6px;
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.secondary};
	padding: 10px 20px;
	max-width: 100px;
	display: inline-flex;
`;

export const LeftCol = styled.div`
	padding-top: 20px;
	text-align: right;
	flex: 1;
`;

export const MiddleCol = styled.div`
	width: 50px;
	position: relative;
`;

export const RightCol = styled.div`
	flex: 1;
	text-align: left;
`;
