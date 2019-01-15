const express = require('express')
const next = require('next')
const cors = require('cors')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const guestsData = []

app.prepare().then(() => {
  const server = express()

  // var corsOptions = {
  //   origin: 'http://example.com',
  //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  // }

  server.use(cors())

  // server.use(function (req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*')
  //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  //   next()
  // })

  server.post('/api/guestbook', (req, res, next) => {
    const { fullname, message } = req.body

    const newGuest = {
      fullname,
      message
    }
    guestsData.push(newGuest)

    res.status('200').json(guestsData)
  })

  server.get('/api/guestbook', async (req, res, next) => {
    const response = guestsData

    res.json(
      response
    )
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
