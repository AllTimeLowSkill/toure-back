const router = require('express-promise-router')()
const { Toure } = require('../controllers')

router.route('/').get(Toure.getAll)
router.route('/:id').get(Toure.getOne)
router.route('/').post(Toure.create)
router.route('/:id').put(Toure.update)
router.route('/:id').delete(Toure.delete)

module.exports = router
