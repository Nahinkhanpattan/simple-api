const Service = require('../models/Service');

// Add a new service
exports.addService = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const newService = new Service({ name, description, price });
        await newService.save();
        res.status(201).json({ message: 'Service added successfully', service: newService });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a service
exports.updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedService = await Service.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json({ message: 'Service updated successfully', service: updatedService });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a service
exports.deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await Service.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
