const express = require('express');
const { createPost, getAllPosts } = require('../controllers/forumcontroller');
const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPosts);

module.exports = router;