const router = require('express-promise-router')()

const {Media} = require('../controllers')

router.route('/:id').get(Media.get)
router.route('/').post(Media.create)
router.route('/').get(Media.getAll)
router.route('/:id').put(Media.update)
router.route('/:id').delete(Media.delete)

module.exports = router