import express from 'express';
import { 
    mainPage, 
    aboutPage, 
    tripsPage, 
    testimonialsPage,
    tripsDetailPage
} from '../controllers/pagesController.js'

import {
    addtestimonial
} from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', mainPage);

router.get('/about', aboutPage);

router.get('/trips', tripsPage);

router.get('/trips/:slug', tripsDetailPage)

router.get('/testimonials', testimonialsPage);
router.post('/testimonials', addtestimonial);

export default router;