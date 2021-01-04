import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`listening on ${PORT}..`);
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './home.html'));
});

app.post('/post', (req, res) => {
    res.send('post received');
});

app.delete('/delete', (req, res) => {
    res.send('delete received');
});