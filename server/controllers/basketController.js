const { Basket, Wallpaper, Client } = require('../models');

// Получить все товары из корзины клиента
exports.getBasketByClient = async (req, res) => {
  const { id } = req.params;
  try {
    const basket = await Basket.findAll({
      where: { id_client: id },
      include: [Wallpaper] // Включаем информацию о товаре (обоях)
    });
    res.json(basket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении корзины' });
  }
};

// Добавить товар в корзину
exports.addToBasket = async (req, res) => {
  const { id_client, id_wallpaper, count } = req.body;

  try {
    // Проверяем, есть ли уже товар в корзине
    const existingItem = await Basket.findOne({
      where: { id_client, id_wallpaper }
    });

    if (existingItem) {
      // Если товар уже есть в корзине, увеличиваем количество
      existingItem.count += count;
      await existingItem.save();
      return res.status(200).json({ message: 'Количество товара обновлено', existingItem });
    }

    // Если товара нет в корзине, добавляем новый
    const newItem = await Basket.create({ id_client, id_wallpaper, count });
    res.status(201).json({ message: 'Товар добавлен в корзину', newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при добавлении товара в корзину' });
  }
};

// Удалить товар из корзины
exports.deleteFromBasket = async (req, res) => {
  const { id } = req.params;

  try {
    // Ищем товар в корзине по id
    const itemToDelete = await Basket.findByPk(id);
    if (!itemToDelete) {
      return res.status(404).json({ message: 'Товар не найден в корзине' });
    }

    // Удаляем товар из корзины
    await itemToDelete.destroy();
    res.status(200).json({ message: 'Товар успешно удален из корзины' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при удалении товара из корзины' });
  }
};
