const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add respponse from user');
});

// getall
// getbyid
// update
// delete

module.exports = router;