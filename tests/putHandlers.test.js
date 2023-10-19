const config = require('../config');

// test for the status code
test('check that the response status is 200 OK', async () => {
  let actualStatus; 
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});





// test for body response
const requestBody = {
        "price": 175
}

test('checking if the response body is ok:true', async () => {
    let responseBody;
  const expectedResponseBody = {
    "ok": true
  }
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
    expect(responseBody).toEqual(expectedResponseBody);
  });
  
