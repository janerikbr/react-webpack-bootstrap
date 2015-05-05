import express from "express";
import React from "react";
import Layout from "./components/Layout.jsx";
import Content from "./components/Content.jsx";

const app = express();
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  var compiler = webpack(require("./webpack.config"));
  app.use(webpackDevMiddleware(compiler, {
    // options
  }));
}

function fetchData() {
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve({title: "Server side fetched title"});
    }, 30);
  });
}

app.get("/", function (req, res) {
  // make 'fake' http request and render component Layout with its data
  fetchData().then(data => {
    const props = {title: data.title};
    const markup = React.renderToString(<Content {...props}/>);

    const content = {
      props: props,
      markup: markup,
      component: 'Content'
    };

    const html = React.renderToStaticMarkup(<Layout content={content}/>);
    res.status(200).send(html);
  });
});

app.use(express.static("static", {}));

export default app;
