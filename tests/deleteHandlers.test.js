// test for the status code
test('check that the response status is 200 OK', async () => {
	try {
		const response = await fetch(`https://f4b65519-5107-49fb-8ea3-08749740887a.serverhub.tripleten-services.com/api/v1/kits/7`);
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});




// test for body response

test('the response body after deleting a kit is as expected', async () => {
    try {
		const response = await fetch(`https://f4b65519-5107-49fb-8ea3-08749740887a.serverhub.tripleten-services.com/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const responseBody = await response.json();
		expect(responseBody).toEqual({
			"ok": true
		}
		);
	} catch (error) {
		console.error(error);
	}
});
