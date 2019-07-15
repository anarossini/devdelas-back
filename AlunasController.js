const { connect } = require('./Repository')
const alunasModel = require('./AlunasSchema')

connect()

const getAll = () => {
  let alunas = alunasModel.find({})
  return alunas
}

module.exports = {
  getAll
}
