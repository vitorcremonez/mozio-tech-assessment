import { Button, Form } from "components";
import { DatePickerField, StepperField } from "components/fields";
import { useCallback, useState } from "react";
import { Col, Row } from "react-grid-system";
import RouteFields from "./RouteFields";

interface RouteFormProps {
	onSubmit: (data: {
		route: string[];
		passengers: number;
		date: string;
	}) => any;
}

const RouteForm: React.FC<RouteFormProps> = ({ onSubmit }) => {
	const [keys, setKeys] = useState<string[]>([]);

	const handleSubmit = useCallback(
		async (values: any) => {
			const destinations = keys.map((key) => values.destinations[key]);
			const route = [values.origin, ...destinations];
			const passengers = values.passengers;
			const date = values.date;
			onSubmit({ route, passengers, date });
		},
		[keys, onSubmit]
	);

	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col xs={12} md={8}>
					<RouteFields onChangeDestinations={(keys) => setKeys(keys)} />
				</Col>
				<Col xs={12} md={4}>
					<Row style={{ marginLeft: 25, display: "inline-flex" }}>
						<Col xs={6} md={12} style={{ paddingRight: 50 }}>
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
						</Col>
						<Col xs={6} md={12}>
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
				</Col>
			</Row>
			<Row>
				<Col style={{ textAlign: "center" }}>
					<Button>Submit</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default RouteForm;
