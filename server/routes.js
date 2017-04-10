var helpers = require('./routeHelpers');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/orderPrice', helpers.orderPrice);
app.post('/orderDist', helpers.orderDist);

app.use((req, res) => {
  res.status(404).send('Invalid endpoint.');
});

module.exports = app;