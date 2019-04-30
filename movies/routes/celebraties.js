const express = require('express');
const router = express.Router();
const Celebraty = require('.././models/celebraties')


// GET '/celebraties'
router.get('/', (req, res, next)=> {
  // console.log('i am here', Celebraty)
  Celebraty.find({})
    .then ( (allCelebraties) => {res.render('./celebraties/index', {allCelebraties})})
    .catch((err)=> console.log(err))
})

router.get('/new', (req, res, next)=>{
  res.render('./celebraties/new')
})

router.get('/:id', (req, res, next)=>{
  const {id} = req.params;
  
  Celebraty.findById(id)
 // .populate('celebraty')
  .then( (celebraty) => res.render('./celebraties/show', {celebraty}))
  .catch( (err)=> console.log(err))
})

router.post('/:id/delete', (req, res, next) => {
  const {id} = req.params;
  Celebraty.findByIdAndRemove({id})
  .then(() => {
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err);
  });
});

router.post('/celebraties', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  const celebrity = { name, occupation, catchphrase };
  Celebrity.create(celebrity)
  .then(result => {
    console.log(result);
    res.redirect('/');
  })
  .catch(err => console.log(err));
});




module.exports = router;