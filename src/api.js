const BASE_URL = "https://recruitment.ultimate.systems/to-do-lists";

export function getLists(token) {
	let bearer = "Bearer " + token;
	fetch("https://recruitment.ultimate.systems/to-do-lists", {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: bearer,
		},
	})
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.error(err);
		});
}
