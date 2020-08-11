const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const sortArray = require('sort-array')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {
  // console.log(123)
  res.render('index');

});
var details = [];

app.post('/users', function(req, res){
  // console.log(req.body);
  const avg = (parseInt(req.body.maths)+parseInt(req.body.english))/2;
  // console.log(details.length);

  if(req.body.name != '' && req.body.maths != '' && req.body.english != ''){
    details.push({
      name : req.body.name,
      maths : req.body.maths,
      english : req.body.english,
      'avg' : avg
    })
  }
  sortArray(details, {
    by: ['avg','name'],
    order: 'desc'
  })

  // details.sort(function(a, b){
  //   console.log(123);
  //   return a.maths - b.maths
  // });

  console.log(details);
  res.render('users' ,{title : "sunil",  details});

});


const PORT = process.env.PORT || 5000; 
app.listen(PORT , () => console.log( `Server starting at port ${PORT}`));
