import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { fetchData } from './modules/apiClient'
import Layout from './components/Layout.jsx'
import Content from './components/Content/Content.jsx'

const app = express()
// eslint-disable-next-line no-process-env
const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpack = require('webpack')
  const compiler = webpack(require('./webpack/development.config'))
  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    // options
    stats: {
      colors: true,
    },
  }))
}

app.get('/', (req, res) => {
  // make 'fake' http request and render component Layout with its data
  fetchData().then((data) => {
    const props = { title: data.title }
    const markup = ReactDOMServer.renderToString(<Content {...props} />)
    const content = {
      props,
      markup,
      component: 'Content',
    }
    const html = ReactDOMServer.renderToStaticMarkup(<Layout content={content} />)
    res.status(200).send(html)
  })
})

app.use(express.static('static', {}))

export default app
