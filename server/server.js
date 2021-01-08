import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


const blogRoutes = require('./src/controllers/BlogPostController');

const app = express();

const PORT = process.env.PORT | 35565;


app.use(express.static(path.join(__dirname,"../blog-app/build")));

app.use(bodyParser.json());

app.use('/blogpost', blogRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../blog-app/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}..`);
});