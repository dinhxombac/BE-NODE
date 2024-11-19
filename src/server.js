const express = require('express')
const path = require('path')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8888

//template engine 
app.set('views', './src/views')
app.set('view engine', 'els')

//config status file 
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('hi.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})