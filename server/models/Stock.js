const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    id_stock: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_wallpaper: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Wallpapers',  // Указываем на таблицу обоев (правильное имя модели - 'Wallpapers')
        key: 'id_wallpaper', // Ссылаемся на поле артикула в таблице обоев
      },
    },
    start_period: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finish_period: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    new_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'Stock',
    timestamps: false, // Нет полей createdAt / updatedAt
  });

  // Связь с моделью Wallpaper: одна акция может относиться к одному артикулу обоев
  Stock.associate = function (models) {
    Stock.belongsTo(models.Wallpaper, { foreignKey: 'id_wallpaper' });
  };

  return Stock;
};

