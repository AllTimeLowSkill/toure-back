require('dotenv').config()
const express = require('express')
const { json, urlencoded } = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const { routes } = require('./routes')

mongoose.connect(process.env.DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

routes.forEach((route) =>
  app.use(`/api/v1/${route}`, require(`./routes/${route}`))
)

app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`))
