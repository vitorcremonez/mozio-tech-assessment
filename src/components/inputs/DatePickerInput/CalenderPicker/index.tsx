import moment from "moment";
import React, { useMemo, useState } from "react";
import {
	BackButton,
	Body,
	Container,
	Day,
	Days,
	Header,
	MonthButton,
	// MonthName,
	// Months,
	NextButton,
	WeekDay,
	WeekDays,
	// Year,
	// Years,
	YearButton,
} from "./styles";

interface CalenderPickerProps {
	date?: string;
	onChoose: (date: string) => any;
}

const CalenderPicker: React.FC<CalenderPickerProps> = ({ date, onChoose }) => {
	const [selectedDate, setSelectedDate] = useState(
		date
			? moment(date).startOf("month").format()
			: moment().startOf("month").format()
	);
	const [showMonthPicker, setShowMonthPicker] = useState(false);
	const [showYearPicker, setShowYearPicker] = useState(false);
	const calendarDays = useMemo(() => {
		const days = [];
		for (let i = 0; i < 42; i++) {
			const day = moment(selectedDate).day(0).add(i, "days").format();
			days.push(day);
		}
		return days;
	}, [selectedDate]);

	return (
		<Container>
			<Header>
				<BackButton
					onClick={() => {
						const nextMonth = moment(selectedDate)
							.subtract(1, "month")
							.format();
						setSelectedDate(nextMonth);
					}}
				/>

				<div style={{ flex: 1 }} />

				<MonthButton onClick={() => setShowMonthPicker(true)}>
					{moment(selectedDate).format("MMM").toUpperCase()}
				</MonthButton>
				{/* {showMonthPicker && (
					<Months>
						<MonthName onClick={() => setMonth(1)}>FEB</MonthName>
						<MonthName onClick={() => setMonth(1)}>MAR</MonthName>
						<MonthName onClick={() => setMonth(1)}>APR</MonthName>
						<MonthName onClick={() => setMonth(1)}>...</MonthName>
						<MonthName onClick={() => setMonth(1)}>DEC</MonthName>
					</Months>
				)} */}

				<YearButton onClick={() => setShowYearPicker(true)}>
					{moment(selectedDate).format("YYYY")}
				</YearButton>
				{/* {showYearPicker && (
					<Years>
						<Year onClick={() => setYear(2023)}>2023</Year>
						<Year onClick={() => setYear(2024)}>2024</Year>
					</Years>
				)} */}

				<div style={{ flex: 1 }} />

				<NextButton
					onClick={() => {
						const nextMonth = moment(selectedDate).add(1, "month").format();
						setSelectedDate(nextMonth);
					}}
				/>
			</Header>
			<Body>
				<WeekDays>
					{calendarDays.slice(0, 7).map((calendarDay) => (
						<WeekDay key={calendarDay}>
							{moment(calendarDay).format("dd")}
						</WeekDay>
					))}
				</WeekDays>
				<Days>
					{calendarDays.map((day, index) => {
						const dayNumber = moment(day).format("D");
						const isCurrentMonth =
							moment(day).format("M") === moment(selectedDate).format("M");
						const isSelected =
							moment(date).startOf("day").format() ===
							moment(day).startOf("day").format();
						return (
							<Day
								key={index}
								onClick={() => {
									const newDate = moment(day).format();
									onChoose(newDate);
									setSelectedDate(newDate);
								}}
								muted={!isCurrentMonth}
								selected={isSelected}
							>
								{dayNumber}
							</Day>
						);
					})}
				</Days>
			</Body>
		</Container>
	);
};

export default CalenderPicker;
