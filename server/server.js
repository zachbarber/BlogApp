import express from 'express';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 35565;

app.listen(PORT, () => {
    console.log(`listening on ${PORT}..`);
});

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname,'./home.html'));
});