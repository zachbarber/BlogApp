const router = require('express').Router();

const { BlogPostService } = require('../services/BlogPostService');

const blogPostService = new BlogPostService();

router.post('/', async (req, res) => {
    const data = await blogPostService.create(req.body);
    res.send(data);
});

router.get('/', async (req,res) => {
    const data = await blogPostService.read(req.query.id);
    res.json(data);
})

// add router.get for blogpost read and a put update

module.exports = router;