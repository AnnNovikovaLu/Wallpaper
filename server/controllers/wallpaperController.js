const { Wallpaper } = require('../models');

exports.searchByArticle = async (req, res) => {
  const { article } = req.params;
  const wallpaper = await Wallpaper.findOne({ where: { id_wallpaper: article } });
  wallpaper ? res.json(wallpaper) : res.status(404).json({ message: 'Не найдено' });
};

exports.sortByPrice = async (req, res) => {
  const wallpapers = await Wallpaper.findAll({ order: [['price', 'ASC']] });
  res.json(wallpapers);
};

exports.sortByMaterial = async (req, res) => {
  const { material } = req.query;
  const wallpapers = await Wallpaper.findAll({ where: { base_material: material } });
  res.json(wallpapers);
};