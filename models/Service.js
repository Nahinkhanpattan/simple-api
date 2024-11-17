const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Service name is required'],
    },
    description: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative'],
    },
});

module.exports = mongoose.model('Service', ServiceSchema);
