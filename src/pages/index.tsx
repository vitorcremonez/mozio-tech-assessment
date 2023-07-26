import { Button } from "components";
import Card from "components/Card";
import {
	DatePickerInput,
	LocationPickerInput,
	StepperInput,
} from "components/inputs";
import { Col, Row } from "react-grid-system";

export default function Home() {
	return (
		<>
			<div style={{ maxWidth: 750, margin: "auto" }}>
				<form>
					<Card>
						<Row>
							<Col xs={12} md={6}>
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
							</Col>
							<Col xs={12} md={6}>
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
							</Col>
						</Row>
						<Row>
							<Col style={{ textAlign: "center" }}>
								<Button>Submit</Button>
							</Col>
						</Row>
					</Card>
				</form>
			</div>
		</>
	);
}
