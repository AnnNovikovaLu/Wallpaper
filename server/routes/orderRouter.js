const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');


router.get('/', controller.getAllOrders);

module.exports = router;