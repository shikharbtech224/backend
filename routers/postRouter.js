const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add response from post');
});

module.exports = router;