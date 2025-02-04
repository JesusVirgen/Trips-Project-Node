import { Testimonial } from '../models/Testimonials.js';

const addtestimonial = async (req, res) => {
    
    //Valid data
    const { name, mail, message } = req.body;

    const errors = [];

    if(name.trim() === '') {
        errors.push({message: 'El nombre esta vacio'});
    }

    if(mail.trim() === '') {
        errors.push({message: 'El correo esta vacio'});
    }

    if(message.trim() === '') {
        errors.push({message: 'El mensaje esta vacio'});
    }

    if(errors.length > 0) {
        //consult testimonials
            const testimonials = await Testimonial.findAll();

        //Show errors in view
        res.render('testimonials', {
            page: 'Testimonials',
            errors,
            name,
            mail,
            message,
            testimonials
        })
    } else {
        try {
            await Testimonial.create({
                name,
                mail,
                message
            });

            res.redirect('/testimonials');
        } catch (error) {
            console.log(error)     
        }
    }
}

export {
    addtestimonial
}