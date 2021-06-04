const router = require('express-promise-router')()
const { City } = require('../controllers')

router.route('/').get(City.getAll)
router.route('/:id').get(City.getOne)
router.route('/').post(City.create)
router.route('/:id').delete(City.delete)

module.exports = router
