const express = require('express')
const app = express()
const port = 8080

app.set('views', './templates')
app.set('view engine', 'pug')

app.use('/public', express.static('public'))

app.get('*', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})