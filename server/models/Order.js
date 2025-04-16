const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id_order: {
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
  },
    order_data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  final_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'Order',
  timestamps: false,
});

module.exports = Order;
