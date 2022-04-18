import path from 'path';
import fs from 'fs';
import { Response, Request } from 'express';
import sharpImage from '../utilities/sharpimage';
import createDir from './createdir';

const imageProcessing = async (req: Request, res: Response): Promise<void> => {
  //#region request query from url
  const { filename, width, height } = req.query;
  const QFilename: string = filename as unknown as string;
  const QWidth = Number(width);
  const QHeight = Number(height);
  //#endregion

  //#region paths directry and image
  const basePath: string = path.resolve(
    __dirname,
    '..',
    '..',
    'images',
    `${QFilename}.jpg`
  );
  const outputPath: string = path.resolve(__dirname, '..', '..', 'output');
  const outputPathImage: string = path.resolve(
    __dirname,
    '..',
    '..',
    'output',
    `${QFilename}_${QWidth}_${QHeight}.jpg`
  );
  console.log('basePath' + basePath);
  console.log('outputPathImage' + outputPathImage);
  console.log('outputPath' + outputPath);
  //#endregion

  // Create Directory
  createDir();

  //#region send cached file
  // send cached file
  if (fs.existsSync(outputPathImage)) {
    res.sendFile(outputPathImage);
  } else {
    const response = await sharpImage(basePath, QWidth, QHeight);
    response.toFile(outputPathImage, (err: Error) => {
      if (err) {
        res.status(403).send({
          feild: 'not found image',
          message: err.message
        });
        // console.log(err);
      } else {
        res.sendFile(outputPathImage);
      }
    });
  }
  //#endregion
};

export default imageProcessing;
