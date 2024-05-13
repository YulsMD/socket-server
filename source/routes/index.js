module.exports = (app) => {
  app.use('/api/v1/socket-io', paymentsRoutes)
}