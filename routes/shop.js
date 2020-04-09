var express = require('express');
var router = express.Router();

var db = {};
var counter = -1;



router.get('/get/:id', function(req, res, next) {
    res.status(200).json(db[req.params.id]);
});
 

 /*
router.get('/get/:id', function(req, res, next) {
    if (req.params.id === "1"){
        res.status(200).json(db["0"]);
    } else {
        res.status(200).json(db[req.params.id]);
    }
});
*/

router.get('/health', function(req,res,next) {
    res.status(200).send("healthy");
})

router.post('/create/item', function(req, res, next) {
    counter++;
    var body = req.body;
    body.id = counter;
    db[counter] = body;
    res.status(201).json(db[counter]);

});

router.put('/update/:id', function(req, res, next) {
    var body = req.body;
    body.id = parseInt(req.params.id);
    db[req.params.id] = body;
    res.status(200).json(db[req.params.id]);
});

router.delete('/delete/:id', function(req, res, next) {
    if (db[req.params.id] !== undefined) {
        delete db[req.params.id]
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

router.post('/reset', function (req,res,next) {
    db = {}
    counter = -1
    res.status(200).send();
});

module.exports = router;
