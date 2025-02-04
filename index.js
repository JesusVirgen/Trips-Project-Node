import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//conect db
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));

//defie port
const port = process.env.PORT || 4000;

//hability PUG
app.set('view engine', 'pug');

app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.namePage = 'Agencia de viajes';
    next();
});

//add body parser for read the form data
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'));

//add router
app.use('/', router);

app.listen(port, () => {
    console.log(`Server successfully in port ${port}`)
})