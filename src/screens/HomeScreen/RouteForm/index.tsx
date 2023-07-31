import { Button, Form } from "components";
import { DatePickerField, StepperField } from "components/fields";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import RouteFields from "./RouteFields";

interface RouteFormProps {
	onSubmit: (data: {
		route: string[];
		passengers: number;
		date: string;
	}) => any;
	loading: boolean;
}

const RouteForm: React.FC<RouteFormProps> = ({ onSubmit, loading }) => {
	const [keys, setKeys] = useState<string[]>([]);
	const router = useRouter();
	const [defaultValues, setDefaultValues] = useState<any>();

	useEffect(() => {
		if (router.isReady) {
			setDefaultValues({
				cities:
					typeof router.query.cities === "string"
						? router.query.cities?.split(",")
						: [],
				passengers: Number(router.query.passengers) || 0,
				date: typeof router.query.date === "string" ? router.query.date : "",
			});
		}
	}, [router]);

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

	if (!defaultValues) {
		return null;
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col xs={12} md={8}>
					<RouteFields
						onChangeDestinations={(keys) => setKeys(keys)}
						cities={defaultValues.cities}
					/>
				</Col>
				<Col xs={12} md={4}>
					<Row style={{ marginLeft: 25, display: "inline-flex" }}>
						<Col xs={6} md={12} style={{ paddingRight: 50 }}>
							<StepperField
								defaultValue={defaultValues.passengers}
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
								defaultValue={defaultValues.date}
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
					<Button loading={loading}>Submit</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default RouteForm;
