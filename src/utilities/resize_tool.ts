import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const resize_img = async (fileName: string, width: number, height: number) => {
  const inputPath = `assets/full/${fileName}.jpg`;
  const outputPath = path.join(__dirname,"../../../",`assets/thumb/${fileName}-resized-${width}x${height}.jpg`);
  if(fs.existsSync(outputPath)){
    return outputPath;
  }else{
    await sharp(inputPath)
      .resize(width, height)
      .jpeg()
      .toFile(outputPath);
    return outputPath;
  }
};

export default resize_img;