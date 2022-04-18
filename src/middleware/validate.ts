import { Response, Request, NextFunction } from 'express';

function validate(req: Request, res: Response, next: NextFunction): void {
  //#region request query from url
  const filename = req.query.filename as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  //#endregion

  //#region validate query
  // Check to enter the image name, height and width
  if (!filename && !width && !height) {
    res
      .status(400)
      .send(
        '<h3>Please set a filename, width and height as parameters in the url</h3>'
      );
    return;
  }

  // Make sure that the width is present or not, and also if it is a number or not
  if (!width || isNaN(width)) {
    res
      .status(400)
      .send(
        '<h3>Please enter a valid a width number ==> in the following format 1 or greater than</h3>'
      );
    return;
  } else if (width && Number(width) <= 0) {
    res
      .status(400)
      .send(
        `<h3>Invalid "width" value: ${width} ==> Please enter a positive number</h3>`
      );
    return;
  }

  // Make sure that the height is present or not, and also if it is a number or not
  if (!height || isNaN(height)) {
    res
      .status(400)
      .send(
        '<h3>Please enter a valid a height number ==> in the following format 1 or greater than</h3>'
      );
    return;
  } else if (height && Number(height) <= 0) {
    res
      .status(400)
      .send(
        `<h3>Invalid "height" value: ${height} ==> Please enter a positive number</h3>`
      );
    return;
  }
  //#endregion

  next();
}

export default validate;
