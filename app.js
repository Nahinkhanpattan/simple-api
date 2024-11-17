const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/services');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', serviceRoutes);

// MongoDB connection
const MONGO_URI = 'mongodb://localhost:27017/healthcare';
mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
