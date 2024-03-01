const express = require('express')
const cors = require('cors')
const router = require('./routes/GuestRoutes')
const port = process.env.PORT || 8080
const app = express()
const path = require('node:path')

app.engine('html', require('ejs').__express)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.use(express.json())
app.use(cors())
app.use(router)
app.listen(port, () => console.log('server running'))