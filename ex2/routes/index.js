var express = require('express');
const { NotExtended } = require('http-errors');
var router = express.Router();
var axios = require('axios')

var express = require('express');
var router = express.Router();
var axios = require('axios')


var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1ODU0OSwiZXhwIjoxNjExMTg3MzQ5fQ.ntgJmLbKuSJs0zinS4hxE2vEUt-77SZrFW0OrALEKa37XC83dAmUFzkAs8Jfl2bheQMgvS0Ig2wlNeW8Zkz3DiQFC670yYmWyqylw6haEKd80Fr0KqVaGdvFP2_E1yJVTJTWR3gaWJTpeJnm9cjGw4tQsHV2b2Oz1g_c4RD8cEXYA0PTcm5WxM9qw24CwlD3UV_8YI31KJMf0j8Yk_wDzwiOtw2353lWa3XUbqQcNSWrReheA8wBqxcdKFBG9Lua06WXLpWBe89dRut_OxCQGLEFaar81oido6qLZ48Y3x0tCV68YTRd8rgfFWSL13fv18nYF2mvA1bJi52HUQNvIA"

//GET home page
router.get('/', (req, res) => {
  res.render('home')
});

// GET list 1 class entite.
router.get('/c1', (req, res) => {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + token)
    .then( data => res.render('entities', {entities:data.data}))
    .catch(error => res.render('error', {error:error}))
});

// GET all the index terms with their information fields are listed in a 
//table: term, class id to which it belongs and class title 
//(the id and title must be a link to the class page);
router.get('/term', (req, res) => {
  axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=' + token)
    .then( data => res.render('term', {terms:data.data}))
    .catch(error => res.render('error', {error:error}))
});

// get list of class with code
router.get('/c/:code', (req,res)=>{
  const {code} = req.params;
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + code +'?token=' + token)
    .then( data => res.render('classEntities', {data:data.data}))
    .catch(error => res.render('error', {error:error}))
})


module.exports = router;

