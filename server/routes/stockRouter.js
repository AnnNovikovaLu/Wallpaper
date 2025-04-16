const express = require('express');
const router = express.Router();
const controller = require('../controllers/stockController');

// Получить все акции
router.get('/', controller.getAllStocks);

// Получить акции по артикулу обоев
router.get('/:id_wallpaper', controller.getStockByWallpaper);

module.exports = router;
