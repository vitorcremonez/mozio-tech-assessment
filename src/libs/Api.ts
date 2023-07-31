import axios from "axios";

const request = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default class Api {
	static async getPaths(cities: string[]) {
		const response = await request.request({
			method: "POST",
			url: "/api/distances",
			data: {
				cities,
			},
		});
		const distances = response.data.data;
		return distances;
	}

	static async getLocations(query: string) {
		const response = await request.request({
			method: "GET",
			url: "/api/cities",
			params: {
				search: query,
			},
		});
		const locations = response.data.data;
		return locations;
	}
}
