import citiesData from "database/cities.json";
import calculateHaversineDistance from "libs/calculateHaversineDistance";
import type { NextApiRequest, NextApiResponse } from "next";
import Path from "types/Path";

interface City {
	name: string;
	lat: number;
	lon: number;
}

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
	const cities = req.body.cities as string[];
	const distances: Path[] = [];

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
}
