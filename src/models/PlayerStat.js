const {model, Schema} = require('mongoose');
var schema = new Schema({
  localBaseId: {
    type: Number,
  },
  lifeSpentCount:{
    type: Number
  },

  coinsSpentCount:{
    type:Number
  },
  coinsEarnedCount:{
    type: Number
  },

  сlueEarnedCount:{
    type:Number
  },
  сlueSpentCount:{
    type:Number
  },
  
  openedLocations:{
    type: Array
  },
  passedLocations:{
    type: Array
  }
});
module.exports = model('PlayerStat', schema)