import { LocationPickerInput } from "components";

export default function Home() {
	return (
		<>
			<LocationPickerInput
				label={"City of origin"}
				onChange={() => alert("ok")}
				error={"You must choose the city of origin"}
			/>
			<br />
			<LocationPickerInput
				label={"City of destination"}
				onChange={() => alert("ok")}
				error={"Oops! Failed to search with this keyword."}
			/>
		</>
	);
}
