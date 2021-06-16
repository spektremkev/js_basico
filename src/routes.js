const express = require('express')

const HelloController = require('./controllers/HelloController')

const controllers = express ()

controllers.use('/', HelloController)

module.exports = controllers 