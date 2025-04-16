const express = require('express');
const router = express.Router();
const controller = require('../controllers/basketController');

// Получить все товары из корзины клиента
router.get('/:id', controller.getBasketByClient);

// Добавить товар в корзину
router.post('/', controller.addToBasket);

// Удалить товар из корзины
router.delete('/:id', controller.deleteFromBasket);

module.exports = router;