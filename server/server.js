import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

const blogroutes = require('./src/controllers/BlogPostController');


const app = express();

const PORT = process.env.PORT | 35564;

app.use(cors());

app.use(express.static(path.join(__dirname,"../blog-app/build")));

app.use(bodyParser.json());

app.use('/blogpost', blogroutes);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../blog-app/build/index.html'));
// });

app.listen(PORT, () => {
    console.log(`listening on ${PORT}..`);
});