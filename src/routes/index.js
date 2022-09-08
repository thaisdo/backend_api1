const express = require('express');

const router = express.Router(); // router = middleware do express

router.get('/', function(req, res, next) {
    res.send('API de Produto');
});

module.exports = router;
