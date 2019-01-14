const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
console.log('Running dev?', dev)

const app = next({ dev })
const handle = app.getRequestHandler()

const guestsData = []

app.prepare().then(() => {
  const server = express()
  server.use(express.json())

  server.post('/api/guestbook', (req, res, next) => {
    const { fullname, message } = req.body

    const newGuest = {
      fullname,
      message
    }
    guestsData.push(newGuest)

    res.json(guestsData)
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

  // if (!dev) {
  //   console.log('Running in Production')
  //   // Express will serve up production assets
  //   app.use(express.static('client/build'))
  //
  //   // Express will serve up the index.html file as the default if it can't find it in our route files above
  //   const path = require('path')
  //   app.get('*', (req, res) => {
  //     res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  //   })
  // }

  const PORT = process.env.PORT || 3000
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
