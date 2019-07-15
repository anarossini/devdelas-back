const { connect } = require('./Repository')
const alunasModel = require('./AlunasSchema')

connect()

const getAll = async () => {
  return alunasModel.find((error, alunas) => {
    return alunas
  })
}

const add = (aluna) => {
  const novaAluna = new alunasModel(aluna)
  return novaAluna.save()
}

module.exports = {
  getAll,
  add
}