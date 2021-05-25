const generic = require('./generic.controller')
const { City } = require('../models')

module.exports = {
  ...generic(City),
}
