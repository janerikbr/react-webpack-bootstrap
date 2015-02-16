const express = require('express');
const React = require('react');
const Layout = require('./components/Layout.jsx');

const app = express();

app.get('/', function(req, res) {
  var html = React.renderToString(<Layout />);
  res.send(html);
});

app.use(express.static('static', {}));

module.exports = app;



