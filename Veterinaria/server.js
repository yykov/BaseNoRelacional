const express = require('express')
const initDB = require('./config/db')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const petRouters = require('./app/routes/mascota')
const clientRouters = require('./app/routes/cliente')
app.use(
    bodyParser.json({
        limit: '20mb'
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

app.use(petRouters)
app.use(clientRouters)

app.listen(port,() => {
    console.log('La app está en linea')
})

initDB()
