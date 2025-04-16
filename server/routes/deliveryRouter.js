const express = require('express');
const router = express.Router();
const controller = require('../controllers/deliveryController');


router.get('/', controller.getAllDeliveries);

module.exports = router;