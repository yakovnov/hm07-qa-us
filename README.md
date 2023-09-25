# Sprint 7 project made by Yasha Novgorodsky
The project was about building an aoutomated tests for checking the url requests: POST, PUT, GET, DELETE
During this project I've used the VS Code app for making a Java Script code, and for using the terminal a well
Almost for all 8 test that I created i used the "test()" method which is a javascrip method that checks for a match the async await keywords are used for asynchronous javascript functions which are basically operations that need time to complete so it allows for other code to run while whatever needs time takes that time to do what it needs to do
I used the fetch method with async await so it allows to continue doing other tests while there is some error caused in the previous one
I used Jest's expect function to assert that the response status code is 200 and that the response body contained by expected data 
Also I parse the response body as JSON assuming it's in JSON format using response.json()
The expect(responseBody).toBe(expectedValue) was used to check if the responseBody object or value strictly matches the expectedValue. Strict equality means that both the type and value must be the same for the assertion to pass
The expect(responseBody).toEqual(expectedValue) was used to check if the responseBody object or value deeply matches the expectedValue. Deep equality means that not only the top-level object but also all nested objects and their properties are compared

All the tests were running by command "npx jest" from the hm07-qa-us folder