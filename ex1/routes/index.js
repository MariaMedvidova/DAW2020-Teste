var express = require('express');
const { NotExtended } = require('http-errors');
var router = express.Router();

var Baptism = require('../controllers/baptism')

// /api/batismos?ano=YYYY Returns the list of 
//baptisms performed in the year YYYY;
router.get('/batismos', (req,res)=>{
  if(req.query.ano){
    Baptism.listByYear(req.query.ano)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
  }
  Baptism.list()
    .then(data => res.render('baptisms', {baptisms: data}, console.log(data)))
    .catch(err => res.render('error', {error: err}))
})

//Returns only a list with the names of individuals baptized alphabetically;
router.get('/batismos/batisado', (req,res)=>{
  Baptism.listBaptized()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

// return list of parents
router.get('/batismos/progenitores', (req,res)=>{
  Baptism.listParents()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

// Returns a list of pairs, year and number of baptisms in that year.
router.get('/batismos/stats', (req,res)=>{
  Baptism.listnumberPerYear()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

router.get('/batismos/:id', (req,res)=>{
  const { id } = req.params;
  Baptism.lookUpById(id)
        .then(data => res.render('baptism', { baptism: data}, console.log(data)))
        .catch(err => res.render('error', { error: err }))

})

module.exports = router;
