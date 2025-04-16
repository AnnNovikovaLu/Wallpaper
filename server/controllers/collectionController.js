const { Collection, Wallpaper } = require('../models');

// Получить все коллекции
exports.getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.findAll();
    res.json(collections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении коллекций' });
  }
};

// Получить обои в коллекции
exports.getWallpapersInCollection = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await Collection.findOne({
      where: { id_collection: id },
      include: [Wallpaper], // Включаем информацию о всех обоях в коллекции
    });

    if (!collection) {
      return res.status(404).json({ message: 'Коллекция не найдена' });
    }

    res.json(collection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении обоев коллекции' });
  }
};

