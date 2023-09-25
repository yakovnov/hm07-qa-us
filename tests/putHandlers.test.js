// test for the status code
test('check that the response status is 200 OK', async () => {
	try {
		const response = await fetch(`https://7821890d-0171-48c8-a37d-3713f9117515.serverhub.tripleten-services.com/api/v1/products/7`);
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});




// test for body response
const requestBody = {
		"price": 175
}

test('checking if the rresponse body is as expected', async () => {
    try {
		const response = await fetch(`https://7821890d-0171-48c8-a37d-3713f9117515.serverhub.tripleten-services.com/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const responseBody = await response.json();
		expect(responseBody).toEqual({
			"ok": true
		});
	} catch (error) {
		console.error(error);
	}
});
