const { model, Schema } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },

  price: {
    type: Number,
    default: 0,
  },

  description: {
    type: String,
    default: '',
  },

  city: {
    type: String,
    default: '',
  },

  hotel: {
    type: String,
    default: '',
  },

  hotelImg: {
    type: String,
    default: '',
  },

  toure: {
    type: String,
    default: '',
  },

  clients: {
    type: Array,
    default: [],
  },

  start: {
    type: String,
    default: '',
  },

  end: {
    type: String,
    default: '',
  },
})

module.exports = model('toure', schema)
