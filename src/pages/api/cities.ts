import cities from "database/cities.json";
import { fakeProcessingDelay } from "libs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await fakeProcessingDelay(800);
	const query = req.query.search as string;
	const filteredCities = cities
		.map(([city]) => city as string)
		.filter((city) => city.toLowerCase().includes(query.toLowerCase()))
		.slice(0, 10);

	return res.json({
		status: "success",
		data: filteredCities,
	});
}
