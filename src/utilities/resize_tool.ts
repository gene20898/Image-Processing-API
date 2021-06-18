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

  if (fs.existsSync(path.resolve(__dirname,outputPath))) {
    console.log("cache img");
    return outputPath;
  } else {
    try{
      await sharp(inputPath).resize(width, height).jpeg().toFile(outputPath);
      return outputPath;
    }catch(err){
      throw err;
    }
  }
};

export default resize_img;
