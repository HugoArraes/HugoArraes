var mongoose = require('mongoose');

var AlunoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  turma: String,
  turno: Number
});

module.exports = mongoose.model('Aluno', AlunoSchema);
