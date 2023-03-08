const { createServer } = require('https')
const fs = require('fs')
const { parse } = require('url')
const next = require('next')

const dev = false
const port = process.env.PORT || 443
const app = next({ dev })
const handle = app.getRequestHandler()
const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
}

app.prepare().then(() => {
  createServer(options, (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on https://localhost:',port)
  })
})