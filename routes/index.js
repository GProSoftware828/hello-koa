module.exports = (router) => {
  router.prefix(‘/v1’)
  router.use(‘/writings’, require(‘./writings’))
}