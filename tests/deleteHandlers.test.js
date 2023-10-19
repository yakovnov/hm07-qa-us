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

test('checks that the response body after deleting a kit is as ok: true', async () => {
    let responseBody; 
    const actualResponseBody = {
      "ok": true
    }
    try {
      const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
        method: 'DELETE',
      });
      responseBody = await response.json(); 
    } catch (error) {
      console.error(error);
    }
  
    expect(responseBody).toEqual(actualResponseBody);
  });
  
