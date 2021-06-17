import express from 'express';

const resize = express.Router();

resize.get('/', (req,res) => {
    res.send('this will resize img');
});

export default resize;