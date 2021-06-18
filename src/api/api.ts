import express from 'express';
import resize from './resize';

const api = express.Router();

api.use('/resize', resize);

export default api;
