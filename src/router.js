const express = require('express')
const router = express.Router()

const GuestRoutes = require('./routes/GuestRoutes')

router.use(GuestRoutes)

module.exports = router