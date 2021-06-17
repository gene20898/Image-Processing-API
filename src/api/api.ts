import express from 'express';
import resize from './resize';

const api = express.Router();

api.get('/', (req, res) => {
  res.send('Api lists');
});

api.use('/resize', resize);

export default api;
