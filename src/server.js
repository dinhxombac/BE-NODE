require('dotenv').config()
const express = require('express')
const path = require('path')
const configviewEngiine = require('./config/viewEngine')
const webRouter = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888

//template engine 
configviewEngiine(app)

//Khai bao router
app.use('/',webRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})