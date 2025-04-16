const { Order, Client, Wallpaper } = require('../models');

exports.getAllOrders = async (req, res) => {
  const orders = await Order.findAll({ include: [Client, Wallpaper] });
  res.json(orders);
};
