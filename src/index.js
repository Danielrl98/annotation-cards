const express = require('express')
const app = express()
const routers = require('./routers')
const cors = require('cors')
const anotations = require('./models/AnotationData')
const mongoose = require('mongoose')

require('./config/dbConfig')


app.use(cors())
app.use(express.json())
app.use(routers)
app.listen(3334,()=>{
    console.log('Node Conectado')
})