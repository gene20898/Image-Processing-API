import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const resize_img = async (
  fileName: string,
  width: number,
  height: number
): Promise<string> => {
  const inputPath = `assets/full/${fileName}.jpg`;
  const outputPath = `assets/thumb/${fileName}-resized-${width}x${height}.jpg`;

  if (fs.existsSync(path.join(__dirname, '../../', outputPath))) {
    console.log('retrieved from cached image');
    return outputPath;
  } else {
    await sharp(inputPath).resize(width, height).jpeg().toFile(outputPath);
    console.log('generated new image');
    return outputPath;
  }
};

export default resize_img;
