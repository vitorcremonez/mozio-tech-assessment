import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	padding: 20px;
	box-sizing: border-box;
	box-shadow: 0px 2px 10px -5px #00000099;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.backgroundInput};
	border-radius: ${({ theme }) => theme.sizing.borderRadius}px;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
`;

export const BackButton = styled(IoArrowBackCircle).attrs({ size: 20 })`
	margin-left: 5px;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
	&:active {
		opacity: 0.9;
	}
`;

export const MonthButton = styled.div`
	flex: 1;
`;

export const Months = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.colors.backgroundInput};
`;

export const MonthName = styled.div``;

export const YearButton = styled.div`
	flex: 1;
`;

export const Years = styled.div`
	position: absolute;
`;

export const Year = styled.div``;

export const NextButton = styled(IoArrowForwardCircle).attrs({ size: 20 })`
	margin-right: 5px;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
	&:active {
		opacity: 0.9;
	}
`;

export const Body = styled.div``;

export const WeekDays = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 8px;
	margin-top: 15px;
	margin-bottom: 10px;
`;

export const WeekDay = styled.div`
	font-weight: bold;
	flex: 1;
	text-align: center;
`;

export const Days = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 8px;
`;

interface DayProps {
	muted?: boolean;
	selected?: boolean;
}
export const Day = styled.div<DayProps>`
	color: ${({ muted, selected, theme }) => {
		if (muted && !selected) {
			return theme.colors.muted;
		}
		if (selected) {
			return "white";
		}
		return theme.colors.font;
	}};
	background-color: ${({ muted, selected, theme }) => {
		if (selected) {
			return theme.colors.secondary;
		}
		return "none";
	}};
	min-width: 20px;
	min-height: 20px;
	border-radius: 20px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
	}
	&:active {
		opacity: 0.8;
	}
`;
