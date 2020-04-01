var express = require('express');
var router = express.Router();

var db = {};
var counter = -1;


router.get('/get/:id', function(req, res, next) {
    res.status(200).json(db[req.params.id]);
});

router.post('/create/item', function(req, res, next) {
    counter++;
    var body = req.body;
    body.id = counter;
    db[counter] = body;
    res.status(201).json(db[counter]);

});

router.patch('/update/:id', function(req, res, next) {
    var body = req.body;
    body.id = req.params.id;
    db[req.params.id] = body;
    res.status(200).json(db[req.params.id]);
});

router.delete('/delete/:id', function(req, res, next) {
    delete db[req.params.id];
    res.status(200).send();
});

router.post('/reset', function (req,res,next) {
    db = {}
    res.status(200).send();
});

module.exports = router;
