const express = require('express');
var mongoose=require('mongoose');
var config=require('./config/config');
var save=require('./routes/save');
var getdata=require('./routes/getdata');
var updatedata=require('./routes/update');
const bodyParser=require('body-parser');
var morgan = require('morgan');

var passport = require('passport')

var config = require('./config/database');

mongoose.connect(config.database);

//var api = require('./routes/api');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
var cors = require('cors');
app.use(cors());



app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.use('/save',save);
app.use('/getdata',getdata);
app.use('/updatedata',updatedata)
// app.post('/quotes', (req, res) => {
//   console.log('Hellooooooooooooooooo!')
// })

// app.post('/quotes', (req, res) => {
//   console.log(req.body)
// })

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
