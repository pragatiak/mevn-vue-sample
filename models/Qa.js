var mongoose = require('mongoose')

var QaSchema = new mongoose.Schema({
  id: String,
  question: String,
  answer: String,
  answer_desc: String,
  updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('qa', QaSchema)
