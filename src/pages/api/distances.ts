import citiesData from "database/cities.json";
import { calculateHaversineDistance, fakeProcessingDelay } from "libs";
import type { NextApiRequest, NextApiResponse } from "next";
import { City, Path } from "types";

function findCity(cityName: string): City {
	const cityAData = citiesData.find(([city]) => city === cityName);
	if (!cityAData) {
		throw new Error(`City ${cityName} not found!`);
	}
	return {
		name: cityAData[0] as string,
		lat: cityAData[1] as number,
		lon: cityAData[2] as number,
	};
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		await fakeProcessingDelay(1500);
		const cities = req.body.cities as string[];
		const distances: Path[] = [];

		if (cities.includes("Dijon")) {
			throw new Error("Oops! Something went wrong!");
		}

		for (let i = 0; i < cities.length - 1; i++) {
			const cityA = findCity(cities[i]);
			const cityB = findCity(cities[i + 1]);
			const distance = calculateHaversineDistance(cityA, cityB);
			distances.push({
				from: cityA.name,
				to: cityB.name,
				distance: Number(distance.toFixed(2)),
			});
		}

		return res.json({
			status: "success",
			data: distances,
		});
	} catch (error: any) {
		return res.status(400).json({
			status: "error",
			message: error.message,
		});
	}
}
