var express = require('express');
var app = express(); 

const lego = require('./lego.json');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
   title: 'Homepage',
   lego: lego.profiles
 });
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/profile', (req, res) => {
  const legos = lego.profiles.find((p) => p.id === req.query.id);
  res.render('profile', {
    title: `About ${legos.firstname} ${legos.lastname}`,
    legos,
  });
});

