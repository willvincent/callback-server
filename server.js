const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(9000)

router.all('*', function (req, res) {
  console.log(`METHOD: ${req.method}`)
  console.log('QUERY:')
  console.dir(req.query)
  console.log('BODY:')
  console.dir(req.body, { depth: 3 })
  res.status(200).send('ok')
})

app.use('/', router)
