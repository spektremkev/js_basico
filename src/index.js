
  const express = require('express')
    const routes = require('./routes')

    const app = express()

    app.users(routes)

    app.listen(8080, () => {

        console.log('teste e com teste de sever na porta 8080')
//
    })


