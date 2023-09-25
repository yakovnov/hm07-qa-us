// test for the status code
test('check that the response status is 200 OK', async () => {
	try {
		const response = await fetch(`https://d8151e2e-e591-46f9-afda-706d385a2442.serverhub.tripleten-services.com/api/v1/warehouses`);
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

// test for the response body
test('check that the response body contains the expected data', async () => {
	try { 

		const response = await fetch(`https://d8151e2e-e591-46f9-afda-706d385a2442.serverhub.tripleten-services.com/api/v1/warehouses`);

		const responseBody = await response.json();

		expect(responseBody).toEqual([
			{
				   "name": "Everything You Need",
				   "workingHours": {
					   "start": 7,
					   "end": 23
				   }
			   },
			{
				   "name": "Fresh food",
				   "workingHours": {
					   "start": 8,
					   "end": 23
				   }
			   },
			{
				   "name": "Food City",
				   "workingHours": {
					   "start": 8,
					   "end": 21
				   }
			   },
			{
				   "name": "Big World",
				   "workingHours": {
					   "start": 5,
					   "end": 20
				   }
			   }
			]);

	} catch (error) {
		console.error(error);
	}
});
