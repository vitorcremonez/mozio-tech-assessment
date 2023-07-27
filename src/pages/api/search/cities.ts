import cities from "database/cities.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const query = req.query.query as string;
	const filteredCities = cities
		.map(([city]) => city as string)
		.filter((city) => city.toLowerCase().includes(query.toLowerCase()));

	return res.json({
		status: "success",
		data: filteredCities,
	});
}
