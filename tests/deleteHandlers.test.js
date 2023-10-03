//  DELETE Test 1 Status Code
test('check that the response status is 200 OK', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	} catch (error) {
		console.error(error);
	}
	expect(response.status).toBe(200);
});




//  DELETE Test 2 Response body

test('checks that the response body after deleting a kit is as ok: true', async () => {
	let responseBody;
  
	try {
	  const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
		method: 'DELETE',
	  });
	  responseBody = await response.json(); 
	} catch (error) {
	  console.error(error);
	}
  
	
	expect(responseBody).toEqual({
	  "ok": true
	});
  });
  
