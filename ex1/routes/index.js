var express = require('express');
const { NotExtended } = require('http-errors');
var router = express.Router();

var Baptism = require('../controllers/baptism')


router.get('/batismos', (req,res)=>{
  Baptism.list()
    .then(data => res.render('baptisms', {baptisms: data}, console.log(data)))
    .catch(err => res.render('error', {error: err}))
})

router.get('/batismos/batisado', (req,res)=>{
  const { id } = req.params;
  Baptism.lookUpById(id)
        .then(data => res.render('baptism', { baptism: data}, console.log(data)))
        .catch(err => res.render('error', { error: err }))

})

router.get('/batismos/:id', (req,res)=>{
  const { id } = req.params;
  Baptism.lookUpById(id)
        .then(data => res.render('baptism', { baptism: data}, console.log(data)))
        .catch(err => res.render('error', { error: err }))

})

//Returns the list of movies only with the "title", and "year" fields;

/*GET / api / movies? By = actor
Returns the list of works grouped by actor, 
that is, returns a list of actors in which each 
actor is associated with a list of films 
(put only the id and title of the film);*/

//GET / api / films? By = genero - Returns the list of films grouped by genre, 
//that is, it returns a list of genres in which each genre is associated with a 
//list of films (put only the id and title of the film);
router.get('/movies', function(req, res) {
  if(req.query.by == "actor"){
    Movie.listActorMovie()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
  }
  else if(req.query.by == "genero"){
    Movie.listMovieGenre()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
 }
 else{
  Movie.list()
  .then(data => res.render('movies', {movies: data}, console.log(data)))
  .catch(err => res.render('error', {error: err}))
 }
});

//Returns the complete information of a movie (consider for id the id you generated "f1", "f2", ... "fn";
router.get('/movies/:id', (req,res)=>{
  const { id } = req.params;
  Movie.lookUpByMyId(id)
        .then(data => res.render('movie', { movie: data}, console.log(data)))
        .catch(err => res.render('error', { error: err }))
})

//Returns only a list with the names of the actors, without repetition and ordered alphabetically;
router.get('/actors', (req,res)=>{
  Movie.listOfActors()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

//Returns a list of films with the following fields: id, title, number of participating actors.
router.get('/filmesQuantAtor', (req, res)=>{
  Movie.listWithNumberActors()
  .then(data => res.jsonp(data))
  .catch(error => res.status(500).jsonp(error))
})

module.exports = router;
