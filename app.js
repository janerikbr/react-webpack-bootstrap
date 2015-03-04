const express = require('express');
const React = require('react');
const Layout = require('./components/Layout.jsx');

const app = express();

function fetchData() {
  return new Promise(resolve => {
    setTimeout(()=> {
     resolve({title: "Server side fetched title"})
    }, 30);
  });
}

app.get('/', function(req, res) {
  // make 'fake' http request and render component Layout with its data
  fetchData().then(data => {
    var html = React.renderToString(<Layout title={data.title}/>);
    res.status(200).send(html);
  });
});

app.use(express.static('static', {}));

module.exports = app;



