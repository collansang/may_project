const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { user_id, name, description, price, category, image_url } = req.body;
    try {
        await Product.create(user_id, name, description, price, category, image_url);
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};