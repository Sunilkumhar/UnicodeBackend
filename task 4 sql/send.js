const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}))

var connection = mysql.createConnection({
  port:"3307",
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'my_db'
})

// connection.connect(function (err) {
//   if(err) throw err;
//   console.log('connected...');
// });  

app.get('/', (req, res) => {
  // console.log(123)
  res.render('index');
});
  
app.get('/users', function(req, res){
  const sql = 'SELECT * FROM user ORDER BY average DESC , name ASC'
  
  connection.query(sql, (err,rows,fileds) =>{
    if(err) throw err;
    res.render('users', {title:'sunil',items: rows});

  })
});


app.post('/users', function(req, res){
  // res.status(204).send();
  // console.log(req.body);
  const avg = (parseInt(req.body.maths)+parseInt(req.body.english))/2;
  
  var sql = "insert into user values(null,'"+req.body.name +"','"+req.body.maths +"','"+req.body.english +"',"+avg+")";
  connection.query(sql, (err) =>{
    if(err) throw err;
    // console.log(123)
    // res.render('index ', {title:'DATA saved'});
    
  })
  // connection.end();
  res.redirect('/users')
  // res.status(204).send();
  
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT , () => console.log( `Server starting at port ${PORT}`));
