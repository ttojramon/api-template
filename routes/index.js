module.exports = (app) => {
  app.use('/', (req, res) => {
    res.status(200).json({
      message: 'Hello World!!',
    })
  })

  app.use((_, res) => {
    res.status(404).json({
      message: 'Not found',
    })
  })

  app.use((err, _, res) => {
    res.status(500).json({
      name: err.name,
      message: err.message,
    })
  })
}
