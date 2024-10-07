const ForumPost = require('../models/ForumPost.js');

exports.createPost = async (req, res) => {
    const { user_id, title, content } = req.body;
    try {
        await ForumPost.create(user_id, title, content);
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await ForumPost.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};