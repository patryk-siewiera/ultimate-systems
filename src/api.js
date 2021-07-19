const BASE_URL = "https://recruitment.ultimate.systems/";

export function registerUser(registrationData) {
	if (
		registrationData.username === undefined ||
		registrationData.password === undefined ||
		registrationData.email === undefined
	) {
		throw new Error({ err: "Error missing data", data: registrationData });
	}
	return fetch(BASE_URL + "auth/local/register", {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(registrationData),
	}).then((response) => {
		return response.json();
	});
}

export function updateList(id, nameList, updateListData, token) {
	const request = fetch(BASE_URL + "to-do-lists/" + id, {
		method: "PUT",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify({ name: nameList, task: updateListData }),
	}).then((response) => {
		return response.json();
	});

	return request;
}

export function createNewList(nameList, updateListData, token) {
	const request = fetch(BASE_URL + "to-do-lists/", {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify({ name: nameList, task: updateListData }),
	}).then((response) => {
		return response.json();
	});
	return request;
}

export function getLists(token) {
	let bearer = "Bearer " + token;
	const request = fetch(BASE_URL + "to-do-lists", {
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
			return err;
		});
	return request;
}
