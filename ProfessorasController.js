const { connect } = require('./Repository')
const professorasModel = require('./ProfessorasSchema')

connect()

const getAll = async () => {
  let professoras = await professorasModel.find({}, (err, professoras)=>{
  var userMap = {};
  
  users.forEach(function(user) {
  userMap[user._id] =user;
  });
  return userMap
  })

}

const add = (professora) => {
  const novaProfessora = new professorasModel(professora)
  return novaProfessora.save()
}

module.exports = {
  getAll,
  add
}