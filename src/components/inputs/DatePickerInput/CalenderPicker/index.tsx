import { useOutsideClick } from "hooks";
import moment from "moment";
import React, { useMemo, useState } from "react";
import {
	BackButton,
	Body,
	Container,
	DateButton,
	Day,
	Days,
	Dropdown,
	DropdownItem,
	Header,
	NextButton,
	WeekDay,
	WeekDays,
} from "./styles";

interface CalenderPickerProps {
	date?: string;
	minimumDate?: string;
	maximumDate?: string;
	onChoose: (date: string) => any;
	onClose: () => any;
}

const CalenderPicker: React.FC<CalenderPickerProps> = ({
	date,
	minimumDate = moment(),
	maximumDate = moment().add(15, "years"),
	onChoose,
	onClose,
}) => {
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
	const calendarMonths = useMemo(() => {
		const months = [];
		const initialMonth = moment(selectedDate).startOf("year");
		for (let i = 0; i < 12; i++) {
			months.push(initialMonth.clone());
			initialMonth.add(1, "month");
		}
		const finalMonths = [];
		for (const month of months) {
			if (
				month.isSameOrAfter(moment(minimumDate).startOf("month")) &&
				month.isBefore(moment(maximumDate).endOf("month"))
			) {
				finalMonths.push(month);
			}
		}
		return finalMonths;
	}, [minimumDate, maximumDate, selectedDate]);
	const calendarYears = useMemo(() => {
		const years = [];
		const currentYear = moment()
			.year(Number(moment(minimumDate).format("YYYY")))
			.startOf("month");
		while (currentYear.isBefore(maximumDate)) {
			years.push(currentYear.clone());
			currentYear.add(1, "year");
		}
		return years;
	}, [minimumDate, maximumDate]);

	const containerRef = useOutsideClick(() => onClose());
	const monthsDropdownRef = useOutsideClick(() => setShowMonthPicker(false));
	const yearsDropdownRef = useOutsideClick(() => setShowYearPicker(false));

	return (
		<Container ref={(ref) => (containerRef.current = ref)}>
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

				<DateButton onClick={() => setShowMonthPicker(!showMonthPicker)}>
					{moment(selectedDate).format("MMM").toUpperCase()}
					{showMonthPicker && (
						<Dropdown ref={(ref) => (monthsDropdownRef.current = ref)}>
							{calendarMonths.map((calendarMonth) => {
								return (
									<DropdownItem
										key={calendarMonth.format()}
										onClick={() => {
											setSelectedDate(calendarMonth.format());
											setTimeout(() => setShowYearPicker(false), 100);
										}}
									>
										{calendarMonth.format("MMM").toUpperCase()}
									</DropdownItem>
								);
							})}
						</Dropdown>
					)}
				</DateButton>

				<DateButton onClick={() => setShowYearPicker(!showYearPicker)}>
					{moment(selectedDate).format("YYYY")}
					{showYearPicker && (
						<Dropdown ref={(ref) => (yearsDropdownRef.current = ref)}>
							{calendarYears.map((calendarYear) => (
								<DropdownItem
									key={calendarYear.format("YYYY")}
									onClick={() => {
										setSelectedDate(calendarYear.format());
										setTimeout(() => setShowYearPicker(false), 100);
									}}
								>
									{calendarYear.format("YYYY")}
								</DropdownItem>
							))}
						</Dropdown>
					)}
				</DateButton>

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
						const isOnTheRange =
							moment(day).isSameOrAfter(moment(minimumDate).startOf("day")) &&
							moment(day).isSameOrBefore(moment(maximumDate).endOf("day"));
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
								style={{
									opacity: isOnTheRange ? 1 : 0.25,
									pointerEvents: isOnTheRange ? "all" : "none",
									filter: isOnTheRange ? "none" : "blur(2px)",
								}}
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
