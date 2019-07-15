const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./AlunasController')
const professorascontroller = require('./ProfessorasController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/alunas', async (request, response) => {
  controller.getAll()
    .then(alunas => response.send(alunas))
})

servidor.get('/professoras', async (request, response) => {
  let professoras = await professorascontroller.getAll()

  response.status(200).send(professoras)
})

servidor.post('/users', async (request, response) => {
let users = await UserController.post()

response.status(200).send(users)
})

servidor.listen(3000)
console.log("servidorzinho rodando na porta 3000")
