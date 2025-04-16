const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Wallpaper = require('./Wallpaper'); // Импортируем модель Wallpaper
const Client = require('./Client'); // Импортируем модель Client

const Basket = sequelize.define('Basket', {
  id_basket: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_client: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_wallpaper: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'Basket',
  timestamps: false,
});

// Определение связей
Basket.belongsTo(Client, { foreignKey: 'id_client' }); // Каждая корзина привязана к клиенту
Basket.belongsTo(Wallpaper, { foreignKey: 'id_wallpaper' }); // Каждая корзина привязана к обоям

module.exports = Basket;
