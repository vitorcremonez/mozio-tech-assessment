import cities from "database/cities.json";
import type { NextApiRequest, NextApiResponse } from "next";

function fakeProcessingDelay(ms: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, ms);
	});
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await fakeProcessingDelay(1000);
	const query = req.query.query as string;
	const filteredCities = cities
		.map(([city]) => city as string)
		.filter((city) => city.toLowerCase().includes(query.toLowerCase()))
		.slice(0, 10);

	return res.json({
		status: "success",
		data: filteredCities,
	});
}
