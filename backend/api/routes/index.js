const express = require('express')
const category = require('./categoryRoute')
const device = require('./deviceRoute')

// gerar documentacao
// app.use('/', category);
// app.use('/', device);

module.exports = app => {
  app.use(
    express.json(),
    category,
    device
  )
}