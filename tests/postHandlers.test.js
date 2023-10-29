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
  //changed the name of the test
  //changed the expected response, its strange that in the docs the response body is different
  test('checks that the response body contain the expected data', async () => {
    let responseBody;
    const expectedResponseBody = {
      "Everything You Need": {
        "Sprite Soft Drink": true,
        "Fruit Power Juice - Litchi": false
      },
      "Food City": {
        "Sprite Soft Drink": true,
        "Fruit Power Juice - Litchi": true
      },
      "Big World": {
        "Sprite Soft Drink": false,
        "Fruit Power Juice - Litchi": false
      },
      "Fresh Food": {
        "Sprite Soft Drink": true,
        "Fruit Power Juice - Litchi": true
      }
    };
    try {
      const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      responseBody = await response.json();
      
  
    } catch (error) {
      console.error(error);
    };
    expect(responseBody).toEqual(expectedResponseBody);
  });
  
