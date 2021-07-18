const BASE_URL = "https://recruitment.ultimate.systems/to-do-lists";

export function getLists(token) {
	let bearer = "Bearer " + token;
	const request = fetch("https://recruitment.ultimate.systems/to-do-lists", {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: bearer,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.error(err);
		});
	return request;
}
