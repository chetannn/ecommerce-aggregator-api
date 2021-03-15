const TestController = require('../controllers/TestController')
const AuthenticationController = require('../controllers/AuthenticationController')
const auth = require('../middleware/auth')


module.exports = (app) => {
    app.get('/test', TestController.test),
    app.get('/users', [auth], TestController.getAllUsers),
    app.post('/auth/register', AuthenticationController.register),
    app.post('/auth/login', AuthenticationController.login)
}