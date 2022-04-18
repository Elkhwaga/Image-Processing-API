import fs from 'fs';
import path from 'path';

// Function to create folder to keep images
const createDir = async (): Promise<void> => {
  const outputPath: string = path.resolve(__dirname, '..', '..', 'output');
  try {
    fs.promises
      .access(outputPath, fs.constants.F_OK)
      .catch(async (): Promise<void> => {
        await fs.mkdir(outputPath, { recursive: true }, (err) => {
          if (err) console.log(err);
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export default createDir;
