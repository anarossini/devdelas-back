const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const alunasController = require('./AlunasController')
const professorasController = require('./ProfessorasController')
const userController = require('./UserController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/alunas', async (request, response) => {
  let alunas = await alunasController.getAll()

  response.send(alunas)
})

servidor.get('/professoras', async (request, response) => {
  let professoras = await professorasController.getAll()

  response.send(professoras)
})

servidor.post('/users', async (request, response) => {
  let user = await userController.add(request.body)

  if (user){
    response.status(201).send(user)
  } else {
    response.sendStatus(400)
  }
})

servidor.listen(PORT)
