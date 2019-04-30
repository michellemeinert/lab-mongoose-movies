const mongoose = require('mongoose')
const celebratiesSchema = require('./schemas/celebratiesSchema');

const Celebraty = mongoose.model('Celebraty', celebratiesSchema);



module.exports = Celebraty;