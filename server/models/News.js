const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define(
    "News",
    {
      id_news: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_wallpaper: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Wallpapers", // Указываем на таблицу обоев (имя модели должно быть 'Wallpapers')
          key: "id_wallpaper", // Ссылаемся на поле артикула в таблице обоев
        },
      },
      data_of_release: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "News",
      timestamps: false, // Нет полей createdAt / updatedAt
    }
  );

  // Связь с моделью Wallpaper: одна новинка может относиться к одному артикулу обоев
  News.associate = function (models) {
    News.belongsTo(models.Wallpaper, { foreignKey: "id_wallpaper" });
  };

  return News;
};
