const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]

module.exports = function(req,res,next) {
    //TODO: First Check whether to use authentication to access to endpoints using config
    //TODO: If the authentication is disabled from application then immediately return the next middleware
    if(!config.requiresAuth) return next()

    //TODO: Check if the user is admin or not
    // TODO: If he/she is admin then forward the request to the next middleware Else return the Access denied error with 403 status code
     if(req.user.isAdmin) return next()

     return res.status(403).json({ error: 'Access denied' })
}