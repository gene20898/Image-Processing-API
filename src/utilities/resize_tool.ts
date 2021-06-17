import sharp from 'sharp';

const resize_img = async (fileName: string, width: number, height: number) => {
  const inputPath = `assets/full/${fileName}.jpg`;
  const outputPath = `assets/thumb/${fileName}-resized-${width}x${height}.jpg`;

  try {
    const result = await sharp(inputPath)
      .resize(width, height)
      .jpeg()
      .toFile(outputPath);
    return result;
  } catch (err) {
    throw err;
  }
};

export default resize_img;
