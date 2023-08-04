import cities from "database/cities.json";
import { fakeProcessingDelay } from "libs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		await fakeProcessingDelay(800);
		const query = req.query.search as string;

		if (query.toLowerCase() === "fail") {
			throw new Error(`City "${query}" not found.`);
		}

		const filteredCities = cities
			.map(([city]) => city as string)
			.filter((city) => city.toLowerCase().includes(query.toLowerCase()))
			.slice(0, 10);

		return res.json({
			status: "success",
			data: filteredCities,
		});
	} catch (error: any) {
		return res.status(500).json({
			status: "error",
			message: error.message,
		});
	}
}
