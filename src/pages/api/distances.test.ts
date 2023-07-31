import Api from "../../libs/Api";

describe("/api/distances endpoint", () => {
	it("should return paths based on cities list", async () => {
		const paths = await Api.getPaths(["Paris", "Lyon"]);
		expect(paths[0].from).toBe("Paris");
		expect(paths[0].to).toBe("Lyon");
		expect(paths[0].distance).toBe(391.49);
	});

	it("should trigger error if city is dijon", async () => {
		await expect(Api.getPaths(["Paris", "Dijon"])).rejects.toThrow();
	});
});
