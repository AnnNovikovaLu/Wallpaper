const express = require('express');
const router = express.Router();
const controller = require('../controllers/wallpaperController');

router.get('/search/:article', controller.searchByArticle);
router.get('/sort/price', controller.sortByPrice);
router.get('/sort/material', controller.sortByMaterial);

module.exports = router;
