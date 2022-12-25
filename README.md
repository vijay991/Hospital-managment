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

