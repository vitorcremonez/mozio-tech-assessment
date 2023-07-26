import { LocationPickerInput, StepperInput } from "components/inputs";

export default function Home() {
	return (
		<>
			<LocationPickerInput
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
		</>
	);
}
