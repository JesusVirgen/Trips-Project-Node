import express from 'express';

const router = express.Router();

router.get('/', (req, res)  => {
    res.render('index', {
        page : 'Inicio'
    });
});

router.get('/about', (req, res)  => {
    res.render('about', {
        page : 'Nosotros'
    });
});

router.get('/trips', (req, res)  => {
    res.render('trips', {
        page : 'Viajes'
    });
});

router.get('/testimonials', (req, res)  => {
    res.render('testimonials', {
        page : 'Testimonios'
    });
});

export default router;