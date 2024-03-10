const {model, Schema} = require('mongoose');
var schema = new Schema({
  previwe:{
    type: String
  }, 
  content:{
    type: String
  }
});
module.exports = model('ShopGoods', schema)