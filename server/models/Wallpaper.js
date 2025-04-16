module.exports = (sequelize, DataTypes) => {
    const Wallpaper = sequelize.define('Wallpaper', {
      id_wallpaper: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      base_material: {
        type: DataTypes.STRING,
        allowNull: false
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      id_collection: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      data_of_acceptance: {
        type: DataTypes.DATE,
        allowNull: false
      },
      style_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      photo: {
        type: DataTypes.STRING, // Хранит URL или путь к изображению
        allowNull: true
      }
    });
  
    Wallpaper.associate = function(models) {
      // Связи
      Wallpaper.belongsTo(models.Collection, { foreignKey: 'id_collection' });
      Wallpaper.hasMany(models.News, { foreignKey: 'id_wallpaper' });
      Wallpaper.hasMany(models.Stock, { foreignKey: 'id_wallpaper' });
      Wallpaper.hasMany(models.Order, { foreignKey: 'id_wallpaper' });
      Wallpaper.hasMany(models.Basket, { foreignKey: 'id_wallpaper' });
    };
  
    return Wallpaper;
  };
  
  