import styled from "styled-components";

export const Table = styled.table`
	width: 100%;
`;

export const Row = styled.tr``;

export const LeftColumn = styled.td`
	width: 16px;
	margin-right: 10px;
	height: 100px;
	box-sizing: border-box;
	position: relative;
	text-align: center;
`;

export const MiddleColumn = styled.td`
	padding-left: 10px;
`;

export const VerticalLine = styled.div`
	border-left: 2px dotted #374151;
	left: calc(50% - 1px);
	position: absolute;
	height: 78px;
`;

export const RightColumn = styled.td`
	padding-left: 10px;
`;
