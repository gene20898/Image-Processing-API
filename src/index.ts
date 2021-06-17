import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req,res) => {
    res.send('Api works fine');
});

app.listen(port, () => {
    console.log(`server running at localhost:${port}`);
});