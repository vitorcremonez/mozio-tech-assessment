const EARTH_RADIUS_KM = 6371;

// FIXME: isolate this interface
interface City {
	name: string;
	lat: number;
	lon: number;
}

function toRadians(degrees: number) {
	return degrees * (Math.PI / 180);
}

export default function calculateHaversineDistance(cityA: City, cityB: City) {
	const dLat = toRadians(cityB.lat - cityA.lat);
	const dLon = toRadians(cityB.lon - cityA.lon);

	const lat1 = toRadians(cityA.lat);
	const lat2 = toRadians(cityB.lat);

	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return EARTH_RADIUS_KM * c;
}
