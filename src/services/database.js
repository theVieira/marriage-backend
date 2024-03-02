require('dotenv').config()
const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL

mongoose.connect(dbUrl)

module.exports = mongoose