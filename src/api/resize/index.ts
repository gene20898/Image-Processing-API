import express from 'express';
import resize_img from '../../utilities/resize_tool';
import path from 'path'

const resize = express.Router();

resize.get('/', async (req, res) => {
  const fileName = req.query.fileName as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  try {
    const result = await resize_img(fileName, width, height);
    const outputPath = path.join(__dirname,"../../../",result)
    res.sendFile(outputPath);
  } catch (err) {
    res.send(err.message);
  }
});

export default resize;