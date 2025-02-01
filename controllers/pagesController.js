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
        trips
    });
}

const testimonialsPage = (req, res)  => {
    res.render('testimonials', {
        page : 'Testimonios'
    });
}

const tripsDetailPage = async (req, res)  => {
    const { slug } = req.params

    try {
        const tripResult = await Trips.findOne({ where: { slug }})

        res.render('trip', {
            page: 'Información Viaje',
            tripResult
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    mainPage,
    aboutPage,
    tripsPage,
    testimonialsPage,
    tripsDetailPage
}