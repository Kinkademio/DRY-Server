const router = require('express-promise-router')()

const {ShopGoods} = require('../controllers')

router.route('/:id').get(ShopGoods.get)
router.route('/').post(ShopGoods.create)
router.route('/').get(ShopGoods.getAll)
router.route('/:id').put(ShopGoods.update)
router.route('/:id').delete(ShopGoods.delete)

module.exports = router