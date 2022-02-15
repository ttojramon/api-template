const app = require('./app')
const server = require('http').createServer(app)
const port = app.get('port')

const startServer = async () => {
  await new Promise((resolve) => server.listen(port, resolve))
  console.log('Server ready on port:', port)
}

startServer().catch((error) => console.error(error))
