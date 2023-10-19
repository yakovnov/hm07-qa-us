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
  
  test('checks that the response body contain the expected data after checking the availability of products with id=5 quantity=1 and id=4 quantity=5', async () => {
    let responseBody;
    const expectedResponseBody = {
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
  
