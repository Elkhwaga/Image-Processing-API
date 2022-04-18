import express, { Router } from 'express';
import validate from '../middleware/validate';
import imageProcessing from '../middleware/imageprocess';

// directory to check if exists
const routes: Router = express.Router();

routes.get('/images', validate, imageProcessing);

export default routes;
