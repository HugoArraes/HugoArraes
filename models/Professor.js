var mongoose = require('mongoose');

var ProfessorSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  turma: String,
  turno: Number
});

module.exports = mongoose.model('Professor', ProfessorSchema);
