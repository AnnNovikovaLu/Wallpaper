const { Delivery, Order } = require('../models');

exports.getAllDeliveries = async (req, res) => {
  const deliveries = await Delivery.findAll({ include: Order });
  res.json(deliveries);
};
