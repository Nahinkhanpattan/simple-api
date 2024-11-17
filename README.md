Healthcare API
A simple Node.js API built with Express and MongoDB for managing healthcare services.

Features
Add a Service: Create a new healthcare service with name, description, and price.
Get All Services: Retrieve a list of all available healthcare services.
Update a Service: Modify an existing service's details.
Delete a Service: Remove a service from the list.

Prerequisites
Node.js (v14 or later)
MongoDB (local or cloud instance)
A tool for testing API endpoints, e.g., Postman or Thunder Client.

Installation:

Clone the Repository:
git clone https://github.com/username/healthcare-api.git
cd healthcare-api

Install Dependencies:

npm install

Start the Server:

node app.js

The server will run on http://localhost:3000.

API Endpoints:

1. Add a Service
URL: POST /api/services
Request Body:
{
  "name": "General Checkup",
  "description": "Basic health checkup service",
  "price": 100
}
Response:
{
  "_id": "63f9b0...",
  "name": "General Checkup",
  "description": "Basic health checkup service",
  "price": 100,
  "__v": 0
}

2. Get All Services
URL: GET /api/services
Response:
[
  {
    "_id": "63f9b0...",
    "name": "General Checkup",
    "description": "Basic health checkup service",
    "price": 100
  },
  {
    "_id": "63f9b1...",
    "name": "Dental Cleaning",
    "description": "Professional dental cleaning service",
    "price": 150
  }
]

3. Update a Service
URL: PUT /api/services/:id
Request Body:
{
  "name": "General Checkup - Updated",
  "price": 120
}
Response:
{
  "_id": "63f9b0...",
  "name": "General Checkup - Updated",
  "description": "Basic health checkup service",
  "price": 120
}

4. Delete a Service
URL: DELETE /api/services/:id
Response:
{
  "message": "Service deleted successfully"
}

Notes:
Use tools like Postman to test the API endpoints.
Ensure MongoDB is running before starting the server.