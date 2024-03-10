const genericCrud = require('./GenericController')
const {PlayerStat} = require('../models');
module.exports ={
    ...genericCrud(PlayerStat),
}