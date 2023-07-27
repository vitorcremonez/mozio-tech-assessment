import axios from "axios";
import { Button, Form } from "components";
import Card from "components/Card";
import RouteFields from "components/RouteFields";
import { DatePickerField, StepperField } from "components/fields";
import { useCallback, useState } from "react";
import { Col, Row } from "react-grid-system";

async function calculateDistances(cities: string[]) {
	const response = await axios.request({
		method: "POST",
		url: "http://localhost:3000/api/distance-measurer", // TODO:
		data: {
			cities,
		},
	});
	const distances = response.data.data;
	return distances;
}

export default function Home() {
	const [keys, setKeys] = useState<string[]>([]);

	const handleSubmit = useCallback(
		async (values: any) => {
			const destinations = keys.map((key) => values.destinations[key]);
			const route = [values.origin, ...destinations];
			const passengers = values.passengers;
			const date = values.date;
			const distances = await calculateDistances(route);
			console.log({
				distances,
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
