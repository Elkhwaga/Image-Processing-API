import path from 'path';
import fs from 'fs';
import sharpImage from '../utilities/sharpimage';

describe('Check image processing', () => {
  let height = 300;
  let width = 300;
  it('If the file does not exist', async (): Promise<void> => {
    const filename = 'image';
    const outputPathImage: string = path.join(
      __dirname,
      '..',
      '..',
      'output',
      `${filename}_${width}_${height}.jpg`
    );
    const response = await sharpImage(filename, height, width);
    response.toFile(outputPathImage, (err: Error) => {
      expect(err.message).toEqual('Input file is missing');
    });
  });

  it('shoud create a resized image', async (): Promise<void> => {
    const filename = 'encenadaport';
    width = 500;
    height = 500;
    const bathPath: string = path.join(
      __dirname,
      '..',
      '..',
      'images',
      `${filename}.jpg`
    );
    const outputPathImage: string = path.join(
      __dirname,
      '..',
      '..',
      'output',
      `${filename}_${width}_${height}.jpg`
    );
    const response = await sharpImage(bathPath, height, width);
    await response.toFile(outputPathImage, async () => {
      const fileExisit = fs.existsSync(outputPathImage);
      expect(fileExisit).toEqual(true);
    });
  });
});
