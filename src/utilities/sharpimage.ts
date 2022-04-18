import sharp from 'sharp';

export const sharpImage = async (
  imagePath: string,
  width: number,
  height: number
): Promise<sharp.Sharp> => {
  const image = await sharp(imagePath);
  const finalImage = await image.resize(width, height);
  return finalImage;
};

export default sharpImage;
