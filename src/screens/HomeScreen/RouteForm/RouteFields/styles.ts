import styled from "styled-components";

export const Table = styled.table.attrs({
	cellSpacing: 0,
	cellPadding: 0,
})`
	width: 100%;
`;

export const Row = styled.tr``;

export const LeftColumn = styled.td`
	vertical-align: top;
	padding-top: 22px;
	height: 80px;
	width: 16px;
	box-sizing: border-box;
	position: relative;
	text-align: center;
`;

export const MiddleColumn = styled.td`
	padding: 0px 10px;
	vertical-align: top;
`;

export const RightColumn = styled.td`
	vertical-align: top;
	padding-top: 22px;
	width: 16px;
`;

export const VerticalLine = styled.div`
	border-left: 2px dotted #374151;
	left: calc(50% - 1px);
	position: absolute;
	height: 57px;
`;
