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



// test for the response body
test('check that the response body contains the expected data', async () => {
  let responseBody;
  const actualResponseBody = [
      {
          "name": "Everything You Need",
          "workingHours": {
              "start": 7,
              "end": 23
          }
      },
      {
          "name": "Fresh Food",
          "workingHours": {
              "start": 8,
              "end": 23
              // changed from "Fresh food" to "Fresh Food", hope i get you right 
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
  ];

  try {
      const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
      responseBody = await response.json();
  } catch (error) {
      console.error(error);
  }

  expect(responseBody).toEqual(actualResponseBody);
});

  
