const logger = (req, res, next) => {
  const {method, url} = req

  const time = new Date()

  console.log(`request ${method} to ${url} was made on ${time}`)

  next()
}

module.exports = logger