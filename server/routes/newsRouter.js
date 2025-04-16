const express = require('express');
const router = express.Router();
const controller = require('../controllers/newsController');

// Получить все новинки
router.get('/', controller.getAllNews);

// Получить новинки по артикулу обоев
router.get('/:id_wallpaper', controller.getNewsByWallpaper);

module.exports = router;
