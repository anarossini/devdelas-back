const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AlunasSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: { type: String, required: true },
  linguagem: { type: String, required: true }
})

const alunasModel = mongoose.model("alunas", AlunasSchema);

module.exports = alunasModel;
