const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add response from post');
});

router.get('/getall', (req, res) => {
    res.send('getall response from post');    
});

router.get('/getbyid', (req, res) => {
    res.send('getbyid response from post');    
});

router.get('/update', (req, res) => {
    res.send('update response from post');    
});

router.get('/delete', (req, res) => {
    res.send('delete response from post');    
});

module.exports = router;