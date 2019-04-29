const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const celebratiesSchema = new Schema ({
  name: String,
  occupation: String,
  catchPhrase: String
})

module.exports = celebratiesSchema;