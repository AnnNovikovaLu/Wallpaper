const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Импортируем модели
const Wallpaper = require('./Wallpaper');
const Collection = require('./Collection');
const News = require('./News');
const Stock = require('./Stock');
const Client = require('./Client');  // Простой импорт модели
const Basket = require('./Basket');
const Order = require('./Order');

// Модели и их ассоциации
const models = {
  Wallpaper,
  Collection,
  News,
  Stock,
  Client,
  Basket,
  Order,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
