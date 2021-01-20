var express = require('express');
const { NotExtended } = require('http-errors');
var router = express.Router();
var axios = require('axios')

var express = require('express');
var router = express.Router();
var axios = require('axios')


var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTExMjIyMyIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJwcmkyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTEzOTk0NCwiZXhwIjoxNjExMTY4NzQ0fQ.dB7sC-jGsp4RHDgDdXU0Jzdsj2zL-o9dX-QCB9b6ETuRG_pbYtsbYpDphEyCteBC5-cwdRaQN7lZegk5VT_eKysdeyxlLvrBA3v4bMAX-Ir96WRE0PiKPAo_M02rOxC7pYiMcIVY7tOtDEttDDc-5-zk2LEiuCl9slVeMP3uEEu3Q4nQjnI9VtEWesGqg7Uy-6AxGDgXSjVRpVult6x9uEuItjym3wTDOFFthHuVd1G-zOLJSaBbzTPnpklVZPM4gSoVYXtTjvv89pqSvUhqrR6P1B3iq58puDQRGGB_c2PEcrHg-k3swlT_ANKMGsKh6xsqHGGzJqv5f734QWgVuQ"

/* GET list 1 class entite. */
router.get('/', (req, res) => {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + token)
    .then( data => res.render('entities', {entities:data.data}))
    .catch(error => res.render('error', {error:error}))
});

// get list second third ... class entite
router.get('/c/:code', (req,res)=>{
  const {code} = req.params;
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + code +'/descendencia?token=' + token)
    .then( list => {
      axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + code +'?token=' + token)
      .then(info => {
        res.render('classEntities', {entities:list.data, info: info.data})
      })
  })
    .catch(error => res.render('error', {error:error}))
})

// router.get('/tipologia/:id', function(req, res, next) {

//   axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+ req.params.id +'?info=completa&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
//     .then(dados => {
//       axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+ req.params.id +'/elementos?info=completa&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
//         .then(entidades => {
//           res.render('info-tipologia', { lista: dados.data, ents: entidades.data })
//         })
//         .catch(erro => {
//           res.render('error',{error: erro})
//         })
//     })
//     .catch(erro => {
//       res.render('error',{error: erro})
//     })
  
// });

// router.get('/entidades/:id', function(req, res, next) {
//   axios.get('http://clav-api.dglab.gov.pt/api/entidade/'+ req.params.id +'?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
//     .then(dados => {
//       res.render('info-entidade', { lista: dados.data})
//     })
//     .catch(erro => {
//       res.render('error',{error: erro})
//     })
  
// });


module.exports = router;

