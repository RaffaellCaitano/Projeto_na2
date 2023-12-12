const mongoose = require('mongoose');

const placaSchema = new mongoose.Schema({
  numeroPlaca: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  dataHora: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Placa', placaSchema);
