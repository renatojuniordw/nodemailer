const express = require('express');
const router = express.Router();

const nodemailerService = require('./../services/nodemailerService');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/send', (req, res, next) => {
    nodemailerService(req.body);
    res.send(200);
    next();
});

module.exports = router;