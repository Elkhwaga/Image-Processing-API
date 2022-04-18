import express, { Application, Request, Response } from 'express';
import image from './routes';

const app: Application = express();
const port = 3000;

// routes image
app.use('/api', image);

app.get('/', (req: Request, res: Response): void => {
  // You can look at the processed photos
  res.send(
    '<h1 style="text-align: center">image processing api</h1><p>view images:<ul><li><a href="/api/images?filename=encenadaport&width=300&height=300">encenadaport</a></li><li><a href="/api/images?filename=fjord&width=300&height=300">fjord</a></li><li><a href="/api/images?filename=icelandwaterfall&width=300&height=300">icelandwaterfall</a></li></ul></p>'
  );
});

// listen server
app.listen(port, (): void => {
  console.log(`Server is running on port : ${port}`);
});

export default app;
