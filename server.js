const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(express.json())

  server.post('/api/guestbook', (req, res, next) => {
    // A POSTED REQUEST HERE
  })

  server.get('/api/guestbook', async (req, res, next) => {
    const response = [
      {
        id: 1,
        name: 'John Doe',
        message: 'Hello dude!'
      },
      {
        id: 2,
        name: 'Jane Doe',
        message: 'Hello Dudet!'
      }
    ]

    res.json(
      response
    )
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
