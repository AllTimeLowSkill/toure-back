const generic = require('./generic.controller')
const { Toure } = require('../models')

module.exports = {
  ...generic(Toure),
}
