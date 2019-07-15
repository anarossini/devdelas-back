const { connect } = require('./Repository')
const professorasModel = require('./ProfessorasSchema')

connect()

const getAll = () => {
  let professoras = professorasModel.find({})
  return professoras
}

module.exports = {
  getAll
}
