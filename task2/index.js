const con = require('./models/index')
const express = require('express')
const cors = require('cors')

const swaggerui = require('swagger-ui-express')
const swaggerjsdoc = require('swagger-jsdoc')

const app = express()
app.use(express.json())

app.use(cors())
const port = 6002

// const option =
const option = {
  definition: {
    openapi: '3.0.0',

    info: {
      title: 'api documentetion for Server...',
      version: '1.0.0',
    },

    servers: [
      {
        url: 'http://localhost:6002',
      },
    ],
  },
  apis: ['./Routes/index.js'],
}

app.use('/testing', swaggerui.serve, swaggerui.setup(swaggerjsdoc(option)))

//user
const { user_Routes } = require('./Routes/index')
app.use('/user', user_Routes)

app.listen(port, (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log(`"server started on port no https://localhost:${port}"`)
  }
})
