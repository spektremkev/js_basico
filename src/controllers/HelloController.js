const {Router} = require ('espress')

const HelloController = Router()

HelloController.get('',(req, res) => {res.send('teste de navegador')})

module.exports = HelloController 