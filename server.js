const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var bodyParser = require('body-parser')

const guestsData = []

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  this.guestExists = function (guest) {
    let result = true

    return result
  }

  server.post('/api/guestbook', (req, res, next) => {
    const { fullname, message } = req.body

    const newGuest = {
      fullname,
      message
    }
    // if (this.guestExists(newGuest)) {
    //   let message = {
    //     success: false,
    //     message: 'Guest exists'
    //   }
    //   res.status('200').json(message)
    // } else {
    //   guestsData.push(newGuest)
    //   res.status('200').json(guestsData)
    // }
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
