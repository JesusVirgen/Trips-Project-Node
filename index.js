import express from 'express';
import router from './routes/index.js';

const app = express();

//defie port
const port = process.env.PORT || 4000;

//hability PUG
app.set('view engine', 'pug');

//add router
app.use('/', router);

app.listen(port, () => {
    console.log(`Server successfully in port ${port}`)
})