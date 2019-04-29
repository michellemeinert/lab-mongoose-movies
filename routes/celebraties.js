var express = require('express');
var router = express.Router();
const Celebraty = require('.././models/celebraties')


// GET '/celebraties'
router.get('/', (req, res, next)=> {
  console.log('i am here', Celebraty)
  Celebraty.find({})
    .then ( (allCelebraties) => {res.render('./celebraties/index', {allCelebraties})})
    .catch((err)=> console.log(err))
})

router.get('/celebraties/:id', (req, res, next)=>{
  
})

module.exports = router;