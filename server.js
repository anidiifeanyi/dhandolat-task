require('dotenv').config()
const express = require('express')
const { json } = require('express')
const routes = require('./src/route/routes')
const database = require('./src/config/db')
const bodyparser = require('body-parser')
const app = express()

// MongoDB Connection
database()

// use json
app.use(json())

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// set routes
app.use('/', routes)

const PORT = process.env.PORT || 4100

app.listen(PORT, () => console.log(`Serving on port ${PORT}`))
