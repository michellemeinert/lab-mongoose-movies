const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const celebratiesRouter = require('./celebraties');

router.use('/celebraties', celebratiesRouter);
/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Express' });
});

module.exports = router;
