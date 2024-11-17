const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

router.post('/services', serviceController.addService);
router.get('/services', serviceController.getAllServices);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;
