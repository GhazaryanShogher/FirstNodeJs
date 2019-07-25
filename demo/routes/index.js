var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name/:age/:gender', function(req, res, next) {
  let response = {
    name:req.params.name,
    age:req.params.age,
    gender:req.params.gender
  }
  res.send(response);
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.send(req.body);
});


module.exports = router;
