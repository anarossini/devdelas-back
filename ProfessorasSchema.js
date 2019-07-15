const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfessorasSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: { type: String, required: true }
})

const professorasModel = mongoose.model("professoras", ProfessorasSchema);

module.exports = professorasModel;
