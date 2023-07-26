import { LocationPickerInput } from "components";

export default function Home() {
	return (
		<>
			<LocationPickerInput
				label={"City of origin"}
				onChange={() => alert("ok")}
				error={"Required field"}
			/>
			<br />
			<LocationPickerInput
				label={"City of destination"}
				onChange={() => alert("ok")}
				error={"Required field"}
			/>
		</>
	);
}
