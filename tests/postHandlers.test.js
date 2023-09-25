// test for the status code
test('check that the response status is 200 OK', async () => {
	try {
		const response = await fetch(`https://f4b65519-5107-49fb-8ea3-08749740887a.serverhub.tripleten-services.com/api/v1/warehouses/check`);
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});



// test for body response

const requestBody = {
    "products": [
		{
			"id": 5,
			"quantity": 1
		},
		{
			"id": 4,
			"quantity": 5
		}
	]
}

test('', async () => {
    try {
		const response = await fetch(`https://f4b65519-5107-49fb-8ea3-08749740887a.serverhub.tripleten-services.com/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		const responseBody = await response.json();

		expect(responseBody).toEqual({
			"Everything You Need": {
				"Sprite Soft Drink": true,
				"Gourmet Popcorn Kernels": true,
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": false
			},
			"Food City": {
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": true,
				"Sprite Soft Drink": true,
				"Gourmet Popcorn Kernels": false
			},
			"Big World": {
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": true,
				"Sprite Soft Drink": false,
				"Gourmet Popcorn Kernels": false
			},
			"Fresh food": {
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": true,
				"Sprite Soft Drink": true,
				"Gourmet Popcorn Kernels": false
			}
		});

	} catch (error) {
		console.error(error);
	}
});
