import Api from "../../libs/Api";

describe("/api/cities endpoint", () => {
	it("should return cities based on empty search", async () => {
		const locations = await Api.getLocations("");
		expect(locations.length).toBeGreaterThan(1);
	});

	it("should return unique city based on search", async () => {
		const locations = await Api.getLocations("Paris");
		expect(locations.length).toBe(1);
		expect(locations[0]).toBe("Paris");
	});
});
