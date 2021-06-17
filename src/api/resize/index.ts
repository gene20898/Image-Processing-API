import express from 'express';
import resize_img from '../../utilities/resize_tool';

const resize = express.Router();

resize.get('/', (req, res) => {
  res.send('this will resize img');
});

export default resize;
