var express = require('express');
var React = require('react');
var Layout = require('./components/Layout.jsx');

var app = express();

app.get('/', function(req, res) {
  var html = React.renderToString(<Layout />);
  res.send(html);
});

app.use(express.static('static', {}));

module.exports = app;



