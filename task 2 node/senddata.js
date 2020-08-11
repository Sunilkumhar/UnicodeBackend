const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000; 
app.listen(PORT , () => console.log( `Server starting at port ${PORT}`));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}))

global.cat = 'Any';
global.type = 'Any';

app.post('/', (req, res) => {
  // res.status(204).send();
  cat = req.body.cat
 
  type = req.body.type;
  // console.log(cat,type)
  
  axios.get(`https://sv443.net/jokeapi/v2/joke/${cat}?type=${type}&amount=2`)
  .then(function (response) {
    res.render('index', { data: response.data.jokes});
  })
  .catch(function (error) {
    console.log(error); 
  })
  
});

app.get('/', (req, res) => {
  axios.get(`https://sv443.net/jokeapi/v2/joke/${cat}?type=${type}&amount=2`)
  .then(function (response) {
    console.log(response.data.jokes);
    res.render('index', { data: response.data.jokes});
  })
  .catch(function (error) {
    console.log(error); 
  })
});


// console.log(cat,type)


