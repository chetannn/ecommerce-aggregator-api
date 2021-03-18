const jwt = require('jsonwebtoken')
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]

module.exports = function(req, res, next) {
    //TODO: First Check whether to use authentication to access to endpoints using config
    if(config.requiresAuth) return next()

    //TODO: If the authentication is disabled from application then immediately return the next middleware

    //TODO: Get the jwt token from header 
    //TODO: Check if token exists

    //TODO: decode the token and if the token is decoded successfully then forward the request to the next middleware with the decoded user from the token 
    //TODO: else the token will be invalid and set the status code to 400 i.e. Bad Request
    
    //TODO: This is forwarding the request to the next middleware
    next()
}