const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wallpaper_shop', 'postgres', '1111', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
