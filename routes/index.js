import express from 'express';
import { mainPage, aboutPage, tripsPage, testimonialsPage } from '../controllers/pagesController.js'

const router = express.Router();

router.get('/', mainPage);

router.get('/about', aboutPage);

router.get('/trips', tripsPage);

router.get('/testimonials', testimonialsPage);

export default router;