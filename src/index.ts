import express from 'express';
import api from './api/api';

const app = express();
const port = 3000;

app.use('/api', api);

app.listen(port, () => {
    console.log(`server running at localhost:${port}`);
});