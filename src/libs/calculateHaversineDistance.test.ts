import calculateHaversineDistance from "./calculateHaversineDistance";

describe("Haversine Distance", () => {
	it("should calculate the distance between City A to City B", async () => {
		const cityA = {
			name: "City A",
			lat: 10,
			lon: 10,
		};
		const cityB = {
			name: "City B",
			lat: 20,
			lon: 20,
		};
		const distance = calculateHaversineDistance(cityA, cityB);
		expect(distance).toBe(1544.7575610296099);
	});

	it("should calculate the distance between Paris to Marseille", async () => {
		const cityA = {
			name: "Paris",
			lat: 48.856614,
			lon: 2.352222,
		};
		const cityB = {
			name: "Marseille",
			lat: 43.296482,
			lon: 5.36978,
		};
		const distance = calculateHaversineDistance(cityA, cityB);
		expect(distance).toBe(660.4805742037298);
	});
});
