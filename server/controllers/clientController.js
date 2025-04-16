const { Client } = require('../models');

exports.getAllClients = async (req, res) => {
  const clients = await Client.findAll();
  res.json(clients);
};
