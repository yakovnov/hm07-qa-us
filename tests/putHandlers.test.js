const config = require('../config');

// test for the status code
test('check that the response status is 200 OK', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`);
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});




// test for body response
const requestBody = {
		"price": 175
}

test('checking if the response body is ok:true', async () => {
	let responseBody;
  
	try {
	  const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	  });
  
	  responseBody = await response.json();
	} catch (error) {
	  console.error(error);
	}
	expect(responseBody).toEqual({
	  "ok": true
	});
  });
  
