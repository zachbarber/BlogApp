const router = require('express').Router();

const { BlogPostService } = require('../services/BlogPostService');

const blogPostService = new BlogPostService();

router.post('/', async (req, res) => {
    const data = await blogPostService.create(req.body);
    res.send(data);
});

router.get('/', async (req, res) => {
    res.send('FUCK');
});

module.exports = router;