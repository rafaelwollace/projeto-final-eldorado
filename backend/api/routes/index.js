const express = require('express')
const category = require('./categoryRoute')
const device = require('./deviceRoute')
const user = require('./userRoute')
const cors = require('cors');

// gerar documentacao
  // app.use('/', category);
  // app.use('/', device);
  // app.use('/', user);


module.exports = app => {
  app.use(
    cors(),
    express.json(),
    category,
    device,
    user
  )
}