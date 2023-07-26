import {
	DatePickerInput,
	LocationPickerInput,
	StepperInput,
} from "components/inputs";

export default function Home() {
	return (
		<>
			<LocationPickerInput
				value={""}
				label={"City of origin"}
				onChange={(value) => console.log({ value })}
				error={"You must choose the city of origin"}
			/>
			<LocationPickerInput
				value={""}
				label={"City of destination"}
				onChange={(value) => console.log({ value })}
				error={"Oops! Failed to search with this keyword."}
			/>
			<StepperInput
				value={0}
				label={"Passengers"}
				onChange={(quantity) => console.log({ quantity })}
				error={"Select passengers"}
			/>
			<DatePickerInput
				value={"2020-01-01 00:00:00"}
				label={"Date"}
				onChange={() => {}}
				error={"Select date"}
			/>
		</>
	);
}
