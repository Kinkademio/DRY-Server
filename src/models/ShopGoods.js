const {model, Schema} = require('mongoose');
var schema = new Schema({
  name:{
    type: String
  }, 
  costCoins:{
    type: Number
  },
  costRub:{
    type: Number
  },
  active:{
    type: Boolean
  }
});
module.exports = model('ShopGoods', schema)