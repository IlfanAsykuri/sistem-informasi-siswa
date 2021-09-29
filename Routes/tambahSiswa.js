const express = require('express');
const router = express.Router();

router.get('/tambahsiswa', (req, res) => {
    res.render('tambahsiswa', {
        title: 'Halaman Tambah Siswa',
        layout: 'main-layout'
    })
});


module.exports = router;