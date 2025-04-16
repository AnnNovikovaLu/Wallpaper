const { News, Wallpaper } = require('../models');

// Получить все новинки
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.findAll({
      include: [Wallpaper], // Включаем информацию об обоях, которые являются новинками
    });

    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении новинок' });
  }
};

// Получить новинки по артикулу (если необходимо)
exports.getNewsByWallpaper = async (req, res) => {
  const { id_wallpaper } = req.params;
  try {
    const news = await News.findAll({
      where: { id_wallpaper: id_wallpaper },
      include: [Wallpaper], // Включаем информацию о конкретных обоях
    });

    if (!news.length) {
      return res.status(404).json({ message: 'Новинки для данного артикула не найдены' });
    }

    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении новинок по артикулу' });
  }
};
