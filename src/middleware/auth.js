const jwt = require('jsonwebtoken')
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]

module.exports = function(req, res, next) {
    //TODO: First Check whether to use authentication to access to endpoints using config
    if(config.requiresAuth) return next()

    //TODO: If the authentication is disabled from application then immediately return the next middleware

    //TODO: Get the jwt token from header 
    const token = req.header('x-auth-token')
    //TODO: Check if token exists
    if (!token) return res.status(401).send('Access denied. No token provided.')
    //TODO: decode the token and if the token is decoded successfully then forward the request to the next middleware with the decoded user from the token 
    try {
        const decoded = jwt.verify(token, 'supersecretkey')
        req.user = decoded
        next()
      } catch (ex) {
          //TODO: else the token will be invalid and set the status code to 400 i.e. Bad Request
        res.status(400).send('Invalid token.')
      }
}