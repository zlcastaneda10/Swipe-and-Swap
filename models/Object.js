const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/swipe');
const ObjectSchema = new mongoose.Schema({
  titulo: {
    type: String,
    default: ''
  },
  descripcion:  {
    type: String,
    default: ''
  },
  tipo: {
    type: String,
    default: 'Ropa'
  },
  talla:  {
    type: String,
    default: 'Unica'
  },
  pminimo:  {
    type: Number,
    default: 0
  },
  pmaximo: {
    type: Number,
    default: 0
  },
  foto: {
    type: String,
    default: 'https://bit.ly/1XAQlMA'
  }
});

module.exports = mongoose.model('Object',ObjectSchema);