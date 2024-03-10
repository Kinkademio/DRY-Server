const genericCrud = require('./GenericController')
const {Media} = require('../models');
module.exports ={
    ...genericCrud(Media),
}