import { Trips } from "../models/Trips.js";
import { Testimonial } from "../models/Testimonials.js";


const mainPage = async (req, res)  => {

    const promiseDB = [];

    promiseDB.push(Trips.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));

    try {
        const result = await Promise.all( promiseDB ); 

        res.render('index', {
            page : 'Inicio',
            pageClass: 'home',
            trips: result[0],
            testimonials: result[1]
        }); 
    } catch (error) {
        console.log(error);
    }
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

const testimonialsPage = async (req, res)  => {
    
    try {
        const testimonials = await Testimonial.findAll();
        res.render('testimonials', {
            page : 'Testimonios',
            testimonials
        });
    } catch (error) {
        console.log(error);
    }
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