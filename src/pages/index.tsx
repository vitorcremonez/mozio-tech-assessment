import { Button, Form } from "components";
import Card from "components/Card";
import { LocationPickerField, StepperField } from "components/fields";
import { DatePickerInput } from "components/inputs";
import { Col, Row } from "react-grid-system";

export default function Home() {
	return (
		<>
			<div style={{ maxWidth: 750, margin: "auto" }}>
				<Form
					initialValues={{
						passengers: 0,
					}}
					onSubmit={(values) => console.log(values)}
				>
					<Card>
						<Row>
							<Col xs={12} md={6}>
								{/* <RouteFields /> */}
								<LocationPickerField name={"origin"} label={"City of origin"} />
								<LocationPickerField
									name={"destinations[0]"}
									label={"City of destination"}
								/>
							</Col>
							<Col xs={12} md={6}>
								<StepperField name={"passengers"} label={"Passengers"} />
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
				</Form>
			</div>
		</>
	);
}
