const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { product_id, user_id, quantity } = req.body;
    try {
        await Order.create(product_id, user_id, quantity);
        res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};