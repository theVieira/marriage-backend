const mongoose = require('../services/database')

const GuestSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  isChild: {
    type: Boolean,
    require: true
  },
  confirm: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Guest', GuestSchema)