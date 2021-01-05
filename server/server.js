import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
// const blogPostController = require('./src/controllers/BlogPostController');
import { BlogPostController } from './src/controllers/BlogPostController';
import { BlogPostService } from './src/services/BlogPostService';

const blogPostService = new BlogPostService();

const blogPostController = new BlogPostController(blogPostService);

const app = express();

const PORT = process.env.PORT | 35565;

app.use(cors());

app.use(express.static(path.join(__dirname,"../blog-app/build")));

app.use(bodyParser.json());

app.use('/blogPost', blogPostController.routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../blog-app/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}..`);
});