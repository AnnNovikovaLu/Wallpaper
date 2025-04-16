const express = require('express');
const router = express.Router();
const controller = require('../controllers/collectionController');

// Получить все коллекции
router.get('/', controller.getAllCollections);

// Получить все обои в коллекции по id коллекции
router.get('/:id/wallpapers', controller.getWallpapersInCollection);

module.exports = router;
