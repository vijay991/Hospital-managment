# Hospital-managment

This API allows users to fetch details of psychiatrists and their patients for a hospital. It is built using [Express.js](https://expressjs.com/), a popular web application framework for Node.js.

## Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (comes with Node.js) installed on your machine
- A MySQL database with the required tables and data

## Installation

1. Clone the repository:

`git clone https://github.com/your-username/Hospital-managment.git`

2. Install the dependencies:

`cd Hospital-managment`
`npm install`

3. open db.js file from Hospital-managment/models folder and add your mysql database details
4. Start the API server:
   `npm start`
   Server will run on localhost:3000
   

## Endpoints

- `GET /api/psychiatrists`: Returns the details of all the psychiatrists, their count along with IDs and patient details for the specified hospital.

   - ## Parameters

   - `hospitalId`: ID of the hospital (required)

   ## Responses

   - `200 Success`:
     - `hospitalName`: Name of the hospital
     - `psychiatristCount`: Number of psychiatrists in the hospital
     - `TotalpatientCount`: Total number of patients of all the psychiatrists in the hospital
     - `psychiatristDetails`: Array of objects containing the details of each psychiatrist
       - `id`: ID of the psychiatrist
       - `name`: Name of the psychiatrist
       - `patientCount`: Number of patients of the psychiatrist
   - `404 Not Found`: Hospital with the specified ID is not found in the database
   - `500 Internal Server Error`: An error occurred while processing the request

   ## Example

   GET /api/psychiatrists
   ```

   {
   "hospitalName": "City Hospital",
   "psychiatristCount": 2,
   "TotalpatientCount": 13,
   "psychiatristDetails": [
      {
         "id": 1,
         "name": "Dr. John Smith",
         "patientCount": 8
      },
      {
         "id": 2,
         "name": "Dr. Jane Doe",
         "patientCount": 5
      }
   ]
   ```
- `GET /api/patients`: register new patient in system.
   - ## RequestBody
   - `name`:
   - `address`:
   - `email`:
   - `phone`:
   - `password`:
   - `patientPhoto`:

   ## Responses
   - `200 Success`:
      - Patient registered successfully.
   - `400`:
      - Invalid request.
   - `500`:
      - An error occurred while processing the request.

## Library/Packages
   1. ## bcrypt
   - bcrypt is a password hashing library that is widely used for securely storing hashed passwords in a database. It includes features such as salting to protect against dictionary attacks and can be used for authentication, password reset functionality, and as an additional layer of security in combination with other authentication methods.
   2. ## body-parser
   - The body-parser is a middleware that is used to parse the request body of an HTTP request. It is often used in web applications to process incoming request data and make it available to the application in a usable format.
   3. ## express-validator
   - express-validator is a middleware that is used to validate and sanitize data in an Express.js application. It provides a set of validation and sanitization functions that can be used to check the correctness and security of data before it is processed by the application.
   4. ## multer
   - Multer is a middleware that is used to handle HTTP requests that contain enctype "multipart/form-data," which is used for file uploads. It is designed to work with the Express.js framework and allows you to handle file uploads in your Node.js application.
   5. ## nodemon
   - Nodemon is a utility that automatically restarts a Node.js application when file changes are detected. It is often used during development to save time by eliminating the need to manually stop and start the server each time a change is made to the code.
  
   


