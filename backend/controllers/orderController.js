const Order = require('../models/Order');
const Item = require('../models/Item');

exports.createOrder = async (req, res) => {
  const { items } = req.body;
  let total = 0;
  for (let orderItem of items) {
    const item = await Item.findById(orderItem.item);
    if (!item || item.quantity < orderItem.quantity) {
      return res.status(400).json({ error: 'Insufficient stock' });
    }
    total += item.price * orderItem.quantity;
    item.quantity -= orderItem.quantity;
    await item.save();
  }
  try {
    const order = new Order({ items, total, user: req.user.id });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
