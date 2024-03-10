const genericCrud = require('./GenericController')
const {ShopGoods} = require('../models');
module.exports ={
    ...genericCrud(ShopGoods),
}