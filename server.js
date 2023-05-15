
const express = require('express')
const transfusionApi = require('./Server/routes/api')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/',transfusionApi)

const port = 4000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})