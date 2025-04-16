const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    id_collection: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_of_collection: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_of_release: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    number_of_items: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: 'Collection',
    timestamps: false,
  });

  Collection.associate = function(models) {
    // Связь с обоями: одна коллекция может содержать несколько обоев
    Collection.hasMany(models.Wallpaper, { foreignKey: 'id_collection' });
  };

  return Collection;
};
