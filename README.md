<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Healthcare API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        section {
            padding: 20px;
        }
        h1, h2 {
            color: #4CAF50;
        }
        pre, code {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            padding: 10px;
            display: block;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        ul {
            list-style: disc;
            padding-left: 20px;
        }
        li {
            margin: 5px 0;
        }
        footer {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
        }
    </style>
</head>
<body>

<header>
    <h1>Healthcare API</h1>
    <p>A simple Node.js API built with Express and MongoDB for managing healthcare services.</p>
</header>

<section>
    <h2>Features</h2>
    <ul>
        <li><strong>Add a Service:</strong> Create a new healthcare service with name, description, and price.</li>
        <li><strong>Get All Services:</strong> Retrieve a list of all available healthcare services.</li>
        <li><strong>Update a Service:</strong> Modify an existing service's details.</li>
        <li><strong>Delete a Service:</strong> Remove a service from the list.</li>
    </ul>
</section>

<section>
    <h2>Prerequisites</h2>
    <ul>
        <li><a href="https://nodejs.org/" target="_blank">Node.js</a> (v14 or later)</li>
        <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a> (local or cloud instance)</li>
        <li>A tool for testing API endpoints, e.g., <a href="https://www.postman.com/" target="_blank">Postman</a> or <a href="https://www.thunderclient.com/" target="_blank">Thunder Client</a>.</li>
    </ul>
</section>

<section>
    <h2>Installation</h2>
    <h3>1. Clone the Repository</h3>
    <pre><code>git clone https://github.com/username/healthcare-api.git
cd healthcare-api
</code></pre>

    <h3>2. Install Dependencies</h3>
    <pre><code>npm install</code></pre>

    <h3>3. Set Up Environment Variables</h3>
    <p>Create a <code>.env</code> file in the root directory and add your MongoDB connection string:</p>
    <pre><code>MONGO_URI=&lt;your_mongodb_connection_string&gt;</code></pre>

    <h3>4. Start the Server</h3>
    <pre><code>node app.js</code></pre>
    <p>The server will run on <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>
</section>

<section>
    <h2>API Endpoints</h2>
    <h3>1. Add a Service</h3>
    <p><strong>URL:</strong> POST <code>/api/services</code></p>
    <p><strong>Request Body:</strong></p>
    <pre><code>{
  "name": "General Checkup",
  "description": "Basic health checkup service",
  "price": 100
}</code></pre>
    <p><strong>Response:</strong></p>
    <pre><code>{
  "_id": "63f9b0...",
  "name": "General Checkup",
  "description": "Basic health checkup service",
  "price": 100,
  "__v": 0
}</code></pre>

    <h3>2. Get All Services</h3>
    <p><strong>URL:</strong> GET <code>/api/services</code></p>
    <p><strong>Response:</strong></p>
    <pre><code>[
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
]</code></pre>

    <h3>3. Update a Service</h3>
    <p><strong>URL:</strong> PUT <code>/api/services/:id</code></p>
    <p><strong>Request Body:</strong></p>
    <pre><code>{
  "name": "General Checkup - Updated",
  "price": 120
}</code></pre>
    <p><strong>Response:</strong></p>
    <pre><code>{
  "_id": "63f9b0...",
  "name": "General Checkup - Updated",
  "description": "Basic health checkup service",
  "price": 120
}</code></pre>

    <h3>4. Delete a Service</h3>
    <p><strong>URL:</strong> DELETE <code>/api/services/:id</code></p>
    <p><strong>Response:</strong></p>
    <pre><code>{
  "message": "Service deleted successfully"
}</code></pre>
</section>


</body>
</html>
