module.exports = function(req,res,next) {
    //TODO: First Check whether to use authentication to access to endpoints using config
    //TODO: If the authentication is disabled from application then immediately return the next middleware

    //TODO: Check if the user is admin or not
    // TODO: If he/she is admin then forward the request to the next middleware Else return the Access denied error with 403 status code

    //TODO: This is forwarding the request to the next middleware
    next()
}