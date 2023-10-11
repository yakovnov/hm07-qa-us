const config = require('../config');

// test for the status code
test('check that the response status is 200 OK', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`);
        expect(response.status).toBe(200);
    } catch (error) {
        console.error(error);
    }
    expect(response.status).toBe(200);
});




// test for body response

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
  
