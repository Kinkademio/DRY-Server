const router = require('express-promise-router')()

const {PlayerStat} = require('../controllers')

router.route('/:id').get(PlayerStat.get)
router.route('/').post(PlayerStat.create)
router.route('/').get(PlayerStat.getAll)
router.route('/:id').put(PlayerStat.update)
router.route('/:id').delete(PlayerStat.delete)

module.exports = router