const { connect } = require('./Repository')
const professorasModel = require('./ProfessorasSchema')
const alunasModel = require('./AlunasSchema')

connect()

const add = (params) => {

  if (params.tipo == "ensinar") {
    const novaProfessora = new professorasModel(params)
    return novaProfessora.save()
  } if (params.tipo == "aprender") {
    const novaAluna = new alunasModel(params)
    return novaAluna.save()
  }
}

module.exports = {
  add
}
