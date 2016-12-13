var mongoose = require('mongoose');

var EscolaSchema = new mongoose.Schema({
  nome: String,
  endereco: String,
  numero: Number,
  alunos: Number,
  professores: Number,
  funcionarios: Number
});

module.exports = mongoose.model('Escola', EscolaSchema);
