var express = require('express');

var router = express.Router();

router.get('/', (req, res)=>{
  console.log('hit the route')
  res.render('home')
  console.log({'message':'hit the home route.'});

});

router.get('/algos', (req, res)=>{

});

module.exports = router;
