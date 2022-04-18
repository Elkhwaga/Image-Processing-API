import supertest from 'supertest';
import image from '../index';

const request: supertest.SuperTest<supertest.Test> = supertest(image);

//#region Test image processing
describe('Test validate image', (): void => {
  //#region constants
  const filename = 'encenadaport';
  let width = 300;
  let height = 300;
  //#endregion

  // Check to enter the image name, height and width
  it('Check to enter the image name, height and width', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=&width=&height=');
    expect(response.text).toBe(
      '<h3>Please set a filename, width and height as parameters in the url</h3>'
    );
  });

  // Make sure to enter the width value for the image
  it('Make sure to enter the width value for the image', async (): Promise<void> => {
    const response = await request.get(
      `/api/images?filename=${filename}&width=`
    );
    expect(response.text).toBe(
      '<h3>Please enter a valid a width number ==> in the following format 1 or greater than</h3>'
    );
  });

  // Make sure to include a positive number, the width of the image
  it('Make sure to include a positive number, the width of the image', async (): Promise<void> => {
    width = -100;
    const response = await request.get(
      `/api/images?filename=${filename}&width=${width}`
    );
    expect(response.text).toBe(
      `<h3>Invalid "width" value: ${width} ==> Please enter a positive number</h3>`
    );
  });

  // Make sure to enter the height value for the image
  it('Please enter a valid a height number', async (): Promise<void> => {
    const response = await request.get(
      `/api/images?filename=${filename}&width=${(width = 300)}&height=`
    );
    expect(response.text).toBe(
      '<h3>Please enter a valid a height number ==> in the following format 1 or greater than</h3>'
    );
  });

  // Make sure to include a positive number, the height of the image
  it('Please enter a valid height positive number', async (): Promise<void> => {
    height = -100;
    width = 300;
    const response = await request.get(
      `/api/images?filename=${filename}&width=${width}&height=${height}`
    );
    expect(response.text).toBe(
      `<h3>Invalid "height" value: ${height} ==> Please enter a positive number</h3>`
    );
  });
});
//#region
