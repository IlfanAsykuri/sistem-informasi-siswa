const { render } = require('ejs');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('Public'));
app.use(bodyParser.urlencoded({extended: false}));

//gunakan ejs engine 
app.set('view engine', 'ejs');
app.use(expressLayouts);

//panggil data
const tambahsiswa = require('./Routes/tambahSiswa');


app.get('/', (req, res) => {
    res.render('index', {
        layout: 'main-layout',
        title: 'Sistem Tambah Siswa|SMKNJ'
    });
});

app.get('/detail', (req, res) => {
    res.render('detail', {
        title: 'Halaman Detail',
        layout: 'main-layout'
    });
});

app.use(tambahsiswa);

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Halaman About',
        layout: 'main-layout'
    });
});



app.listen(port, () => {
    console.log(`Monggo Siswa App | listening at http://localhost:${port}`);
});

