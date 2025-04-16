const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');

// Получить всех клиентов
router.get('/', controller.getAllClients);

module.exports = router;