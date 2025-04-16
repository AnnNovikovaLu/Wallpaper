const express = require('express');
const sequelize = require('./config/database');
const { Wallpaper, Collection, Stock, News, Client, Basket,Order} = require('./models');

const app = express();
app.use(express.json());

app.use('/wallpapers', require('./routes/wallpaperRoutes'));
app.use('/collections', require('./routes/collectionRoutes'));
app.use('/news', require('./routes/newsRoutes'));
app.use('/stocks', require('./routes/stockRoutes'));
app.use('/orders', require('./routes/orderRoutes'));
app.use('/deliveries', require('./routes/deliveryRoutes'));
app.use('/basket', require('./routes/basketRoutes'));

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Подключение к базе данных успешно");
    await sequelize.sync({ force: false });
    app.listen(3000, () => console.log('Сервер работает на http://localhost:3000'));
  } catch (error) {
    console.error('Ошибка при запуске сервера:', error);
  }
};

start();