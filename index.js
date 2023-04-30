const express = require('express')
const app = express()
const port =process.env.PORT || 5000;
const cors = require('cors')

const category = require('./data/categoryData.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/category', (req, res)=>{
  res.send(category)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})