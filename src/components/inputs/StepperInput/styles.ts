import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundInput};
	border: 1px solid ${({ theme }) => theme.colors.muted};
	padding: 5px;
	border-radius: 6px;
	font-size: 12px;
	display: flex;
	display: inline-flex;
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	width: 25px;
	height: 25px;
	border-radius: 4px;
	border: none;
	color: white;
	cursor: pointer;
	&:hover {
		background-color: #a5b1e8; // TODO:
	}
`;

export const Quantity = styled.div`
	width: 30px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
