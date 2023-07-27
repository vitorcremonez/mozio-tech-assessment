import { Button, Form } from "components";
import Card from "components/Card";
import RouteFields from "components/RouteFields";
import { DatePickerField, StepperField } from "components/fields";
import { Col, Row } from "react-grid-system";

export default function Home() {
	return (
		<>
			<div style={{ maxWidth: 750, margin: "auto" }}>
				<Form
					initialValues={{
						passengers: 0,
						date: "",
					}}
					onSubmit={(values) => console.log(values)}
				>
					<Card>
						<Row>
							<Col xs={12} md={8}>
								<RouteFields />
							</Col>
							<Col xs={12} md={4}>
								<StepperField
									name={"passengers"}
									label={"Passengers"}
									validate={(value) => {
										if (value < 1) {
											return "Select passengers";
										}
									}}
								/>
								<DatePickerField
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
