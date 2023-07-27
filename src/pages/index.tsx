import { Button, Form } from "components";
import Card from "components/Card";
import RouteFields from "components/RouteFields";
import { DatePickerField, StepperField } from "components/fields";
import { useCallback, useState } from "react";
import { Col, Row } from "react-grid-system";

export default function Home() {
	const [keys, setKeys] = useState<string[]>([]);

	const handleSubmit = useCallback(
		(values: any) => {
			const destinations = keys.map((key) => values.destinations[key]);
			const route = [values.origin, ...destinations];
			const passengers = values.passengers;
			const date = values.date;
			console.log({
				route,
				passengers,
				date,
			});
		},
		[keys]
	);

	return (
		<>
			<div style={{ maxWidth: 750, margin: "auto" }}>
				<Form onSubmit={handleSubmit}>
					<Card>
						<Row>
							<Col xs={12} md={8}>
								<RouteFields onChangeDestinations={(keys) => setKeys(keys)} />
							</Col>
							<Col xs={12} md={4}>
								<StepperField
									defaultValue={0}
									name={"passengers"}
									label={"Passengers"}
									validate={(value) => {
										if (value < 1) {
											return "Select passengers";
										}
									}}
								/>
								<DatePickerField
									defaultValue={""}
									name={"date"}
									label={"Date"}
									validate={(value) => {
										if (!value) {
											return "Select date";
										}
									}}
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
