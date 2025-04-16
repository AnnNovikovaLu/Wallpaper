const { Stock, Wallpaper } = require('../models');

// Получить все акции
exports.getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.findAll({
      include: [Wallpaper], // Включаем информацию об обоях, которые участвуют в акции
    });
    res.json(stocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении акций' });
  }
};

// Получить акцию по артикулу обоев
exports.getStockByWallpaper = async (req, res) => {
  const { id_wallpaper } = req.params;
  try {
    const stock = await Stock.findAll({
      where: { id_wallpaper: id_wallpaper },
      include: [Wallpaper], // Включаем информацию об обоях
    });

    if (!stock.length) {
      return res.status(404).json({ message: 'Акций для данного артикула не найдено' });
    }

    res.json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении акции для артикула' });
  }
};
