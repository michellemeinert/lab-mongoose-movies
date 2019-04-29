var express = require('express');
var router = express.Router();


const celebratiesRouter = require('./celebraties');



//  * '/celebraties'
router.use('/celebraties', celebratiesRouter);




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
