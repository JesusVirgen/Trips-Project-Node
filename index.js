import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res)  => {
    res.send('Inicio');
})

app.get('/about', (req, res)  => {
    res.send('Nosotros');
})

app.get('/contact', (req, res)  => {
    res.send('Contacto');
})

app.listen(port, () => {
    console.log(`Server successfully in port ${port}`)
})