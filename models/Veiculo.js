var mongoose = require('mongoose');

var VeiculoSchema = new mongoose.Schema({
  modelo: String,
  cor: String,
  chassi: Number,
  marca: String,
  preco: Number,
  popularidade: Number
});

module.exports = mongoose.model('Veiculo', VeiculoSchema);
