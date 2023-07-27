import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: #ffffff;
	border: 1px solid #e5e7eb;
	padding: 5px;
	border-radius: 6px;
	font-size: 12px;
	display: flex;
	display: inline-flex;
`;

export const Button = styled.button`
	background-color: #c7d1f4;
	width: 25px;
	height: 25px;
	border-radius: 4px;
	border: none;
	color: white;
	cursor: pointer;
	&:hover {
		background-color: #a5b1e8;
	}
`;

export const Quantity = styled.div`
	width: 30px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
