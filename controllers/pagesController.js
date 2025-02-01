import { Trips } from "../models/Trips.js";

const mainPage = (req, res)  => {
    res.render('index', {
        page : 'Inicio'
    });
}

const aboutPage = (req, res)  => {
    res.render('about', {
        page : 'Nosotros'
    });
}

const tripsPage = async (req, res)  => {
    const trips = await Trips.findAll();

    res.render('trips', {
        page : 'Próximos Viajes',
        trips,
    });
}

const testimonialsPage = (req, res)  => {
    res.render('testimonials', {
        page : 'Testimonios'
    });
}

export {
    mainPage,
    aboutPage,
    tripsPage,
    testimonialsPage
}